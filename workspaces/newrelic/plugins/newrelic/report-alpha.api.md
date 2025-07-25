## API Report File for "@backstage-community/plugin-newrelic"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { AnyApiFactory } from '@backstage/core-plugin-api';
import { AnyRouteRefParams } from '@backstage/frontend-plugin-api';
import { ConfigurableExtensionDataRef } from '@backstage/frontend-plugin-api';
import { ExtensionDefinition } from '@backstage/frontend-plugin-api';
import { FrontendPlugin } from '@backstage/frontend-plugin-api';
import { IconComponent } from '@backstage/core-plugin-api';
import { JSX as JSX_2 } from 'react';
import { RouteRef } from '@backstage/frontend-plugin-api';

// @alpha (undocumented)
const _default: FrontendPlugin<
  {},
  {},
  {
    'api:newrelic': ExtensionDefinition<{
      kind: 'api';
      name: undefined;
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
      params: {
        factory: AnyApiFactory;
      };
    }>;
    'nav-item:newrelic': ExtensionDefinition<{
      kind: 'nav-item';
      name: undefined;
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        {
          title: string;
          icon: IconComponent;
          routeRef: RouteRef<undefined>;
        },
        'core.nav-item.target',
        {}
      >;
      inputs: {};
      params: {
        title: string;
        icon: IconComponent;
        routeRef: RouteRef<undefined>;
      };
    }>;
    'page:newrelic': ExtensionDefinition<{
      kind: 'page';
      name: undefined;
      config: {
        path: string | undefined;
      };
      configInput: {
        path?: string | undefined;
      };
      output:
        | ConfigurableExtensionDataRef<JSX_2.Element, 'core.reactElement', {}>
        | ConfigurableExtensionDataRef<string, 'core.routing.path', {}>
        | ConfigurableExtensionDataRef<
            RouteRef<AnyRouteRefParams>,
            'core.routing.ref',
            {
              optional: true;
            }
          >;
      inputs: {};
      params: {
        defaultPath: string;
        loader: () => Promise<JSX.Element>;
        routeRef?: RouteRef<AnyRouteRefParams> | undefined;
      };
    }>;
  }
>;
export default _default;

// (No @packageDocumentation comment for this package)
```
