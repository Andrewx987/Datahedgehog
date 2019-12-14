/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong/checker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./strong_test_helper";

export var main : () => void = () : void =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CheckerTest);
        defineReflectiveTests(CheckerTest_Driver);
    });
};
export namespace CheckerTest {
    export type Constructors = lib3.AbstractStrongTest.Constructors | 'CheckerTest';
    export type Interface = Omit<CheckerTest, Constructors>;
}
@DartClass
export class CheckerTest extends lib3.AbstractStrongTest {
    test_awaitForInCastsStreamElementToVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('import \'dart:async\';
        } )());
    }

    test_awaitForInCastsSupertypeSequenceToStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() async {
        } )());
    }

    test_binaryAndIndexOperators() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {
        } )());
    }

    test_callMethodOnFunctions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void f(int x) => print(x);
        } )());
    }

    test_castsInConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() {
        } )());
    }

    test_castsInConstantContexts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {
        } )());
    }

    test_classOverrideOfGrandInterface_interfaceOfAbstractSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_classOverrideOfGrandInterface_interfaceOfConcreteSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_classOverrideOfGrandInterface_interfaceOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_classOverrideOfGrandInterface_mixinOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_classOverrideOfGrandInterface_superclassOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_compoundAssignment_returnsDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Foo {
        } )());
    }

    test_compoundAssignments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {
        } )());
    }

    test_constantGenericTypeArg_explict() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('abstract class Equality<R> {}
        } )());
    }

    test_constantGenericTypeArg_infer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('abstract class Equality<Q> {}
        } )());
    }

    test_constructorInvalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {
        } )());
    }

    test_constructors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('const num z = 25;
        } )());
    }

    test_conversionAndDynamicInvoke() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('dynamic toString = (int x) => x + 42;
                name : '/helper.dart'});
            await this.checkFile('import \'helper.dart\' as helper;
        } )());
    }

    test_covariantOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';
        } )());
    }

    test_covariantOverride_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';
        } )());
    }

    test_covariantOverride_leastUpperBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import "meta.dart";
        } )());
    }

    test_covariantOverride_markerIsInherited() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';
        } )());
    }

    test_dynamicInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef dynamic A(dynamic x);
        } )());
    }

    test_factoryConstructorDowncast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Animal {
        } )());
    }

    test_fieldFieldOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_fieldGetterOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_fieldOverride_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef void ToVoid<T>(T x);
        } )());
    }

    test_fieldOverride_virtual() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';
        } )());
    }

    test_fieldSetterOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_forInCastsIterateElementToVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() {
        } )());
    }

    test_forInCastsSupertypeSequenceToIterate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() {
        } )());
    }

    test_forLoopVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('foo() {
        } )());
    }

    test_functionModifiers_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('import \'dart:async\';
        } )());
    }

    test_functionModifiers_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('import \'dart:async\';
        } )());
    }

    test_functionModifiers_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('dynamic x;
        } )());
    }

    test_functionTypingAndSubtyping_classes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_dynamic_knownFunctions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_dynamicFunctions_closuresAreNotFuzzy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void takesF(void f(int x)) {}
        } )());
    }

    test_functionTypingAndSubtyping_functionLiteralVariance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_functionVariableVariance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_higherOrderFunctionLiteral1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_higherOrderFunctionLiteral2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_higherOrderFunctionLiteral3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_higherOrderFunctionVariables() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_instanceMethodVariance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_intAndObject() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef Object Top(int x);      // Top of the lattice
        } )());
    }

    test_functionTypingAndSubtyping_namedAndOptionalParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_objectsWithCallMethods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef int I2I(int x);
        } )());
    }

    test_functionTypingAndSubtyping_staticMethodVariance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_functionTypingAndSubtyping_subtypeOfUniversalType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void main() {
        } )());
    }

    test_functionTypingAndSubtyping_uninferredClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef num Num2Num(num x);
        } )());
    }

    test_functionTypingAndSubtyping_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {
        } )());
    }

    test_genericClassMethodOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_genericFunctionWrongNumberOfArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('/*=T*/ foo/*<T>*/(/*=T*/ x, /*=T*/ y) => x;
        } )());
    }

    test_genericMethodOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Future<T> {
        } )());
    }

    test_genericMethodSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A<T> {
        } )());
    }

    test_genericMethodSuperSubstitute() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Clonable<T> {}
        } )());
    }

    test_getterGetterOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_getterOverride_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef void ToVoid<T>(T x);
        } )());
    }

    test_ifForDoWhileStatementsUseBooleanConversion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('main() {
        } )());
    }

    test_implicitCasts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('num n; int i = /*info:ASSIGNMENT_CAST*/n;');
            await this.check();
            this.addFile('num n; int i = /*error:INVALID_ASSIGNMENT*/n;');
            await this.check({
                implicitCasts : false});
        } )());
    }

    test_implicitCasts_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'dart:async\';
            await this.check();
        } )());
    }

    test_implicitCasts_genericMethods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('var x = <String>[].map<String>((x) => "");
            await this.check({
                implicitCasts : false});
        } )());
    }

    test_implicitCasts_numericOps() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('void f() {
            await this.check({
                implicitCasts : false});
        } )());
    }

    test_implicitDynamic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class C {
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('/*=T*/ a/*<T>*/(/*=T*/ t) => t;
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_listLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_mapLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('var m0 = /*error:IMPLICIT_DYNAMIC_MAP_LITERAL*/{};
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class C {
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('const dynamic DYNAMIC_VALUE = 42;
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('// function
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class C {
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class C<T> {}
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_implicitDynamic_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('var /*error:IMPLICIT_DYNAMIC_VARIABLE*/x0;
            await this.check({
                implicitDynamic : false});
        } )());
    }

    test_invalidOverrides_baseClassOverrideToChildInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_childOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_childOverride2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_classOverrideOfInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_doubleOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_doubleOverride2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_grandChildOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_mixinOverrideOfInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_mixinOverrideToBase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_mixinOverrideToMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_noDuplicateMixinOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidOverrides_noErrorsIfSubclassCorrectlyOverrideBaseAndInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_invalidRuntimeChecks() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef int I2I(int x);
        } )());
    }

    test_leastUpperBounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef T Returns<T>();
        } )());
    }

    test_leastUpperBounds_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef String TakesA<T>(T item);
        } )());
    }

    test_loadLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('library lib1;',{
                name : '/lib1.dart'});
            await this.checkFile('import \'lib1.dart\' deferred as lib1;
        } )());
    }

    test_methodOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_methodOverride_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('abstract class A {
        } )());
    }

    test_methodTearoffStrictArrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {
        } )());
    }

    test_mixinOverrideOfGrandInterface_interfaceOfAbstractSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_mixinOverrideOfGrandInterface_interfaceOfConcreteSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_mixinOverrideOfGrandInterface_interfaceOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_mixinOverrideOfGrandInterface_mixinOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_mixinOverrideOfGrandInterface_superclassOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_noDuplicateReports_baseTypeAndMixinOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_noDuplicateReports_twoGrandTypesOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_noDuplicateReports_twoMixinsOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_noDuplicateReports_typeAndBaseTypeOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_noDuplicateReports_typeAndMixinOverrideSameMethodInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_noDuplicateReports_typeOverridesSomeMethodInMultipleInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_nullCoalescingOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_nullCoalescingStrictArrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('bool _alwaysTrue(x) => true;
        } )());
    }

    test_optionalParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void takesF(void f(int x)) {
        } )());
    }

    test_overrideNarrowsType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class A {}
            await this.check({
                implicitCasts : false});
        } )());
    }

    test_overrideNarrowsType_legalWithChecked() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';
        } )());
    }

    test_overrideNarrowsType_noDuplicateError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaLibrary();
            await this.checkFile('import \'meta.dart\';
        } )());
    }

    test_privateOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\' as main;
                name : '/helper.dart'});
            await this.checkFile('import \'helper.dart\' as helper;
        } )());
    }

    test_proxy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('@proxy class C {}
        } )());
    }

    test_redirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {
        } )());
    }

    test_relaxedCasts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_setterOverride_fuzzyArrows() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef void ToVoid<T>(T x);
        } )());
    }

    test_setterReturnTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void voidFn() => null;
        } )());
    }

    test_setterSetterOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_superCallPlacement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Base {
        } )());
    }

    test_superclassOverrideOfGrandInterface_interfaceOfAbstractSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_superclassOverrideOfGrandInterface_interfaceOfConcreteSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_superclassOverrideOfGrandInterface_interfaceOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_superclassOverrideOfGrandInterface_mixinOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_superclassOverrideOfGrandInterface_superclassOfInterfaceOfChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_superConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A { A(A x) {} }
        } )());
    }

    test_tearOffTreatedConsistentlyAsStrictArrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void foo(void f(String x)) {}
        } )());
    }

    test_tearOffTreatedConsistentlyAsStrictArrowNamedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef void Handler(String x);
        } )());
    }

    test_ternaryOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('abstract class Comparable<T> {
        } )());
    }

    test_typeCheckingLiterals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('test() {
        } )());
    }

    test_typePromotionFromDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('f() {
        } )());
    }

    test_typePromotionFromTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void f/*<T>*/(/*=T*/ object) {
        } )());
    }

    test_typePromotionFromTypeParameterAndInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void f/*<T extends num>*/(T x, T y) {
        } )());
    }

    test_typeSubtyping_assigningClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_typeSubtyping_assigningSubclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_typeSubtyping_dynamicDowncasts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_typeSubtyping_dynamicIsTop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_typeSubtyping_interfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {}
        } )());
    }

    test_unaryOperators() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class A {
        } )());
    }

    test_unboundRedirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class Foo {
        } )());
    }

    test_unboundTypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void main() {
        } )());
    }

    test_unboundVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('void main() {
        } )());
    }

    test_universalFunctionSubtyping() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('dynamic foo<T>(dynamic x) => x;
        } )());
    }

    test_voidSubtyping() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('typedef int Foo();
        } )());
    }

    _addMetaLibrary() : void {
        this.addFile('library meta;
            name : '/meta.dart'});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckerTest() {
    }
}

export namespace CheckerTest_Driver {
    export type Constructors = CheckerTest.Constructors | 'CheckerTest_Driver';
    export type Interface = Omit<CheckerTest_Driver, Constructors>;
}
@DartClass
export class CheckerTest_Driver extends CheckerTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_covariantOverride_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_covariantOverride_fields();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckerTest_Driver() {
    }
}

export class properties {
}