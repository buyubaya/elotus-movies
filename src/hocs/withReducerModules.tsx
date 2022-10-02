import React, { ComponentType } from 'react';
import { DynamicModuleLoader, IModuleTuple } from 'redux-dynamic-modules-react';

export const withReducerModules = (...modules: IModuleTuple) => {
  return function <P extends object>(Component: ComponentType<P>) {
    return function EnhancedComponent(props: P) {
      return (
        // @ts-ignore The IDynamicModuleLoaderProps in this lib missing typings for children
        <DynamicModuleLoader modules={modules}>
          <Component {...props} />
        </DynamicModuleLoader>
      );
    };
  };
};
