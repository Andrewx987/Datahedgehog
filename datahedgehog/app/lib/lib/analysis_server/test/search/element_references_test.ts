/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/search/element_references_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_search_domain";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ElementReferencesTest);
    });
};
export namespace ElementReferencesTest {
    export type Constructors = lib3.AbstractSearchDomainTest.Constructors | 'ElementReferencesTest';
    export type Interface = Omit<ElementReferencesTest, Constructors>;
}
@DartClass
export class ElementReferencesTest extends lib3.AbstractSearchDomainTest {
    searchElement : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    assertHasRef(kind : any,search : string,isPotential : boolean) : void {
        this.assertHasResult(kind,search);
        expect(this.result.isPotential,isPotential);
    }
    findElementReferences(search : string,includePotential : boolean) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let offset : number = this.findOffset(search);
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,this.testFile,offset,includePotential).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            this.searchId = result.id;
            this.searchElement = result.element;
            if (this.searchId != null) {
                await this.waitForSearchResults();
            }
            expect(this.serverErrors,isEmpty);
        } )());
    }

    test_constructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('named(p)',false);
            expect(this.searchElement.kind,ElementKind.CONSTRUCTOR);
            expect(this.results,hasLength(2));
            this.assertHasResult(SearchResultKind.REFERENCE,'.named(1)',6);
            this.assertHasResult(SearchResultKind.REFERENCE,'.named(2)',6);
        } )());
    }

    test_constructor_named_potential() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('named(p); // A',true);
            expect(this.searchElement.kind,ElementKind.CONSTRUCTOR);
            expect(this.results,hasLength(1));
            this.assertHasResult(SearchResultKind.REFERENCE,'.named(1)',6);
        } )());
    }

    test_constructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('A(p)',false);
            expect(this.searchElement.kind,ElementKind.CONSTRUCTOR);
            expect(this.results,hasLength(2));
            this.assertHasResult(SearchResultKind.REFERENCE,'(1)',0);
            this.assertHasResult(SearchResultKind.REFERENCE,'(2)',0);
        } )());
    }

    test_constructor_unnamed_potential() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('A(p)',true);
            expect(this.searchElement.kind,ElementKind.CONSTRUCTOR);
            expect(this.results,hasLength(1));
            this.assertHasResult(SearchResultKind.REFERENCE,'(1)',0);
        } )());
    }

    test_field_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('fff; // declaration',false);
            expect(this.searchElement.kind,ElementKind.FIELD);
            expect(this.results,hasLength(10));
            this.assertHasResult(SearchResultKind.WRITE,'fff); // in constructor');
            this.assertHasResult(SearchResultKind.WRITE,'fff = 1;');
            this.assertHasResult(SearchResultKind.WRITE,'fff = 2;');
            this.assertHasResult(SearchResultKind.WRITE,'fff += 3;');
            this.assertHasResult(SearchResultKind.READ,'fff); // in m()');
            this.assertHasResult(SearchResultKind.INVOCATION,'fff(); // in m()');
            this.assertHasResult(SearchResultKind.WRITE,'fff = 20;');
            this.assertHasResult(SearchResultKind.WRITE,'fff += 30;');
            this.assertHasResult(SearchResultKind.READ,'fff); // in main()');
            this.assertHasResult(SearchResultKind.INVOCATION,'fff(); // in main()');
        } )());
    }

    test_field_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            {
                await this.findElementReferences('fff =>',false);
                expect(this.searchElement.kind,ElementKind.FIELD);
                expect(this.results,hasLength(4));
                this.assertHasResult(SearchResultKind.READ,'fff); // in m()');
                this.assertHasResult(SearchResultKind.WRITE,'fff = 1;');
                this.assertHasResult(SearchResultKind.READ,'fff); // in main()');
                this.assertHasResult(SearchResultKind.WRITE,'fff = 10;');
            }
            {
                await this.findElementReferences('fff(x) {}',false);
                expect(this.results,hasLength(4));
                this.assertHasResult(SearchResultKind.READ,'fff); // in m()');
                this.assertHasResult(SearchResultKind.WRITE,'fff = 1;');
                this.assertHasResult(SearchResultKind.READ,'fff); // in main()');
                this.assertHasResult(SearchResultKind.WRITE,'fff = 10;');
            }
        } )());
    }

    test_field_inFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('fff); // in constructor',false);
            expect(this.searchElement.kind,ElementKind.FIELD);
            expect(this.results,hasLength(3));
            this.assertHasResult(SearchResultKind.WRITE,'fff); // in constructor');
            this.assertHasResult(SearchResultKind.WRITE,'fff = 2;');
            this.assertHasResult(SearchResultKind.READ,'fff); // in m()');
        } )());
    }

    test_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('fff(p) {}
            await this.findElementReferences('fff(p) {}',false);
            expect(this.searchElement.kind,ElementKind.FUNCTION);
            expect(this.results,hasLength(2));
            this.assertHasResult(SearchResultKind.INVOCATION,'fff(1)');
            this.assertHasResult(SearchResultKind.REFERENCE,'fff);');
        } )());
    }

    test_hierarchy_field_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('  class A {
            await this.findElementReferences('fff; // in B',false);
            expect(this.searchElement.kind,ElementKind.FIELD);
            this.assertHasResult(SearchResultKind.WRITE,'fff = 10;');
            this.assertHasResult(SearchResultKind.WRITE,'fff = 20;');
            this.assertHasResult(SearchResultKind.WRITE,'fff = 30;');
        } )());
    }

    test_hierarchy_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('mmm(_) {} // in B',false);
            expect(this.searchElement.kind,ElementKind.METHOD);
            this.assertHasResult(SearchResultKind.INVOCATION,'mmm(10)');
            this.assertHasResult(SearchResultKind.INVOCATION,'mmm(20)');
            this.assertHasResult(SearchResultKind.INVOCATION,'mmm(30)');
        } )());
    }

    test_hierarchy_method_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('mmm(_) {} // in B',false);
            expect(this.searchElement.kind,ElementKind.METHOD);
            expect(this.results,hasLength(1));
            this.assertHasResult(SearchResultKind.INVOCATION,'mmm(20)');
        } )());
    }

    test_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.findElementReferences('myLabel; // break',false);
            expect(this.searchElement.kind,ElementKind.LABEL);
            expect(this.results,hasLength(2));
            this.assertHasResult(SearchResultKind.REFERENCE,'myLabel; // continue');
            this.assertHasResult(SearchResultKind.REFERENCE,'myLabel; // break');
        } )());
    }

    test_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.findElementReferences('vvv = 1',false);
            expect(this.searchElement.kind,ElementKind.LOCAL_VARIABLE);
            expect(this.results,hasLength(4));
            this.assertHasResult(SearchResultKind.READ,'vvv);');
            this.assertHasResult(SearchResultKind.READ_WRITE,'vvv += 3');
            this.assertHasResult(SearchResultKind.WRITE,'vvv = 2');
            this.assertHasResult(SearchResultKind.INVOCATION,'vvv();');
        } )());
    }

    test_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('mmm(p) {}',false);
            expect(this.searchElement.kind,ElementKind.METHOD);
            expect(this.results,hasLength(4));
            this.assertHasResult(SearchResultKind.INVOCATION,'mmm(1);');
            this.assertHasResult(SearchResultKind.REFERENCE,'mmm); // in m()');
            this.assertHasResult(SearchResultKind.INVOCATION,'mmm(10);');
            this.assertHasResult(SearchResultKind.REFERENCE,'mmm); // in main()');
        } )());
    }

    test_method_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('mmm(p) {}',false);
            expect(this.searchElement.kind,ElementKind.METHOD);
            expect(this.results,hasLength(2));
            this.assertHasResult(SearchResultKind.INVOCATION,'mmm(10);');
            this.assertHasResult(SearchResultKind.REFERENCE,'mmm);');
        } )());
    }

    test_noElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.findElementReferences('noElement',false);
            expect(this.searchId,isNull);
        } )());
    }

    test_oneUnit_zeroLibraries() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('part of lib;
            await this.findElementReferences('fff(p) {}',false);
            expect(this.results,isEmpty);
        } )());
    }

    test_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main(ppp) {
            await this.findElementReferences('ppp) {',false);
            expect(this.searchElement.kind,ElementKind.PARAMETER);
            expect(this.results,hasLength(4));
            this.assertHasResult(SearchResultKind.READ,'ppp);');
            this.assertHasResult(SearchResultKind.READ_WRITE,'ppp += 3');
            this.assertHasResult(SearchResultKind.WRITE,'ppp = 2');
            this.assertHasResult(SearchResultKind.INVOCATION,'ppp();');
        } )());
    }

    test_path_inConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my_lib;
            await this.findElementReferences('A {}',false);
            this.assertHasResult(SearchResultKind.REFERENCE,'A a = null;');
            expect(this.getPathString(this.result.path),'LOCAL_VARIABLE a
        } )());
    }

    test_path_inConstructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my_lib;
            await this.findElementReferences('A {}',false);
            this.assertHasResult(SearchResultKind.REFERENCE,'A a = null;');
            expect(this.getPathString(this.result.path),'LOCAL_VARIABLE a
        } )());
    }

    test_path_inFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my_lib;
            await this.findElementReferences('A {}',false);
            this.assertHasResult(SearchResultKind.REFERENCE,'A a = null;');
            expect(this.getPathString(this.result.path),'LOCAL_VARIABLE a
        } )());
    }

    test_potential_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('test(p) {}',false);
            this.assertHasResult(SearchResultKind.INVOCATION,'test(1);');
            this.assertNoResult(SearchResultKind.INVOCATION,'test(2);');
        } )());
    }

    test_potential_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('test; // declaration',true);
            {
                this.assertHasResult(SearchResultKind.WRITE,'test = 1;');
                expect(this.result.isPotential,isFalse);
            }
            {
                this.assertHasResult(SearchResultKind.WRITE,'test = 2;');
                expect(this.result.isPotential,isTrue);
            }
            {
                this.assertHasResult(SearchResultKind.READ,'test); // p');
                expect(this.result.isPotential,isTrue);
            }
        } )());
    }

    test_potential_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findElementReferences('test(p) {}',true);
            {
                this.assertHasResult(SearchResultKind.INVOCATION,'test(1);');
                expect(this.result.isPotential,isFalse);
            }
            {
                this.assertHasResult(SearchResultKind.INVOCATION,'test(2);');
                expect(this.result.isPotential,isTrue);
            }
        } )());
    }

    test_potential_method_definedInSubclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class Base {
            await this.findElementReferences('test(_) {} // of Derived',true);
            this.assertHasRef(SearchResultKind.INVOCATION,'test(1);',true);
            this.assertHasRef(SearchResultKind.INVOCATION,'test(2);',false);
            this.assertHasRef(SearchResultKind.INVOCATION,'test(3);',true);
        } )());
    }

    test_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:async\' as ppp;
            await this.findElementReferences("ppp;",false);
            expect(this.searchElement.kind,ElementKind.PREFIX);
            expect(this.searchElement.name,'ppp');
            expect(this.searchElement.location.startLine,1);
            expect(this.results,hasLength(2));
            this.assertHasResult(SearchResultKind.REFERENCE,'ppp.Future');
            this.assertHasResult(SearchResultKind.REFERENCE,'ppp.Stream');
        } )());
    }

    test_topLevelVariable_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var vvv = 1;
            await this.findElementReferences('vvv = 1',false);
            expect(this.searchElement.kind,ElementKind.TOP_LEVEL_VARIABLE);
            expect(this.results,hasLength(4));
            this.assertHasResult(SearchResultKind.READ,'vvv);');
            this.assertHasResult(SearchResultKind.WRITE,'vvv += 3');
            this.assertHasResult(SearchResultKind.WRITE,'vvv = 2');
            this.assertHasResult(SearchResultKind.INVOCATION,'vvv();');
        } )());
    }

    test_topLevelVariable_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('get vvv => null;
            {
                await this.findElementReferences('vvv =>',false);
                expect(this.searchElement.kind,ElementKind.TOP_LEVEL_VARIABLE);
                expect(this.results,hasLength(2));
                this.assertHasResult(SearchResultKind.READ,'vvv);');
                this.assertHasResult(SearchResultKind.WRITE,'vvv = 1;');
            }
            {
                await this.findElementReferences('vvv(x) {}',false);
                expect(this.results,hasLength(2));
                this.assertHasResult(SearchResultKind.READ,'vvv);');
                this.assertHasResult(SearchResultKind.WRITE,'vvv = 1;');
            }
        } )());
    }

    test_typeReference_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {
            await this.findElementReferences('int a',false);
            expect(this.searchElement.kind,ElementKind.CLASS);
            this.assertHasResult(SearchResultKind.REFERENCE,'int a');
            this.assertHasResult(SearchResultKind.REFERENCE,'int b');
        } )());
    }

    test_typeReference_functionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('typedef F();
            await this.findElementReferences('F()',false);
            expect(this.searchElement.kind,ElementKind.FUNCTION_TYPE_ALIAS);
            expect(this.results,hasLength(1));
            this.assertHasResult(SearchResultKind.REFERENCE,'F f');
        } )());
    }

    test_typeReference_typeVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A<T> {
            await this.findElementReferences('T> {',false);
            expect(this.searchElement.kind,ElementKind.TYPE_PARAMETER);
            expect(this.results,hasLength(2));
            this.assertHasResult(SearchResultKind.REFERENCE,'T f;');
            this.assertHasResult(SearchResultKind.REFERENCE,'T m()');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementReferencesTest() {
    }
}

export class properties {
}