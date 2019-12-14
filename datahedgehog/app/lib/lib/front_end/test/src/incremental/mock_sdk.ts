/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/incremental/mock_sdk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var createSdkFiles : (fileSystem : any) => core.DartMap<string,lib3.Uri> = (fileSystem : any) : core.DartMap<string,lib3.Uri> =>  {
    let dartLibraries : core.DartMap<string,lib3.Uri> = new core.DartMap.literal([
    ]);
    var addSdkLibrary : (name : string,contents : string) => void = (name : string,contents : string) : void =>  {
        let path : string = `${name}/${name}.dart`;
        let uri : lib3.Uri = lib3.Uri.parse(`file:///sdk/lib/${path}`);
        fileSystem.entityForUri(uri).writeAsStringSync(contents);
        dartLibraries.set(name,uri);
    };
    addSdkLibrary('core','library dart.core;
    addSdkLibrary('async','library dart.async;
    addSdkLibrary('collection','library dart.collection;');
    addSdkLibrary('convert','library dart.convert;');
    addSdkLibrary('developer','library dart.developer;');
    addSdkLibrary('io','library dart.io;');
    addSdkLibrary('isolate','library dart.isolate;');
    addSdkLibrary('math','library dart.math;
    addSdkLibrary('mirrors','library dart.mirrors;');
    addSdkLibrary('nativewrappers','library dart.nativewrappers;');
    addSdkLibrary('profiler','library dart.profiler;');
    addSdkLibrary('typed_data','library dart.typed_data;');
    addSdkLibrary('vmservice_io','library dart.vmservice_io;');
    addSdkLibrary('_builtin','library dart._builtin;');
    addSdkLibrary('_internal','library dart._internal;
    addSdkLibrary('_vmservice','library dart._vmservice;');
    return dartLibraries;
};
export class properties {
}