/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/search/member_references_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_search_domain";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(MemberReferencesTest);
    });
};
export namespace MemberReferencesTest {
    export type Constructors = lib3.AbstractSearchDomainTest.Constructors | 'MemberReferencesTest';
    export type Interface = Omit<MemberReferencesTest, Constructors>;
}
@DartClass
export class MemberReferencesTest extends lib3.AbstractSearchDomainTest {
    assertHasRef(kind : any,search : string,isPotential : boolean) : void {
        this.assertHasResult(kind,search);
        expect(this.result.isPotential,isPotential);
    }
    findMemberReferences(name : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,name).toRequest('0');
            let response : any = await this.waitResponse(request);
            this.searchId = new bare.createInstance(any,null,response).id;
            return this.waitForSearchResults();
        } )());
    }

    test_fields_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findMemberReferences('foo');
            this.assertNoResult(SearchResultKind.WRITE,'foo = 1;');
            this.assertNoResult(SearchResultKind.WRITE,'foo = 2;');
            this.assertNoResult(SearchResultKind.READ,'foo); // resolved A');
            this.assertNoResult(SearchResultKind.READ,'foo); // resolved B');
            this.assertHasRef(SearchResultKind.WRITE,'foo = 10;',true);
            this.assertHasRef(SearchResultKind.WRITE,'foo = 20;',true);
            this.assertHasRef(SearchResultKind.READ,'foo); // unresolved A',true);
            this.assertHasRef(SearchResultKind.READ,'foo); // unresolved B',true);
        } )());
    }

    test_fields_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findMemberReferences('foo');
            this.assertNoResult(SearchResultKind.READ,'foo); // resolved A');
            this.assertNoResult(SearchResultKind.READ,'foo); // resolved B');
            this.assertHasRef(SearchResultKind.READ,'foo); // unresolved A',true);
            this.assertHasRef(SearchResultKind.READ,'foo); // unresolved B',true);
        } )());
    }

    test_methods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {
            await this.findMemberReferences('foo');
            this.assertNoResult(SearchResultKind.INVOCATION,'foo(1)');
            this.assertNoResult(SearchResultKind.INVOCATION,'foo(2)');
            this.assertHasRef(SearchResultKind.INVOCATION,'foo(10)',true);
            this.assertHasRef(SearchResultKind.INVOCATION,'foo(20)',true);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MemberReferencesTest() {
    }
}

export class properties {
}