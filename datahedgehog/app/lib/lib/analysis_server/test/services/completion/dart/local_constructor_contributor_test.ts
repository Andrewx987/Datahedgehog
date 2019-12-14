/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/local_constructor_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LocalConstructorContributorTest);
    });
};
export namespace LocalConstructorContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'LocalConstructorContributorTest';
    export type Interface = Omit<LocalConstructorContributorTest, Constructors>;
}
@DartClass
export class LocalConstructorContributorTest extends lib3.DartCompletionContributorTest {
    assertSuggestLocalVariable(name : string,returnType : string,_namedArguments? : {relevance? : number}) : any {
        let {relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_LOCAL_VARIABLE}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : CompletionSuggestionKind.INVOCATION,relevance : relevance});
        expect(cs.returnType,returnType != null ? returnType : 'dynamic');
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.LOCAL_VARIABLE));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        expect(element.returnType,returnType != null ? returnType : 'dynamic');
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    assertSuggestParameter(name : string,returnType : string,_namedArguments? : {relevance? : number}) : any {
        let {relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_PARAMETER}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : CompletionSuggestionKind.INVOCATION,relevance : relevance});
        expect(cs.returnType,returnType != null ? returnType : 'dynamic');
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.PARAMETER));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        expect(element.returnType,equals(returnType != null ? returnType : 'dynamic'));
        return cs;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_ArgDefaults_cons_with_required_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addMetaPackageSource();
            this.addTestSource('import \'package:meta/meta.dart\';
            await this.computeSuggestions();
            this.assertSuggestConstructor('A',{
                defaultArgListString : 'bar, baz: null'});
        } )());
    }

    test_ArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'/libA.dart\';
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_imported_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'/libA.dart\'
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_InstanceCreationExpression_functionalArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'dart:async\';
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_InstanceCreationExpression_typedefArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'dart:async\';
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_local_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'/libA.dart\'
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_local_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'/libA.dart\'
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_MethodInvocation_functionalArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'dart:async\';
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_MethodInvocation_methodArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'dart:async\';
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNoSuggestions({
                kind : CompletionSuggestionKind.ARGUMENT_LIST});
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('B');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('main');
            this.assertNotSuggested('baz');
            this.assertNotSuggested('print');
        } )());
    }

    test_ArgumentList_namedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library A;
            this.addTestSource('import \'/libA.dart\'
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('bar');
            this.assertNotSuggested('hasLength');
            this.assertNotSuggested('main');
        } )());
    }

    test_AsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {var a; (a as ^).foo();}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_AssignmentExpression_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {int a; int ^b = 1;}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_AssignmentExpression_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {int a; int b = ^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_AssignmentExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('int');
        } )());
    }

    test_AssignmentExpression_type_newline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('int');
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('identical');
        } )());
    }

    test_AssignmentExpression_type_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('A');
            this.assertNotSuggested('int');
        } )());
    }

    test_AssignmentExpression_type_partial_newline() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} main() {
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('A');
            this.assertNotSuggested('int');
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('identical');
        } )());
    }

    test_AwaitExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int x; int y() => 0;}
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_BinaryExpression_LHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {int a = 1, b = ^ + 2;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
        } )());
    }

    test_BinaryExpression_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {int a = 1, b = 2 + ^;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('==');
        } )());
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
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('localF');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('T5');
            this.assertNotSuggested('_T6');
            this.assertNotSuggested('==');
            this.assertNotSuggested('T7');
            this.assertNotSuggested('T8');
            this.assertNotSuggested('clog');
            this.assertNotSuggested('blog');
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_final() : async.Future<any> { 
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
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('localF');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('T5');
            this.assertNotSuggested('_T6');
            this.assertNotSuggested('==');
            this.assertNotSuggested('T7');
            this.assertNotSuggested('T8');
            this.assertNotSuggested('clog');
            this.assertNotSuggested('blog');
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_final2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final S^ v;}');
            await this.computeSuggestions();
            this.assertNotSuggested('String');
        } )());
    }

    test_Block_final3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^ v;}');
            await this.computeSuggestions();
            this.assertNotSuggested('String');
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
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('localF');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('T5');
            this.assertNotSuggested('_T6');
            this.assertNotSuggested('==');
            this.assertNotSuggested('T7');
            this.assertNotSuggested('T8');
            this.assertNotSuggested('clog');
            this.assertNotSuggested('blog');
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
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
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('localF');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('C');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('EE');
            this.assertNotSuggested('g');
            this.assertNotSuggested('G');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('min');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('T5');
            this.assertNotSuggested('_T6');
            this.assertNotSuggested('==');
            this.assertNotSuggested('T7');
            this.assertNotSuggested('T8');
            this.assertNotSuggested('clog');
            this.assertNotSuggested('blog');
            this.assertNotSuggested('HtmlElement');
            this.assertNotSuggested('Uri');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_identifier_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;
            this.addSource('/testCD.dart','String T1;
            this.addSource('/testEEF.dart','class EE { }
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }
            this.addTestSource('import "/testAB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Z');
            this.assertNotSuggested('a');
            this.assertNotSuggested('b');
            this.assertNotSuggested('f');
            this.assertNotSuggested('r');
            this.assertNotSuggested('x');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('D');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('D3');
            this.assertNotSuggested('G');
            this.assertNotSuggested('_T2');
            this.assertNotSuggested('_T4');
            this.assertNotSuggested('==');
            this.assertNotSuggested('HtmlElement');
        } )());
    }

    test_Block_inherited_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('e1');
            this.assertNotSuggested('f1');
            this.assertNotSuggested('i1');
            this.assertNotSuggested('m1');
            this.assertNotSuggested('f3');
            this.assertNotSuggested('f4');
            this.assertNotSuggested('e2');
            this.assertNotSuggested('f2');
            this.assertNotSuggested('i2');
            this.assertNotSuggested('==');
        } )());
    }

    test_Block_inherited_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class F { var f1; f2() { } get f3 => 0; set f4(fx) { } }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('e1');
            this.assertNotSuggested('f1');
            this.assertNotSuggested('i1');
            this.assertNotSuggested('m1');
            this.assertNotSuggested('f3');
            this.assertNotSuggested('f4');
            this.assertNotSuggested('e2');
            this.assertNotSuggested('f2');
            this.assertNotSuggested('i2');
            this.assertNotSuggested('m2');
        } )());
    }

    test_Block_local_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','export "dart:math" hide max;
            this.addSource('/testCD.dart','String T1;
            this.addSource('/testEEF.dart','class EE { }
            this.addSource('/testG.dart','class G { }');
            this.addSource('/testH.dart','class H { }
            this.addTestSource('import "/testAB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('partT8');
            this.assertNotSuggested('partBoo');
            this.assertNotSuggested('parseIPv6Address');
            this.assertNotSuggested('parseHex');
        } )());
    }

    test_Block_unimported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('myBar','bar.dart','class Foo2 { Foo2() { } }');
            this.addSource('/proj/testAB.dart','import "package:myBar/bar.dart"; class Foo { }');
            this.testFile = '/proj/completionTest.dart';
            this.addTestSource('class C {foo(){F^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('Foo');
            this.assertNotSuggested('Foo2');
            this.assertNotSuggested('Future');
        } )());
    }

    test_CascadeExpression_selector1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('B');
            this.assertNotSuggested('X');
            this.assertNotSuggested('z');
            this.assertNotSuggested('==');
        } )());
    }

    test_CascadeExpression_selector2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('B');
            this.assertNotSuggested('X');
            this.assertNotSuggested('z');
            this.assertNotSuggested('==');
        } )());
    }

    test_CascadeExpression_selector2_withTrailingReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('B');
            this.assertNotSuggested('X');
            this.assertNotSuggested('z');
            this.assertNotSuggested('==');
        } )());
    }

    test_CascadeExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var b; X _c;}
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('==');
        } )());
    }

    test_CatchClause_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on ^ {}}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('a');
            this.assertNotSuggested('x');
        } )());
    }

    test_CatchClause_onType_noBrackets() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on ^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('x');
        } )());
    }

    test_CatchClause_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} on E catch (e) {^}}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('e');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('x');
        } )());
    }

    test_CatchClause_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {try{var x;} catch (e, s) {^}}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('e');
            this.assertNotSuggested('s');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('String');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as Soo;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('String');
            this.assertNotSuggested('Sew');
            this.assertNotSuggested('Soo');
        } )());
    }

    test_ClassDeclaration_body_final_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_ClassDeclaration_body_final_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','class B { }');
            this.addTestSource('import "testB.dart" as x;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T');
            this.assertNotSuggested('x');
        } )());
    }

    test_Combinator_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','library libAB;
            this.addSource('/partAB.dart','part of libAB;
            this.addSource('/testCD.dart','class C { }
            this.addTestSource('import "/testAB.dart" hide ^;
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_Combinator_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','library libAB;
            this.addSource('/partAB.dart','part of libAB;
            this.addSource('/testCD.dart','class C { }
            this.addTestSource('import "/testAB.dart" show ^;
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ConditionalExpression_elseExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            this.assertNotSuggested('T2');
        } )());
    }

    test_ConditionalExpression_elseExpression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('f');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('C');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_ConditionalExpression_partial_thenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            this.assertNotSuggested('T2');
        } )());
    }

    test_ConditionalExpression_partial_thenExpression_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('f');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('C');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_ConditionalExpression_thenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            this.assertNotSuggested('T2');
        } )());
    }

    test_constructor_parameters_mixed_required_and_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A(x, {int y}) {^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
        } )());
    }

    test_constructor_parameters_mixed_required_and_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A(x, [int y]) {^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
        } )());
    }

    test_constructor_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A({x, int y}) {^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
        } )());
    }

    test_constructor_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A([x, int y]) {^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
        } )());
    }

    test_constructor_parameters_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {A(x, int y) {^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
        } )());
    }

    test_ConstructorName_importedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('c');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_importedFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('c');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_importedFactory2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        main() {new String.fr^omCharCodes([]);}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,13);
            this.assertNotSuggested('fromCharCodes');
            this.assertNotSuggested('isEmpty');
            this.assertNotSuggested('isNotEmpty');
            this.assertNotSuggested('length');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('String');
        } )());
    }

    test_ConstructorName_localClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('int T1;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('c');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_ConstructorName_localFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('int T1;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('c');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_DefaultFormalParameter_named_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('String');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('bar');
        } )());
    }

    test_enum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('enum E { one, two } main() {^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
        } )());
    }

    test_enum_deprecated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('@deprecated enum E { one, two } main() {^}');
            await this.computeSuggestions();
            this.assertNotSuggested('E');
            this.assertNotSuggested('one');
            this.assertNotSuggested('two');
        } )());
    }

    test_ExpressionStatement_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','_B F1() { }
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('C');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('Clz');
            this.assertNotSuggested('C');
            this.assertNotSuggested('x');
            this.assertNotSuggested('_B');
        } )());
    }

    test_ExpressionStatement_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','        B T1;
            this.addTestSource('        import "/testA.dart";
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_FieldDeclaration_name_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A { }');
            this.addTestSource('        import "/testA.dart";
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_FieldDeclaration_name_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A { }');
            this.addTestSource('        import "/testA.dart";
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_FieldFormalParameter_in_non_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {B(this.^foo) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,3);
            this.assertNoSuggestions();
        } )());
    }

    test_ForEachStatement_body_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int foo in bar) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForEachStatement_body_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (foo in bar) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForEachStatement_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int foo in ^) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForEachStatement_loopVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (^ in args) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('String');
        } )());
    }

    test_ForEachStatement_loopVariable_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (^ foo in args) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('args');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('String');
        } )());
    }

    test_ForEachStatement_loopVariable_type2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (S^ foo in args) {}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('args');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('String');
        } )());
    }

    test_FormalParameterList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('String');
            this.assertNotSuggested('identical');
            this.assertNotSuggested('bar');
        } )());
    }

    test_ForStatement_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main(args) {for (int i; i < 10; ++i) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('i');
            this.assertNotSuggested('Object');
        } )());
    }

    test_ForStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int index = 0; i^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('index');
        } )());
    }

    test_ForStatement_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {List a; for (^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('int');
        } )());
    }

    test_ForStatement_updaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int index = 0; index < 10; i^)}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('index');
        } )());
    }

    test_ForStatement_updaters_prefix_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void bar() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('index');
            this.assertNotSuggested('main');
            this.assertNotSuggested('bar');
        } )());
    }

    test_function_parameters_mixed_required_and_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m(x, {int y}) {}
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_function_parameters_mixed_required_and_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m(x, [int y]) {}
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_function_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m({x, int y}) {}
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_function_parameters_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m() {}
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_function_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m([x, int y]) {}
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_function_parameters_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void m(x, int y) {}
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionDeclaration_returnType_afterComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_FunctionExpression_body_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        void bar() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('args');
            this.assertNotSuggested('b');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IfStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {A a; if (true) ^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_IfStatement_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int x; int y() => 0;}
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IfStatement_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('        class A {var b; X _c; foo() {A a; if (^) something}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_IfStatement_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var a; if (a.^) something}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('toString');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_ignore_symbol_being_completed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class MyClass { } main(MC^) { }');
            await this.computeSuggestions();
            this.assertNotSuggested('MyClass');
            this.assertNotSuggested('MC');
        } )());
    }

    test_ImportDirective_dart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart^";
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_inDartDoc_reference1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/// The [^
            await this.computeSuggestions();
            this.assertNotSuggested('main');
        } )());
    }

    test_inDartDoc_reference2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/// The [m^
            await this.computeSuggestions();
            this.assertNotSuggested('main');
        } )());
    }

    test_inDartDoc_reference3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/// The [^]
            await this.computeSuggestions();
            this.assertNotSuggested('main');
        } )());
    }

    test_inDartDoc_reference4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('/// The [m^]
            await this.computeSuggestions();
            this.assertNotSuggested('main');
        } )());
    }

    test_IndexExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            this.assertNotSuggested('x');
            this.assertNotSuggested('f');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('C');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
        } )());
    }

    test_IndexExpression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            this.assertNotSuggested('T2');
        } )());
    }

    test_InstanceCreationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo(){var f; {var x;}}}
            await this.computeSuggestions();
            let suggestion : any;
            suggestion = this.assertSuggestConstructor('A',{
                elemOffset : -1});
            expect(suggestion.element.parameters,'()');
            expect(suggestion.element.returnType,'A');
            expect(suggestion.declaringType,'A');
            expect(suggestion.parameterNames,hasLength(0));
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,false);
            suggestion = this.assertSuggestConstructor('B');
            expect(suggestion.element.parameters,'(int x, [String boo])');
            expect(suggestion.element.returnType,'B');
            expect(suggestion.declaringType,'B');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'x');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'int');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'boo');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'String');
            expect(suggestion.requiredParameterCount,1);
            expect(suggestion.hasNamedParameters,false);
            suggestion = this.assertSuggestConstructor('C.bar');
            expect(suggestion.element.parameters,'({dynamic boo: \'hoo\', int z: 0})');
            expect(suggestion.element.returnType,'C');
            expect(suggestion.declaringType,'C');
            expect(suggestion.parameterNames,hasLength(2));
            expect(op(Op.INDEX,suggestion.parameterNames,0),'boo');
            expect(op(Op.INDEX,suggestion.parameterTypes,0),'dynamic');
            expect(op(Op.INDEX,suggestion.parameterNames,1),'z');
            expect(op(Op.INDEX,suggestion.parameterTypes,1),'int');
            expect(suggestion.requiredParameterCount,0);
            expect(suggestion.hasNamedParameters,true);
        } )());
    }

    test_InstanceCreationExpression_assignment_expression_filter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} class B extends A {} class C implements A {} class D {}
            await this.computeSuggestions();
            this.assertSuggestConstructor('A',{
                elemOffset : -1,relevance : op(Op.PLUS,DART_RELEVANCE_DEFAULT,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestConstructor('B',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertSuggestConstructor('C',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('D');
        } )());
    }

    test_InstanceCreationExpression_assignment_expression_filter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} class B extends A {} class C implements A {} class D {}
            await this.computeSuggestions();
            this.assertSuggestConstructor('A',{
                elemOffset : -1,relevance : op(Op.PLUS,DART_RELEVANCE_DEFAULT,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestConstructor('B',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertSuggestConstructor('C',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('D');
        } )());
    }

    test_InstanceCreationExpression_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('Future');
            this.assertNotSuggested('A');
            this.assertSuggestConstructor('B');
            this.assertSuggestConstructor('C');
            this.assertNotSuggested('f');
            this.assertNotSuggested('x');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
        } )());
    }

    test_InstanceCreationExpression_unimported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','class Foo { }');
            this.addTestSource('class C {foo(){new F^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('Future');
            this.assertNotSuggested('Foo');
        } )());
    }

    test_InstanceCreationExpression_variable_declaration_filter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} class B extends A {} class C implements A {} class D {}
            await this.computeSuggestions();
            this.assertSuggestConstructor('A',{
                elemOffset : -1,relevance : op(Op.PLUS,DART_RELEVANCE_DEFAULT,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestConstructor('B',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertSuggestConstructor('C',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('D');
        } )());
    }

    test_InstanceCreationExpression_variable_declaration_filter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} class B extends A {} class C implements A {} class D {}
            await this.computeSuggestions();
            this.assertSuggestConstructor('A',{
                elemOffset : -1,relevance : op(Op.PLUS,DART_RELEVANCE_DEFAULT,DART_RELEVANCE_INCREMENT)});
            this.assertSuggestConstructor('B',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertSuggestConstructor('C',{
                elemOffset : -1,relevance : DART_RELEVANCE_DEFAULT});
            this.assertNotSuggested('D');
        } )());
    }

    test_InterpolationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_InterpolationExpression_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_InterpolationExpression_block2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${n^}");}');
            await this.computeSuggestions();
            this.assertNotSuggested('name');
        } )());
    }

    test_InterpolationExpression_prefix_selector() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${name.^}");}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('length');
            this.assertNotSuggested('name');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_InterpolationExpression_prefix_selector2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello $name.^");}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_InterpolationExpression_prefix_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String name; print("hello ${nam^e.length}");}');
            await this.computeSuggestions();
            this.assertNotSuggested('name');
            this.assertNotSuggested('length');
        } )());
    }

    test_IsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('x');
            this.assertNotSuggested('main');
            this.assertNotSuggested('foo');
        } )());
    }

    test_IsExpression_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IsExpression_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int x; int y() => 0;}
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_IsExpression_type_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {int x; int y() => 0;}
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('a');
            this.assertNotSuggested('main');
            this.assertNotSuggested('A');
            this.assertNotSuggested('Object');
        } )());
    }

    test_keyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertNotSuggested('c');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('nowIsIt');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('newT1');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
            this.assertNotSuggested('newer');
        } )());
    }

    test_Literal_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var Some; print([^]);}');
            await this.computeSuggestions();
            this.assertNotSuggested('Some');
            this.assertNotSuggested('String');
        } )());
    }

    test_Literal_list2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var Some; print([S^]);}');
            await this.computeSuggestions();
            this.assertNotSuggested('Some');
            this.assertNotSuggested('String');
        } )());
    }

    test_Literal_string() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hel^lo"}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_localVariableDeclarationName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {String m^}');
            await this.computeSuggestions();
            this.assertNotSuggested('main');
            this.assertNotSuggested('min');
        } )());
    }

    test_MapLiteralEntry() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
        } )());
    }

    test_MapLiteralEntry1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
        } )());
    }

    test_MapLiteralEntry2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
        } )());
    }

    test_method_parameters_mixed_required_and_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_mixed_required_and_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_method_parameters_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_MethodDeclaration_body_getters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated X get f => 0; Z a() {^} get _g => 1;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
        } )());
    }

    test_MethodDeclaration_body_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testC.dart','class C {
            this.addTestSource('import "/testC.dart";
            await this.computeSuggestions();
            this.assertNotSuggested('a1');
            this.assertNotSuggested('a2');
            this.assertNotSuggested('a3');
            this.assertNotSuggested('a4');
            this.assertNotSuggested('b1');
            this.assertNotSuggested('b2');
            this.assertNotSuggested('b3');
            this.assertNotSuggested('b4');
            this.assertNotSuggested('c1');
            this.assertNotSuggested('c2');
            this.assertNotSuggested('c3');
            this.assertNotSuggested('c4');
        } )());
    }

    test_MethodDeclaration_members() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated X f; Z _a() {^} var _g;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('_a');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('bool');
        } )());
    }

    test_MethodDeclaration_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {@deprecated Z a(X x, _, b, {y: boo}) {^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('a');
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
            this.assertNotSuggested('b');
            this.assertNotSuggested('int');
            this.assertNotSuggested('_');
        } )());
    }

    test_MethodDeclaration_parameters_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('a');
            this.assertNotSuggested('x');
            this.assertNotSuggested('y');
            this.assertNotSuggested('String');
        } )());
    }

    test_MethodDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodDeclaration_returnType_afterComment3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','int T1;
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('D1');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F2');
            this.assertNotSuggested('D2');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('name');
        } )());
    }

    test_MethodInvocation_no_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_missing_params_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C1{C1{} main(){C^}}');
            await this.computeSuggestions();
        } )());
    }

    test_missing_params_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('int f1{} main(){f^}');
            await this.computeSuggestions();
        } )());
    }

    test_missing_params_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class C1{int f1{} main(){f^}}');
            await this.computeSuggestions();
        } )());
    }

    test_new_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:math"; class A {x() {new Random().^}}');
            await this.computeSuggestions();
            this.assertNotSuggested('nextBool');
            this.assertNotSuggested('nextDouble');
            this.assertNotSuggested('nextInt');
            this.assertNotSuggested('Random');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('A');
        } )());
    }

    test_overrides() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {m() {}}
            await this.computeSuggestions();
            this.assertNotSuggested('m');
        } )());
    }

    test_parameterName_excludeTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('m(int ^) {}');
            await this.computeSuggestions();
            this.assertNotSuggested('int');
            this.assertNotSuggested('bool');
        } )());
    }

    test_partFile_TypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addSource('/testA.dart',`library libA;
            this.addTestSource('part of libA;
            await this.computeLibrariesContaining();
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestConstructor('B.bar');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('A');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_partFile_TypeName2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addSource('/testA.dart','part of libA;
            this.addTestSource('library libA;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertSuggestConstructor('A');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('X.c');
            this.assertNotSuggested('X._d');
            this.assertNotSuggested('B');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('_d');
            this.assertNotSuggested('z');
            this.assertNotSuggested('m');
        } )());
    }

    test_PrefixedIdentifier_class_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('scA');
            this.assertNotSuggested('scB');
            this.assertNotSuggested('scI');
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('w');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_class_imported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('sc');
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_class_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {A a; a.^}
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('sc');
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('a');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String get g => "one"; f() {g.^}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart" as b;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_library_typesOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart" as b;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_library_typesOnly2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart" as b;
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('b');
            this.assertNotSuggested('A');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('y');
            this.assertNotSuggested('_z');
            this.assertNotSuggested('==');
        } )());
    }

    test_PrefixedIdentifier_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class A {static int bar = 10;}
            this.addTestSource('import "/testA.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('foo');
            this.assertNotSuggested('bar');
            this.assertNotSuggested('_B');
        } )());
    }

    test_PrefixedIdentifier_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String x; int get foo {x.^}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('isEmpty');
            this.assertNotSuggested('compareTo');
        } )());
    }

    test_PrefixedIdentifier_propertyAccess_newStmt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String x; int get foo {x.^ int y = 0;}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('isEmpty');
            this.assertNotSuggested('compareTo');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('const String g = "hello"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g; f() {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String g() => "one"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('typedef String g(); f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String get g => "one"; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_local_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f() {String g; g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_local_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f() {var g = "hello"; g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g() {}; f() {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {f(String g) {g.^ int y = 0;}}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('f(String g) {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_PrefixedIdentifier_trailingStmt_topLevelVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('String g; f() {g.^ int y = 0;}');
            await this.computeSuggestions();
            this.assertNotSuggested('length');
        } )());
    }

    test_prioritization() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var ab; var _ab; ^}');
            await this.computeSuggestions();
            this.assertNotSuggested('ab');
            this.assertNotSuggested('_ab');
        } )());
    }

    test_prioritization_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var ab; var _ab; _^}');
            await this.computeSuggestions();
            this.assertNotSuggested('ab');
            this.assertNotSuggested('_ab');
        } )());
    }

    test_prioritization_public() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var ab; var _ab; a^}');
            await this.computeSuggestions();
            this.assertNotSuggested('ab');
            this.assertNotSuggested('_ab');
        } )());
    }

    test_PropertyAccess_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hello".to^String().length}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 2);
            expect(this.replacementLength,8);
            this.assertNotSuggested('length');
            this.assertNotSuggested('A');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_PropertyAccess_noTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','class Foo { }');
            this.addTestSource('class C {foo(){.^}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_PropertyAccess_noTarget2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','class Foo { }');
            this.addTestSource('main() {.^}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_PropertyAccess_selector() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {a() {"hello".length.^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('isEven');
            this.assertNotSuggested('A');
            this.assertNotSuggested('a');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_shadowed_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('var a; class A { var a; m() { ^ } }');
            await this.computeSuggestions();
            this.assertNotSuggested('a');
        } )());
    }

    test_SwitchStatement_c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g(int x) {switch(x) {c^}}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_SwitchStatement_case() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g(int x) {var t; switch(x) {case 0: ^}}}');
            await this.computeSuggestions();
            this.assertNotSuggested('A');
            this.assertNotSuggested('g');
            this.assertNotSuggested('t');
            this.assertNotSuggested('String');
        } )());
    }

    test_SwitchStatement_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {String g(int x) {switch(x) {^}}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_ThisExpression_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('sb');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor_param3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,1);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_ThisExpression_constructor_param4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { }
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('b');
            this.assertNotSuggested('_c');
            this.assertNotSuggested('d');
            this.assertNotSuggested('_e');
            this.assertNotSuggested('f');
            this.assertNotSuggested('_g');
            this.assertNotSuggested('m');
            this.assertNotSuggested('_n');
            this.assertNotSuggested('s1');
            this.assertNotSuggested('_s2');
            this.assertNotSuggested('z');
            this.assertNotSuggested('I');
            this.assertNotSuggested('A');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
            this.assertNotSuggested('==');
        } )());
    }

    test_TopLevelVariableDeclaration_typed_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} B ^');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_TopLevelVariableDeclaration_untyped_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} var ^');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_TypeArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class C1 {int x;}
            this.addTestSource('import "/testA.dart";\'
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('Object');
            this.assertNotSuggested('C1');
            this.assertNotSuggested('T1');
            this.assertNotSuggested('C2');
            this.assertNotSuggested('T2');
            this.assertNotSuggested('F1');
            this.assertNotSuggested('F2');
        } )());
    }

    test_TypeArgumentList2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testA.dart','class C1 {int x;}
            this.addTestSource('import "/testA.dart";\'
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertNotSuggested('C1');
            this.assertNotSuggested('C2');
        } )());
    }

    test_VariableDeclaration_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_VariableDeclarationList_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {final ^} class C { }');
            await this.computeSuggestions();
            this.assertNotSuggested('Object');
            this.assertNotSuggested('C');
            this.assertNotSuggested('==');
        } )());
    }

    test_VariableDeclarationStatement_RHS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('C');
            this.assertNotSuggested('f');
            this.assertNotSuggested('x');
            this.assertNotSuggested('e');
        } )());
    }

    test_VariableDeclarationStatement_RHS_missing_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testB.dart','lib B;
            this.addTestSource('import "/testB.dart";
            await this.computeSuggestions();
            expect(this.replacementOffset,this.completionOffset);
            expect(this.replacementLength,0);
            this.assertNotSuggested('X');
            this.assertNotSuggested('foo1');
            this.assertNotSuggested('bar1');
            this.assertNotSuggested('foo2');
            this.assertNotSuggested('bar2');
            this.assertNotSuggested('_B');
            this.assertNotSuggested('Y');
            this.assertNotSuggested('C');
            this.assertNotSuggested('f');
            this.assertNotSuggested('x');
            this.assertNotSuggested('e');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalConstructorContributorTest() {
    }
}

export class properties {
}