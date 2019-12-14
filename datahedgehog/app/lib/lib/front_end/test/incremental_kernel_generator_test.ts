/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/incremental_kernel_generator_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./src/incremental/mock_sdk";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(IncrementalKernelGeneratorTest);
    });
};
export namespace IncrementalKernelGeneratorTest {
    export type Constructors = 'IncrementalKernelGeneratorTest';
    export type Interface = Omit<IncrementalKernelGeneratorTest, Constructors>;
}
@DartClass
export class IncrementalKernelGeneratorTest {
    fileSystem;

    incrementalKernelGenerator : any;

    getInitialState(entryPoint : lib3.Uri) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let dartLibraries : core.DartMap<string,lib3.Uri> = lib4.createSdkFiles(this.fileSystem);
            let compilerOptions = ((_) : any =>  {
                {
                    _.fileSystem = this.fileSystem;
                    _.byteStore = new bare.createInstance(any,null);
                    _.strongMode = true;
                    _.chaseDependencies = true;
                    _.dartLibraries = dartLibraries;
                    _.packagesFileUri = lib3.Uri.parse('file:///test/.packages');
                    return _;
                }
            })(new bare.createInstance(any,null));
            this.incrementalKernelGenerator = await IncrementalKernelGenerator.newInstance(compilerOptions,entryPoint);
            return (await this.incrementalKernelGenerator.computeDelta()).newProgram;
        } )());
    }

    test_compile_chain() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile('/test/.packages','test:lib/');
            let aPath : string = '/test/lib/a.dart';
            let bPath : string = '/test/lib/b.dart';
            let cPath : string = '/test/lib/c.dart';
            let aUri : lib3.Uri = this.writeFile(aPath,'var a = 1;');
            let bUri : lib3.Uri = this.writeFile(bPath,'import \'a.dart\';
            let cUri : lib3.Uri = this.writeFile(cPath,'import \'a.dart\';
            {
                let program : any = await this.getInitialState(cUri);
                this._assertLibraryUris(program,{
                    includes : new core.DartList.literal(aUri,bUri,cUri,lib3.Uri.parse('dart:core'))});
                let library : any = this._getLibrary(program,cUri);
                expect(this._getLibraryText(library),'library;
            }
            this.writeFile(bPath,'import \'a.dart\';
            this.incrementalKernelGenerator.invalidate(bUri);
            {
                let delta : any = await this.incrementalKernelGenerator.computeDelta();
                let program : any = delta.newProgram;
                this._assertLibraryUris(program,{
                    includes : new core.DartList.literal(bUri,cUri),excludes : new core.DartList.literal(aUri,lib3.Uri.parse('dart:core'))});
                let library : any = this._getLibrary(program,cUri);
                expect(this._getLibraryText(library),'library;
            }
        } )());
    }

    test_compile_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile('/test/.packages','test:lib/');
            let aPath : string = '/test/lib/a.dart';
            let bPath : string = '/test/lib/b.dart';
            let cPath : string = '/test/lib/c.dart';
            this.writeFile(aPath,'class A {}');
            this.writeFile(bPath,'export "a.dart";');
            let cUri : lib3.Uri = this.writeFile(cPath,'import \'b.dart\';
            let program : any = await this.getInitialState(cUri);
            let library : any = this._getLibrary(program,cUri);
            expect(this._getLibraryText(library),'library;
        } )());
    }

    test_compile_export_cycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile('/test/.packages','test:lib/');
            let aPath : string = '/test/lib/a.dart';
            let bPath : string = '/test/lib/b.dart';
            let cPath : string = '/test/lib/c.dart';
            this.writeFile(aPath,'export "b.dart"; class A {}');
            this.writeFile(bPath,'export "a.dart"; class B {}');
            let cUri : lib3.Uri = this.writeFile(cPath,'import \'b.dart\';
            {
                let program : any = await this.getInitialState(cUri);
                let library : any = this._getLibrary(program,cUri);
                expect(this._getLibraryText(library),'library;
            }
            this.writeFile(cPath,'import \'b.dart\';
            this.incrementalKernelGenerator.invalidate(cUri);
            {
                let delta : any = await this.incrementalKernelGenerator.computeDelta();
                let program : any = delta.newProgram;
                let library : any = this._getLibrary(program,cUri);
                expect(this._getLibraryText(library),'library;
            }
        } )());
    }

    test_compile_export_hideWithLocal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile('/test/.packages','test:lib/');
            let aPath : string = '/test/lib/a.dart';
            let bPath : string = '/test/lib/b.dart';
            let cPath : string = '/test/lib/c.dart';
            this.writeFile(aPath,'class A {} class B {}');
            this.writeFile(bPath,'export "a.dart"; class B {}');
            let cUri : lib3.Uri = this.writeFile(cPath,'import \'b.dart\';
            let program : any = await this.getInitialState(cUri);
            let library : any = this._getLibrary(program,cUri);
            expect(this._getLibraryText(library),'library;
        } )());
    }

    test_compile_includePathToMain() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile('/test/.packages','test:lib/');
            let aPath : string = '/test/lib/a.dart';
            let bPath : string = '/test/lib/b.dart';
            let cPath : string = '/test/lib/c.dart';
            let dPath : string = '/test/lib/d.dart';
            let aUri : lib3.Uri = this.writeFile(aPath,'import \'b.dart\';
            let bUri : lib3.Uri = this.writeFile(bPath,'import \'c.dart\';
            let cUri : lib3.Uri = this.writeFile(cPath,'c() { print(0); }');
            let dUri : lib3.Uri = this.writeFile(dPath,'d() {}');
            {
                let program : any = await this.getInitialState(aUri);
                this._assertLibraryUris(program,{
                    includes : new core.DartList.literal(aUri,bUri,cUri,dUri,lib3.Uri.parse('dart:core'))});
            }
            this.writeFile(cPath,'c() { print(1); }');
            this.incrementalKernelGenerator.invalidate(cUri);
            {
                let delta : any = await this.incrementalKernelGenerator.computeDelta();
                let program : any = delta.newProgram;
                this._assertLibraryUris(program,{
                    includes : new core.DartList.literal(aUri,bUri,cUri),excludes : new core.DartList.literal(dUri,lib3.Uri.parse('dart:core'))});
            }
        } )());
    }

    test_compile_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile('/test/.packages','test:lib/');
            let aPath : string = '/test/lib/a.dart';
            let bPath : string = '/test/lib/b.dart';
            this.writeFile(aPath,'typedef int F<T>(T x);');
            let bUri : lib3.Uri = this.writeFile(bPath,'import \'a.dart\';
            let program : any = await this.getInitialState(bUri);
            let library : any = this._getLibrary(program,bUri);
            expect(this._getLibraryText(library),'library;
        } )());
    }

    test_updateEntryPoint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile('/test/.packages','test:lib/');
            let path : string = '/test/lib/test.dart';
            let uri : lib3.Uri = this.writeFile(path,'main() {
            let initialText : string = 'library;
            {
                let program : any = await this.getInitialState(uri);
                let library : any = this._getLibrary(program,uri);
                expect(this._getLibraryText(library),initialText);
            }
            this.writeFile(path,'main() {
            {
                let delta : any = await this.incrementalKernelGenerator.computeDelta();
                expect(delta.newProgram.libraries,isEmpty);
            }
            this.incrementalKernelGenerator.invalidate(uri);
            {
                let delta : any = await this.incrementalKernelGenerator.computeDelta();
                let program : any = delta.newProgram;
                this._assertLibraryUris(program,{
                    includes : new core.DartList.literal(uri)});
                let library : any = this._getLibrary(program,uri);
                expect(this._getLibraryText(library),'library;
            }
        } )());
    }

    test_updatePart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.writeFile('/test/.packages','test:lib/');
            let libPath : string = '/test/lib/test.dart';
            let partPath : string = '/test/lib/bar.dart';
            let libUri : lib3.Uri = this.writeFile(libPath,'library foo;
            let partUri : lib3.Uri = this.writeFile(partPath,'part of foo;
            let program : any = await this.getInitialState(libUri);
            let library : any = this._getLibrary(program,libUri);
            expect(this._getLibraryText(library),'library foo;
            {
                this.writeFile(partPath,'part of foo;
                this.incrementalKernelGenerator.invalidate(partUri);
                let delta : any = await this.incrementalKernelGenerator.computeDelta();
                let library : any = this._getLibrary(delta.newProgram,libUri);
                expect(this._getLibraryText(library),'library foo;
            }
            {
                this.writeFile(libPath,'library foo;
                this.incrementalKernelGenerator.invalidate(libUri);
                let delta : any = await this.incrementalKernelGenerator.computeDelta();
                let library : any = this._getLibrary(delta.newProgram,libUri);
                expect(this._getLibraryText(library),'library foo;
            }
        } )());
    }

    writeFile(path : string,text : string) : lib3.Uri {
        let uri : lib3.Uri = lib3.Uri.parse(`file://${path}`);
        this.fileSystem.entityForUri(uri).writeAsStringSync(text);
        return uri;
    }
    writeFiles(contents : core.DartMap<string,string>) : void {
        contents.forEach(this.writeFile.bind(this));
    }
    _assertLibraryUris(program : any,_namedArguments? : {includes? : core.DartList<lib3.Uri>,excludes? : core.DartList<lib3.Uri>}) : void {
        let {includes,excludes} = Object.assign({
            "includes" : new core.DartList.literal(),
            "excludes" : new core.DartList.literal()}, _namedArguments );
        let libraryUris : core.DartList<lib3.Uri> = program.libraries.map((library : any) =>  {
            return library.importUri;
        }).toList();
        for(let shouldInclude of includes) {
            expect(libraryUris,contains(shouldInclude));
        }
        for(let shouldExclude of excludes) {
            expect(libraryUris,isNot(contains(shouldExclude)));
        }
    }
    _getLibrary(program : any,uri : lib3.Uri) : any {
        for(let library of program.libraries) {
            if (op(Op.EQUALS,library.importUri,uri)) return library;
        }
        throw fail(`No library found with URI "${uri}"`);
    }
    _getLibraryText(library : any) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        new bare.createInstance(any,null,buffer,{
            syntheticNames : new bare.createInstance(any,null)}).writeLibraryFile(library);
        return buffer.toString();
    }
    constructor() {
    }
    @defaultConstructor
    IncrementalKernelGeneratorTest() {
        this.fileSystem = new bare.createInstance(any,null,lib3.Uri.parse('file:///'));
    }
}

export class properties {
}