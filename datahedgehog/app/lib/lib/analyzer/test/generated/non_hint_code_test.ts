/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/non_hint_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NonHintCodeTest);
    });
};
export namespace NonHintCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'NonHintCodeTest';
    export type Interface = Omit<NonHintCodeTest, Constructors>;
}
@DartClass
export class NonHintCodeTest extends lib3.ResolverTestCase {
    test_async_future_object_without_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_afterTryCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalElse_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = true;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalIf_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = false;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_else() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = true;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_debugConst_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_debugConst_prefixedIdentifier2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_debugConst_propertyAccessor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_debugConst_simpleIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = false;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_while_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = false;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_onCatchSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadFinalBreakInCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_and_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = false;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_or_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = true;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterIfWithoutElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedMethod_inDeprecatedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int x, int y) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_supressIfDivisionNotDefinedInCore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(x, y) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_supressIfDivisionOverridden() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importDeferredLibraryWithLoadFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_issue20904BuggyTypePromotionAtIfJoin_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var message, var dynamic_) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_issue20904BuggyTypePromotionAtIfJoin_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var message) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_issue20904BuggyTypePromotionAtIfJoin_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var message) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_emptyFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int f() => 0;");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_noReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_voidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("void f() {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_for_noCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_notTopLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideEqualsButNotHashCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingField_inInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingField_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingGetter_inInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingGetter_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingMethod_inInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingMethod_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingMethod_inSuperclass_abstract() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingSetter_inInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingSetter_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_propagatedFieldType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A { }
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_proxy_annotation_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_prefixed2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_prefixed3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedGetter_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_assignmentExpression_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class D<T extends dynamic> {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_unionType_all() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_unionType_some() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_binaryExpression_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_indexBoth_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_indexGetter_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_indexSetter_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_postfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_prefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedSetter_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_unnecessaryCast_13855_parameter_A() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A{
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_conditionalExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_dynamic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(v) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_generics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_type_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(v) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_blockBody_notReturnStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_blockBody_notSingleStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_expressionBody_notNoSuchMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_expressionBody_notSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_annotationOnDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedImport_as_equalPrefixes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            let source3 : any = this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            await this.computeAnalysisResult(source3);
            this.assertErrors(source);
            this.assertNoErrors(source2);
            this.assertNoErrors(source3);
            this.verify(new core.DartList.literal(source,source2,source3));
        } )());
    }

    test_unusedImport_core_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_export2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            this.addNamedSource("/lib3.dart",'library lib3;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_export_infiniteLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            this.addNamedSource("/lib3.dart",'library lib3;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_metadata() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_prefix_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_prefix_topLevelFunction2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_implicitReturnValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_nonVoidReturnValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f() => 1;
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_withSuperMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonHintCodeTest() {
    }
}

export namespace PubSuggestionCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'PubSuggestionCodeTest';
    export type Interface = Omit<PubSuggestionCodeTest, Constructors>;
}
@DartClass
export class PubSuggestionCodeTest extends lib3.ResolverTestCase {
    test_import_package() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'package:somepackage/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
        } )());
    }

    test_import_packageWithDotDot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'package:somepackage/../other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST,HintCode.PACKAGE_IMPORT_CONTAINS_DOT_DOT));
        } )());
    }

    test_import_packageWithLeadingDotDot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'package:../other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST,HintCode.PACKAGE_IMPORT_CONTAINS_DOT_DOT));
        } )());
    }

    test_import_referenceIntoLibDirectory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/lib/other.dart","");
            let source : any = this.addNamedSource("/myproj/web/test.dart","import '../lib/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE));
        } )());
    }

    test_import_referenceIntoLibDirectory_no_pubspec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/lib/other.dart","");
            let source : any = this.addNamedSource("/myproj/web/test.dart","import '../lib/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_import_referenceOutOfLibDirectory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/web/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib/test.dart","import '../web/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE));
        } )());
    }

    test_import_referenceOutOfLibDirectory_no_pubspec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/web/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib/test.dart","import '../web/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_import_valid_inside_lib1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/lib/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib/test.dart","import 'other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_import_valid_inside_lib2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/lib/bar/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib/foo/test.dart","import '../bar/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_import_valid_outside_lib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/web/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib2/test.dart","import '../web/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PubSuggestionCodeTest() {
    }
}

export class properties {
}