import React from 'react';
import { LocaleContext } from './localeProvider';
import hoistNonReactStatic from 'hoist-non-react-statics';

const LocaleWrapper = (WrappedComponent, name) => {
  const LocaleReceiver = props => {
    return (
      <LocaleContext.Consumer>
        {locale => {
          const componentLocale =
            locale && locale[name || WrappedComponent.name];
          const localeCode = locale && locale.code;

          const { forwardedRef, ...rest } = props;

          return (
            <WrappedComponent
              {...rest}
              ref={forwardedRef}
              locale={componentLocale}
              localecode={localeCode}
            />
          );
        }}
      </LocaleContext.Consumer>
    );
  };
  
  const forwardRef = (props, ref) => {
    return <LocaleReceiver {...props} forwardedRef={ref} />;
  };
  const LocaleReceiverWithRef = React.forwardRef(forwardRef);
  hoistNonReactStatic(LocaleReceiverWithRef, WrappedComponent);

  return LocaleReceiverWithRef;
};

export default LocaleWrapper;
