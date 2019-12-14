/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/analysis/referenced_names_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../generated/parser_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ReferencedNamesBuilderTest);
    });
};
export namespace ReferencedNamesBuilderTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'ReferencedNamesBuilderTest';
    export type Interface = Omit<ReferencedNamesBuilderTest, Constructors>;
}
@DartClass
export class ReferencedNamesBuilderTest extends lib3.ParserTestCase {
    test_class_constructor() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_class_constructor_parameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','b')));
    }
    test_class_field() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_class_getter() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_class_members() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('int','D')));
    }
    test_class_members_dontHideQualified() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('int','D','a','b','c')));
    }
    test_class_method() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_class_method_localVariables() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','d')));
    }
    test_class_method_parameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','b')));
    }
    test_class_method_parameters_dontHideNamedExpressionName() {
        let names : core.DartSet<string> = this._computeReferencedNames('main() {
        expect(names,unorderedEquals(new core.DartList.literal('C','p')));
    }
    test_class_method_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_class_setter() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_class_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U<T> {
        expect(names,unorderedEquals(new core.DartList.literal('A')));
    }
    test_instantiatedNames_importPrefix() {
        let names : core.DartSet<string> = this._computeReferencedNames('import \'a.dart\' as p1;
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','D','c1','c2')));
    }
    test_localFunction() {
        let names : core.DartSet<string> = this._computeReferencedNames('f(A a) {
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_superToSubs_importPrefix() {
        let names : core.DartSet<string> = this._computeReferencedNames('import \'a.dart\' as p1;
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_topLevelVariable() {
        let names : core.DartSet<string> = this._computeReferencedNames('A v = new B(c);
        expect(names,unorderedEquals(new core.DartList.literal('A','B','c')));
    }
    test_topLevelVariable_multiple() {
        let names : core.DartSet<string> = this._computeReferencedNames('A v1 = new B(c), v2 = new D<E>(f);
        expect(names,unorderedEquals(new core.DartList.literal('A','B','c','D','E','f')));
    }
    test_unit_classTypeAlias() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U = A with B implements C;
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_classTypeAlias_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U<T1, T2 extends D> = A<T1> with B<T2> implements C<T1, T2>;
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','D')));
    }
    test_unit_function() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f(B b) {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_function_doc() {
        let names : core.DartSet<string> = this._computeReferencedNames('/**
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','d')));
    }
    test_unit_function_dontHideQualified() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {
        expect(names,unorderedEquals(new core.DartList.literal('int','D','a','b','c')));
    }
    test_unit_function_localFunction_parameter() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f() {
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_unit_function_localFunctions() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f() {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_function_localsDontHideQualified() {
        let names : core.DartSet<string> = this._computeReferencedNames('f(A a, B b) {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','v','b')));
    }
    test_unit_function_localVariables() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f() {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','d')));
    }
    test_unit_function_parameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f(B b) {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_function_parameters_dontHideQualified() {
        let names : core.DartSet<string> = this._computeReferencedNames('f(x, C g()) {
        expect(names,unorderedEquals(new core.DartList.literal('C','x')));
    }
    test_unit_function_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f<T>(B b, T t) {
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_functionTypeAlias() {
        let names : core.DartSet<string> = this._computeReferencedNames('typedef A F(B B, C c(D d));
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','D')));
    }
    test_unit_functionTypeAlias_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('typedef A F<T>(B b, T t);
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_unit_getter() {
        let names : core.DartSet<string> = this._computeReferencedNames('A get aaa {
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_unit_setter() {
        let names : core.DartSet<string> = this._computeReferencedNames('set aaa(A a) {
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_unit_topLevelDeclarations() {
        let names : core.DartSet<string> = this._computeReferencedNames('class L1 {}
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    _computeReferencedNames(code : string) : core.DartSet<string> {
        let unit : any = this.parseCompilationUnit2(code);
        return computeReferencedNames(unit);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReferencedNamesBuilderTest() {
    }
}

export class properties {
}