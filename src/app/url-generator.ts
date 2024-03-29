import { Injectable } from '@angular/core';
import {
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  normalizeRoot,
  Pluralizer
} from '@ngrx/data';

@Injectable()
export class NoSlashHttpUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(private myPluralizer: Pluralizer) {
    super(myPluralizer);
  }

  // protected override getResourceUrls(
  //   entityName: string,
  //   root: string
  // ): HttpResourceUrls {
  //   let resourceUrls = this.knownHttpResourceUrls[entityName];
  //   console.log(resourceUrls);
  //   if (!resourceUrls) {
  //     const nRoot = normalizeRoot(root);
  //     const url = `${nRoot}/${this.myPluralizer.pluralize(
  //       entityName
  //     )}`.toLowerCase();
  //
  //     resourceUrls = {
  //       entityResourceUrl: url,
  //       collectionResourceUrl: url
  //     };
  //     this.registerHttpResourceUrls({ [entityName]: resourceUrls });
  //   }
  //   return resourceUrls;
  // }
}
