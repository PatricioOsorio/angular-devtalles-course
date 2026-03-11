import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withDevtools } from '@tanstack/angular-query-experimental/devtools';
import { provideTanStackQuery } from '@tanstack/angular-query-experimental';
import {queryClient} from "@app/core/query/query-client";
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideHttpClient(withFetch()),
    provideTanStackQuery(queryClient, withDevtools()),
  ],
};
