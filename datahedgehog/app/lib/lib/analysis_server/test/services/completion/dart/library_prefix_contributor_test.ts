/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/library_prefix_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LibraryPrefixContributorTest);
    });
};
export namespace LibraryPrefixContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'LibraryPrefixContributorTest';
    export type Interface = Omit<LibraryPrefixContributorTest, Constructors>;
}
@DartClass
export class LibraryPrefixContributorTest extends lib3.DartCompletionContributorTest {
    assertSuggestLibraryPrefixes(expectedPrefixes : core.DartList<string>) : void {
        for(let prefix of expectedPrefixes) {
            let cs : any = this.assertSuggest(prefix,{
                csKind : CompletionSuggestionKind.IDENTIFIER,relevance : DART_RELEVANCE_DEFAULT});
            let element : any = cs.element;
            expect(element,isNotNull);
            expect(element.kind,equals(ElementKind.LIBRARY));
            expect(element.parameters,isNull);
            expect(element.returnType,isNull);
            this.assertHasNoParameterInfo(cs);
        }
        if (this.suggestions.length != expectedPrefixes.length) {
            this.failedCompletion(`expected only ${expectedPrefixes.length} suggestions`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_Block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;
            this.addSource('/testCD.dart','String T1;
            this.addSource('/testEEF.dart','class EE { }
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }
            this.addTestSource('import "/testAB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('g'));
        } )());
    }

    test_Block_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;
            this.addSource('/testCD.dart','String T1;
            this.addSource('/testEEF.dart','class EE { }
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }
            this.addTestSource('import "/testAB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('g'));
        } )());
    }

    test_Block_final_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;
            this.addSource('/testCD.dart','String T1;
            this.addSource('/testEEF.dart','class EE { }
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }
            this.addTestSource('import "/testAB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('g'));
        } )());
    }

    test_ClassDeclaration_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_ClassDeclaration_body_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_ClassDeclaration_body_final_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_ClassDeclaration_body_final_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as Soo;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('Soo'));
        } )());
    }

    test_ClassDeclaration_body_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_ClassDeclaration_body_final_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('x'));
        } )());
    }

    test_InstanceCreationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A {foo(){var f; {var x;}}}
            this.addTestSource('import "/testA.dart" as t;
            await this.computeSuggestions();
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('math','t'));
        } )());
    }

    test_InstanceCreationExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:convert" as json;f() {var x=new js^}');
            await this.computeSuggestions();
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('json'));
        } )());
    }

    test_InstanceCreationExpression_inPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A {foo(){var f; {var x;}}}
            this.addSource('/testB.dart',`library testB;
            this.addTestSource('part of testB;
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            this.assertSuggestLibraryPrefixes(new core.DartList.literal('math','t'));
        } )());
    }

    test_InstanceCreationExpression_inPart_detached() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A {foo(){var f; {var x;}}}
            this.addSource('/testB.dart',`library testB;
            this.addTestSource('//part of testB;
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryPrefixContributorTest() {
    }
}

export class properties {
}