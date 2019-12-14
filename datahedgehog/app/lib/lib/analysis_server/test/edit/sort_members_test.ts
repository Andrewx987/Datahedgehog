/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/edit/sort_members_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SortMembersTest);
    });
};
export namespace SortMembersTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'SortMembersTest';
    export type Interface = Omit<SortMembersTest, Constructors>;
}
@DartClass
export class SortMembersTest extends lib3.AbstractAnalysisTest {
    fileEdit : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(new core.DartList.literal(this.server.serverPlugin));
        this.handler = new bare.createInstance(any,null,this.server);
    }
    test_BAD_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,'/no/such/file.dart').toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.SORT_MEMBERS_INVALID_FILE));
        } )());
    }

    test_BAD_hasParseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            let request : any = new bare.createInstance(any,null,this.testFile).toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.SORT_MEMBERS_PARSE_ERRORS));
        } )());
    }

    test_BAD_notDartFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,'/not-a-Dart-file.txt').toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.SORT_MEMBERS_INVALID_FILE));
        } )());
    }

    test_OK_afterWaitForAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}
            await this.waitForTasksFinished();
            return this._assertSorted('class A {}
        } )());
    }

    test_OK_classMembers_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            return this._assertSorted('class A {
        } )());
    }

    test_OK_directives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;
            return this._assertSorted('library lib;
        } )());
    }

    test_OK_directives_withAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;
            return this._assertSorted('library lib;
        } )());
    }

    test_OK_genericFunctionTypeInComments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(this.projectPath + '/analysis_options.yaml','analyzer:
            this.addTestFile('class C {
            return this._assertSorted('Function/*=F*/ allowInterop/*<F extends Function>*/(Function/*=F*/ f) => null;
        } )());
    }

    test_OK_unitMembers_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}
            return this._assertSorted('class A {}
        } )());
    }

    _assertSorted(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._requestSort();
            let resultCode : string = SourceEdit.applySequence(this.testCode,this.fileEdit.edits);
            expect(resultCode,expectedCode);
        } )());
    }

    _requestSort() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,this.testFile).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            this.fileEdit = result.edit;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SortMembersTest() {
    }
}

export class properties {
}