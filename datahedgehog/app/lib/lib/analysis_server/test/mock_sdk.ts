/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/mock_sdk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace MockSdk {
    export type Constructors = 'MockSdk';
    export type Interface = Omit<MockSdk, Constructors>;
}
@DartClass
@Implements(any)
export class MockSdk implements any.Interface {
    private static __$LIB_CORE : MockSdkLibrary;
    static get LIB_CORE() : MockSdkLibrary { 
        if (this.__$LIB_CORE===undefined) {
            this.__$LIB_CORE = new MockSdkLibrary('dart:core','/lib/core/core.dart','library dart.core;
        }
        return this.__$LIB_CORE;
    }

    private static __$LIB_ASYNC : MockSdkLibrary;
    static get LIB_ASYNC() : MockSdkLibrary { 
        if (this.__$LIB_ASYNC===undefined) {
            this.__$LIB_ASYNC = new MockSdkLibrary('dart:async','/lib/async/async.dart','library dart.async;
        }
        return this.__$LIB_ASYNC;
    }

    private static __$LIB_COLLECTION : MockSdkLibrary;
    static get LIB_COLLECTION() : MockSdkLibrary { 
        if (this.__$LIB_COLLECTION===undefined) {
            this.__$LIB_COLLECTION = new MockSdkLibrary('dart:collection','/lib/collection/collection.dart','library dart.collection;
        }
        return this.__$LIB_COLLECTION;
    }

    private static __$LIB_CONVERT : MockSdkLibrary;
    static get LIB_CONVERT() : MockSdkLibrary { 
        if (this.__$LIB_CONVERT===undefined) {
            this.__$LIB_CONVERT = new MockSdkLibrary('dart:convert','/lib/convert/convert.dart','library dart.convert;
        }
        return this.__$LIB_CONVERT;
    }

    private static __$LIB_MATH : MockSdkLibrary;
    static get LIB_MATH() : MockSdkLibrary { 
        if (this.__$LIB_MATH===undefined) {
            this.__$LIB_MATH = new MockSdkLibrary('dart:math','/lib/math/math.dart','library dart.math;
        }
        return this.__$LIB_MATH;
    }

    private static __$LIB_HTML : MockSdkLibrary;
    static get LIB_HTML() : MockSdkLibrary { 
        if (this.__$LIB_HTML===undefined) {
            this.__$LIB_HTML = new MockSdkLibrary('dart:html','/lib/html/dartium/html_dartium.dart','library dart.html;
        }
        return this.__$LIB_HTML;
    }

    private static __$LIB_INTERNAL : MockSdkLibrary;
    static get LIB_INTERNAL() : MockSdkLibrary { 
        if (this.__$LIB_INTERNAL===undefined) {
            this.__$LIB_INTERNAL = new MockSdkLibrary('dart:_internal','/lib/internal/internal.dart','library dart._internal;
        }
        return this.__$LIB_INTERNAL;
    }

    private static __$LIBRARIES : core.DartList<any>;
    static get LIBRARIES() : core.DartList<any> { 
        if (this.__$LIBRARIES===undefined) {
            this.__$LIBRARIES = new core.DartList.literal(MockSdk.LIB_CORE,MockSdk.LIB_ASYNC,MockSdk.LIB_COLLECTION,MockSdk.LIB_CONVERT,MockSdk.LIB_MATH,MockSdk.LIB_HTML,MockSdk.LIB_INTERNAL);
        }
        return this.__$LIBRARIES;
    }

    private static __$librariesContent : string;
    static get librariesContent() : string { 
        if (this.__$librariesContent===undefined) {
            this.__$librariesContent = 'const Map<String, LibraryInfo> libraries = const {
        }
        return this.__$librariesContent;
    }

    provider : any;

    _analysisContext : any;

    _bundle : any;

    constructor(_namedArguments? : {generateSummaryFiles? : boolean,resourceProvider? : any}) {
    }
    @defaultConstructor
    MockSdk(_namedArguments? : {generateSummaryFiles? : boolean,resourceProvider? : any}) {
        let {generateSummaryFiles,resourceProvider} = Object.assign({
            "generateSummaryFiles" : false}, _namedArguments );
        this.provider = (resourceProvider || new bare.createInstance(any,null));
        MockSdk.LIBRARIES.forEach((library : any) =>  {
            this.provider.newFile(library.path,(library as MockSdkLibrary).content);
        });
        this.provider.newFile(this.provider.convertPath('/lib/_internal/sdk_library_metadata/lib/libraries.dart'),MockSdk.librariesContent);
        if (generateSummaryFiles) {
            let bytes : core.DartList<number> = this._computeLinkedBundleBytes();
            this.provider.newFileWithBytes(this.provider.convertPath('/lib/_internal/spec.sum'),bytes);
            this.provider.newFileWithBytes(this.provider.convertPath('/lib/_internal/strong.sum'),bytes);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        if (op(Op.EQUALS,this._analysisContext,null)) {
            this._analysisContext = new bare.createInstance(any,null,null);
            let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this)));
            this._analysisContext.sourceFactory = factory;
        }
        return this._analysisContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkLibraries() : core.DartList<any> {
        return MockSdk.LIBRARIES;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkVersion() : string {
        return throw this.unimplemented;
    }
    get unimplemented() : core.UnimplementedError {
        return new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uris() : core.DartList<string> {
        let uris : core.DartList<string> = new core.DartList.literal<string>();
        for(let library of MockSdk.LIBRARIES) {
            uris.add(library.shortName);
        }
        return uris;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fromFileUri(uri : lib3.Uri) : any {
        let filePath : string = this.provider.pathContext.fromUri(uri);
        for(let library of this.sdkLibraries) {
            let libraryPath : string = this.provider.convertPath(library.path);
            if (filePath == libraryPath) {
                try {
                    let file : any = this.provider.getResource(filePath);
                    let dartUri : lib3.Uri = lib3.Uri.parse(library.shortName);
                    return file.createSource(dartUri);
                } catch (__error__) {

                    {
                        let exception = __error__;
                        return null;
                    }
                }
            }
            let libraryRootPath : string = op(Op.PLUS,this.provider.pathContext.dirname(libraryPath),this.provider.pathContext.separator);
            if (new core.DartString(filePath).startsWith(libraryRootPath)) {
                let pathInLibrary : string = new core.DartString(filePath).substring(new core.DartString(libraryRootPath).length);
                let uriStr : string = `${library.shortName}/${pathInLibrary}`;
                try {
                    let file : any = this.provider.getResource(filePath);
                    let dartUri : lib3.Uri = lib3.Uri.parse(uriStr);
                    return file.createSource(dartUri);
                } catch (__error__) {

                    {
                        let exception = __error__;
                        return null;
                    }
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedBundle() : any {
        if (op(Op.EQUALS,this._bundle,null)) {
            let summaryFile : any = this.provider.getFile(this.provider.convertPath('/lib/_internal/spec.sum'));
            let bytes : core.DartList<number>;
            if (summaryFile.exists) {
                bytes = summaryFile.readAsBytesSync();
            }else {
                bytes = this._computeLinkedBundleBytes();
            }
            this._bundle = new bare.createInstance(any,null,bytes);
        }
        return this._bundle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSdkLibrary(dartUri : string) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mapDartUri(dartUri : string) : any {
        let uriToPath : core.DartMap<string,string> = new core.DartMap.literal([
            ["dart:core","/lib/core/core.dart"],
            ["dart:html","/lib/html/dartium/html_dartium.dart"],
            ["dart:async","/lib/async/async.dart"],
            ["dart:collection","/lib/collection/collection.dart"],
            ["dart:convert","/lib/convert/convert.dart"],
            ["dart:math","/lib/math/math.dart"],
            ["dart:_internal","/lib/internal/internal.dart"]]);
        let path : string = uriToPath.get(dartUri);
        if (path != null) {
            let file : any = this.provider.getResource(path);
            let uri : lib3.Uri = new lib3.Uri({
                scheme : 'dart',path : new core.DartString(dartUri).substring(5)});
            return file.createSource(uri);
        }
        return null;
    }
    _computeLinkedBundleBytes() : core.DartList<number> {
        let librarySources : core.DartList<any> = this.sdkLibraries.map((library : any) =>  {
            return this.mapDartUri(library.shortName);
        }).toList();
        return new bare.createInstance(any,null,librarySources,this.context,this.context.analysisOptions.strongMode).build();
    }
}

export namespace MockSdkLibrary {
    export type Constructors = 'MockSdkLibrary';
    export type Interface = Omit<MockSdkLibrary, Constructors>;
}
@DartClass
@Implements(any)
export class MockSdkLibrary implements any.Interface {
    shortName : string;

    path : string;

    content : string;

    constructor(shortName : string,path : string,content : string) {
    }
    @defaultConstructor
    MockSdkLibrary(shortName : string,path : string,content : string) {
        this.shortName = shortName;
        this.path = path;
        this.content = content;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get category() : string {
        return throw this.unimplemented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDart2JsLibrary() : boolean {
        return throw this.unimplemented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDocumented() : boolean {
        return throw this.unimplemented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isImplementation() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInternal() : boolean {
        return new core.DartString(this.shortName).startsWith('dart:_');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isShared() : boolean {
        return throw this.unimplemented;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isVmLibrary() : boolean {
        return throw this.unimplemented;
    }
    get unimplemented() : core.UnimplementedError {
        return new core.UnimplementedError();
    }
}

export class properties {
}