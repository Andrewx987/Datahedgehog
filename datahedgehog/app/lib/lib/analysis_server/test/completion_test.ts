/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/completion_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "./completion_test_support";

export var main : () => any = () =>  {
    let builder : CompletionTestBuilder = new CompletionTestBuilder();
    builder.buildAll();
};
export namespace CompletionTestBuilder {
    export type Constructors = 'CompletionTestBuilder';
    export type Interface = Omit<CompletionTestBuilder, Constructors>;
}
@DartClass
export class CompletionTestBuilder {
    expectedPassCount : number;

    expectedFailCount : number;

    buildAll() : void {
        this.buildNumberedTests();
        this.buildCommentSnippetTests();
        this.buildCompletionTests();
        this.buildOtherTests();
        this.buildLibraryTests();
        let testCount : number = this.expectedPassCount + this.expectedFailCount;
        core.print(`Total ${testCount} tests, of which ${this.expectedFailCount} are expected to fail.`);
    }
    buildCommentSnippetTests() : void {
        this.buildTests('testCommentSnippets001','class X {static final num MAX = 0;num yc,xc;mth() {xc = yc = MA!1X;x!2c.abs();num f = M!3AX;}}',new core.DartList.literal<string>("1+MAX","2+xc","3+MAX"));
        this.buildTests('testCommentSnippets002','class Y {String x=\'hi\';mth() {x.l!1ength;int n = 0;x!2.codeUnitAt(n!3);}}',new core.DartList.literal<string>("1+length","2+x","3+n"));
        this.buildTests('testCommentSnippets004','class A {!1int x; !2mth() {!3int y = this.!5x!6;}}class B{}',new core.DartList.literal<string>("1+A","2+B","3+x","3-y","5+mth","6+x"));
        this.buildTests('testCommentSnippets005','class Date { static Date JUN, JUL;}class X { m() { return Da!1te.JU!2L; }}',new core.DartList.literal<string>("1+Date","2+JUN","2+JUL"));
        this.buildTests('testCommentSnippets007','class C {mth(Map x, !1) {}mtf(!2, Map x) {}m() {for (in!3t i=0; i<5; i++); A!4 x;}}class int{}class Arrays{}',new core.DartList.literal<string>("1+bool","2+bool","3+int","4+Arrays"));
        this.buildTests('testCommentSnippets008','class Date{}final num M = Dat!1',new core.DartList.literal<string>("1+Date"));
        this.buildTests('testCommentSnippets009','class Maps{}class x extends!5 !2M!3 !4implements!6 !1\n{}',new core.DartList.literal<string>("1+Map","2+Maps","3+Maps","4-Maps","4+implements","5-Maps","6-Map","6+implements"),{
            failingTests : '46'});
        this.buildTests('testCommentSnippets010','class x implements !1{}',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets011','class x implements M!1{}',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets012','class x implements M!1\n{}',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets013','class x !2{!1}!3',new core.DartList.literal<string>("1+num","2-num","3+num"));
        this.buildTests('testCommentSnippets014','typedef n!1 ;',new core.DartList.literal<string>("1+num"));
        this.buildTests('testCommentSnippets015','class D {f(){} g(){f!1(f!2);}}',new core.DartList.literal<string>("1+f","2+f"));
        this.buildTests('testCommentSnippets016','class F {m() { m(); !1}}',new core.DartList.literal<string>("1+m"));
        this.buildTests('testCommentSnippets017','class F {var x = !1false;}',new core.DartList.literal<string>("1+true"));
        this.buildTests('testCommentSnippets018','class Map{}class Arrays{}class C{ m(!1){} n(!2 x, q)',new core.DartList.literal<string>("1+Map","1-void","1-null","2+Arrays","2-void","2-null"));
        this.buildTests('testCommentSnippets019','class A{m(){Object x;x.!1/**/clear()',new core.DartList.literal<string>("1+toString"));
        this.buildTests('testCommentSnippets020','classMap{}class tst {var newt;void newf(){}test() {var newz;new!1/**/;}}',new core.DartList.literal<string>("1+newt","1+newf","1+newz","1-Map"));
        this.buildTests('testCommentSnippets021','class Map{}class tst {var newt;void newf(){}test() {var newz;new !1/**/;}}',new core.DartList.literal<string>("1+Map","1-newt"));
        this.buildTests('testCommentSnippets022','class Map{}class F{m(){new !1;}}',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets022a','class Map{}class F{m(){new !1',new core.DartList.literal<string>("1+Map"));
        this.buildTests('testCommentSnippets022b','class Map{factory Map.qq(){return null;}}class F{m(){new Map.!1qq();}}',new core.DartList.literal<string>("1+qq"));
        this.buildTests('testCommentSnippets023','class X {X c; X(this.!1c!3) : super() {c.!2}}',new core.DartList.literal<string>("1+c","2+c","3+c"));
        this.buildTests('testCommentSnippets024','class q {m(Map q){var x;m(!1)}n(){var x;n(!2)}}',new core.DartList.literal<string>("1+x","2+x"));
        this.buildTests('testCommentSnippets025','class q {num m() {var q; num x=!1 q!3 + !2/**/;}}',new core.DartList.literal<string>("1+q","2+q","3+q"));
        this.buildTests('testCommentSnippets026','class List{}class a implements !1{}',new core.DartList.literal<string>("1+List"));
        this.buildTests('testCommentSnippets027','class String{}class List{}class test <X extends !1String!2> {}',new core.DartList.literal<string>("1+List","2+String","2-List"));
        this.buildTests('testCommentSnippets028','class String{}class List{}class DateTime{}typedef T Y<T extends !1>(List input);',new core.DartList.literal<string>("1+DateTime","1+String"));
        this.buildTests('testCommentSnippets029','interface A<X> default B<X extends !1List!2> {}',new core.DartList.literal<string>("1+DateTime","2+List"));
        this.buildTests('testCommentSnippets030','class Bar<T extends Foo> {const Bar(!1T!2 k);T!3 m(T!4 a, T!5 b){}final T!6 f = null;}',new core.DartList.literal<string>("1+T","2+T","3+T","4+T","5+T","6+T"),{
            failingTests : '123456'});
        this.buildTests('testCommentSnippets031','class Bar<T extends Foo> {m(x){if (x is !1) return;if (x is!!!2)}}',new core.DartList.literal<string>("1+Bar","1+T","2+T","2+Bar"),{
            failingTests : '12'});
        this.buildTests('testCommentSnippets032','class Fit{}class Bar<T extends Fooa> {const !2F!1ara();}',new core.DartList.literal<string>("1+Fit","1+Fara","1-Bar","2+Fit"),{
            failingTests : '1'});
        this.buildTests('testCommentSnippets033','class List{add(){}length(){}}t1() {var x;if (x is List) {x.!1add(3);}}',new core.DartList.literal<string>("1+add","1+length"));
        this.buildTests('testCommentSnippets035','class List{clear(){}length(){}}t3() {var x=new List(), y=x.!1length();x.!2clear();}',new core.DartList.literal<string>("1+length","2+clear"));
        this.buildTests('testCommentSnippets036','class List{}t3() {var x=new List!1}',new core.DartList.literal<string>("1+List"));
        this.buildTests('testCommentSnippets037','class List{factory List.from(){}}t3() {var x=new List.!1}',new core.DartList.literal<string>("1+from"));
        this.buildTests('testCommentSnippets038','f(){int xa; String s = \'$x!1\';}',new core.DartList.literal<string>("1+xa"));
        this.buildTests('testCommentSnippets038a','int xa; String s = \'$x!1\'',new core.DartList.literal<string>("1+xa"));
        this.buildTests('testCommentSnippets039','f(){int xa; String s = \'$!1\';}',new core.DartList.literal<string>("1+xa"));
        this.buildTests('testCommentSnippets039a','int xa; String s = \'$!1\'',new core.DartList.literal<string>("1+xa"));
        this.buildTests('testCommentSnippets040','class List{add(){}}class Map{}class X{m(){List list; list.!1 Map map;}}',new core.DartList.literal<string>("1+add"));
        this.buildTests('testCommentSnippets041','class List{add(){}length(){}}class X{m(){List list; list.!1 zox();}}',new core.DartList.literal<string>("1+add"));
        this.buildTests('testCommentSnippets042','class DateTime{static const int WED=3;int get day;}fd(){DateTime d=new DateTime.now();d.!1WED!2;}',new core.DartList.literal<string>("1+day","2-WED"));
        this.buildTests('testCommentSnippets043','class L{var k;void.!1}',new core.DartList.literal<string>("1-k"));
        this.buildTests('testCommentSnippets044','class List{}class XXX {XXX.fisk();}main() {main(); new !1}}',new core.DartList.literal<string>("1+List","1+XXX.fisk"));
        this.buildTests('testCommentSnippets047','f(){int x;int y=!1;}',new core.DartList.literal<string>("1+x"));
        this.buildTests('testCommentSnippets048','import \'dart:convert\' as json;f() {var x=new js!1}',new core.DartList.literal<string>("1+json"));
        this.buildTests('testCommentSnippets049','import \'dart:convert\' as json;
        this.buildTests('testCommentSnippets050','class xdr {
        this.buildTests('testCommentSnippets051','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}
        this.buildTests('testCommentSnippets052','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}
        this.buildTests('testCommentSnippets053','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}
        this.buildTests('testCommentSnippets054','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}
        this.buildTests('testCommentSnippets055','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}
        this.buildTests('testCommentSnippets056','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}
        this.buildTests('testCommentSnippets057','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}
        this.buildTests('testCommentSnippets058','typedef vo!2id callback(int k);
            failingTests : '2'});
        this.buildTests('testCommentSnippets059','f(){((int x) => x+4).!1call(1);}',new core.DartList.literal<string>("1-call"));
        this.buildTests('testCommentSnippets060','class Map{}
        this.buildTests('testCommentSnippets061','class A{m(){!1f(3);!2}}n(){!3f(3);!4}f(x)=>x*3;',new core.DartList.literal<string>("1+f","1+n","2+f","2+n","3+f","3+n","4+f","4+n"));
        this.buildTests('testCommentSnippets063','class String{int length(){} String toUpperCase(){} bool isEmpty(){}}class Map{getKeys(){}}
        this.buildTests('testCommentSnippets064','class Spline {
        this.buildTests('testCommentSnippets065','class Spline {
        this.buildTests('testCommentSnippets066','class Spline {
        this.buildTests('testCommentSnippets067','class Spline {
        this.buildTests('testCommentSnippets068','class Spline {
        this.buildTests('testCommentSnippets069','class Spline {
        this.buildTests('testCommentSnippets070','class Spline {
        this.buildTests('testCommentSnippets072','class X {
        this.buildTests('testCommentSnippets073','class X {
        this.buildTests('testCommentSnippets074','class X {
        this.buildTests('testCommentSnippets075','p(x)=>0;var E;f(q)=>!1p(!2E);',new core.DartList.literal<string>("1+p","2+E"));
        this.buildTests('testCommentSnippets076','class Map<K,V>{}class List<E>{}class int{}main() {var m=new Map<Lis!1t<Map<int,in!2t>>,List<!3int>>();}',new core.DartList.literal<string>("1+List","2+int","3+int"));
        this.buildTests('testCommentSnippets076a','class Map<K,V>{}class List<E>{}class int{}main() {var m=new Map<Lis!1t<Map<int,in!2t>>,List<!3>>();}',new core.DartList.literal<string>("1+List","2+int","3+int"));
        this.buildTests('testCommentSnippets077','class FileMode {
        this.buildTests('testCommentSnippets078','class Map{static from()=>null;clear(){}}void main() { Map.!1 }',new core.DartList.literal<string>("1+from","1-clear"));
        this.buildTests('testCommentSnippets079','class Map{static from()=>null;clear(){}}void main() { Map s; s.!1 }',new core.DartList.literal<string>("1-from","1+clear"));
        this.buildTests('testCommentSnippets080','class RuntimeError{var message;}void main() { RuntimeError.!1 }',new core.DartList.literal<string>("1-message"));
        this.buildTests('testCommentSnippets081','class Foo {this.!1}',new core.DartList.literal<string>("1-Object"),{
            failingTests : '1'});
        this.buildTests('testCommentSnippets082','        class HttpRequest {}
        this.buildTests('testCommentSnippets083','main() {(.!1)}',new core.DartList.literal<string>("1-toString"));
        this.buildTests('testCommentSnippets083a','main() { .!1 }',new core.DartList.literal<string>("1-toString"));
        this.buildTests('testCommentSnippets083b','main() { null.!1 }',new core.DartList.literal<string>("1+toString"));
        this.buildTests('testCommentSnippets085','class List{}class Map{}class Z extends List with !1Ma!2p {}',new core.DartList.literal<string>("1+List","1+Map","2+Map","2-List"));
        this.buildTests('testCommentSnippets086','class Q{f(){xy() {!2};x!1y();}}',new core.DartList.literal<string>("1+xy","2+f","2-xy"),{
            failingTests : '2'});
        this.buildTests('testCommentSnippets087','class Map{}class Q extends Object with !1Map {}',new core.DartList.literal<string>("1+Map","1-HashMap"));
        this.buildTests('testCommentSnippets088','class A {
        this.buildTests('testCommentSnippets089','class Q {
            failingTests : '123'});
        this.buildTests('testCommentSnippets090','class X { f() { var a = \'x\'; a.!1 }}',new core.DartList.literal<string>("1+length"));
    }
    buildCompletionTests() : void {
        this.buildTests('testCompletion_alias_field','typedef int fnint(int k); fn!1int x;',new core.DartList.literal<string>("1+fnint"));
        this.buildTests('testCompletion_annotation_argumentList','class AAA {",
            failingTests : '1'});
        this.buildTests('testCompletion_annotation_topLevelVar','const fooConst = null;
            failingTests : '1'});
        this.buildTests('testCompletion_annotation_type','class AAA {
            failingTests : '1'});
        this.buildTests('testCompletion_annotation_type_inClass_withoutMember','class AAA {
        this.buildTests('testCompletion_argument_typeName','class Enum {
        this.buildTests('testCompletion_arguments_ignoreEmpty','class A {
        this.buildTests('testCompletion_as_asIdentifierPrefix','main(p) {
        this.buildTests('testCompletion_as_asPrefixedIdentifierStart','class A {
        this.buildTests('testCompletion_as_incompleteStatement','class MyClass {}
        this.buildTests('testCompletion_cascade','class A {
        this.buildTests('testCompletion_combinator_afterComma','import \'dart:math\' show cos, !1;',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_ended','import \'dart:math\' show !1;"',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_export','export \'dart:math\' show !1;"',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_hide','import \'dart:math\' hide !1;"',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_notEnded','import \'dart:math\' show !1"',new core.DartList.literal<string>("1+PI","1+sin","1+Random","1-String"));
        this.buildTests('testCompletion_combinator_usePrefix','import \'dart:math\' show s!1"',new core.DartList.literal<string>("1+sin","1+sqrt","1-cos","1-String"));
        this.buildTests('testCompletion_constructor_field','class X { X(this.field); int f!1ield;}',new core.DartList.literal<string>("1+field"),{
            failingTests : '1'});
        this.buildTests('testCompletion_constructorArguments_showOnlyCurrent','class A {
            failingTests : '1'});
        this.buildTests('testCompletion_constructorArguments_whenPrefixedType','import \'dart:math\' as m;
            failingTests : '1'});
        this.buildTests('testCompletion_dartDoc_reference_forClass','/**
        this.buildTests('testCompletion_dartDoc_reference_forConstructor','class A {
        this.buildTests('testCompletion_dartDoc_reference_forFunction','/**
            failingTests : '1'});
        this.buildTests('testCompletion_dartDoc_reference_forFunctionTypeAlias','/**
            failingTests : '1'});
        this.buildTests('testCompletion_dartDoc_reference_forMethod','class A {
        this.buildTests('testCompletion_dartDoc_reference_incomplete','/**
        this.buildTests('testCompletion_double_inFractionPart','main() {
        this.buildTests('testCompletion_enum','enum MyEnum {A, B, C}
        this.buildTests('testCompletion_exactPrefix_hasHigherRelevance','var STR;
        this.buildTests('testCompletion_export_dart','import \'dart:math
        this.buildTests('testCompletion_export_noStringLiteral_noSemicolon','import !1
            failingTests : '1'});
        this.buildTests('testCompletion_forStmt_vars','class int{}class Foo { mth() { for (in!1t i = 0; i!2 < 5; i!3++); }}',new core.DartList.literal<string>("1+int","2+i","3+i"));
        this.buildTests('testCompletion_function','class Foo { int boo = 7; mth() { PNGS.sort((String a, Str!1) => a.compareTo(b)); }}',new core.DartList.literal<string>("1+String"));
        this.buildTests('testCompletion_function_partial','class Foo { int boo = 7; mth() { PNGS.sort((String a, Str!1)); }}',new core.DartList.literal<string>("1+String"));
        this.buildTests('testCompletion_functionTypeParameter_namedArgument','typedef FFF(a, b, {x1, x2, y});
            failingTests : '1'});
        this.buildTests('testCompletion_ifStmt_field1','class Foo { int myField = 7; mth() { if (!1) {}}}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_field1a','class Foo { int myField = 7; mth() { if (!1) }}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_field2','class Foo { int myField = 7; mth() { if (m!1) {}}}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_field2a','class Foo { int myField = 7; mth() { if (m!1) }}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_field2b','class Foo { myField = 7; mth() { if (m!1) {}}}',new core.DartList.literal<string>("1+myField"));
        this.buildTests('testCompletion_ifStmt_localVar','class Foo { mth() { int value = 7; if (v!1) {}}}',new core.DartList.literal<string>("1+value"));
        this.buildTests('testCompletion_ifStmt_localVara','class Foo { mth() { value = 7; if (v!1) {}}}',new core.DartList.literal<string>("1-value"));
        this.buildTests('testCompletion_ifStmt_topLevelVar','int topValue = 7; class Foo { mth() { if (t!1) {}}}',new core.DartList.literal<string>("1+topValue"));
        this.buildTests('testCompletion_ifStmt_topLevelVara','topValue = 7; class Foo { mth() { if (t!1) {}}}',new core.DartList.literal<string>("1+topValue"));
        this.buildTests('testCompletion_ifStmt_unionType_nonStrict','class A { a() => null; x() => null}
            failingTests : '1'});
        this.buildTests('testCompletion_ifStmt_unionType_strict','class A { a() => null; x() => null}
            failingTests : '1'});
        this.buildTests('testCompletion_import','import \'!1\';',new core.DartList.literal<string>("1+dart:!","1+package:!"));
        this.buildTests('testCompletion_import_dart','import \'dart:math
        this.buildTests('testCompletion_import_hasStringLiteral_noSemicolon','import \'!1\'
        this.buildTests('testCompletion_import_noSpace','import!1',new core.DartList.literal<string>("1+ 'dart:!';","1+ 'package:!';"),{
            failingTests : '1'});
        this.buildTests('testCompletion_import_noStringLiteral','import !1;',new core.DartList.literal<string>("1+'dart:!'","1+'package:!'"),{
            failingTests : '1'});
        this.buildTests('testCompletion_import_noStringLiteral_noSemicolon','import !1
            failingTests : '1'});
        this.buildTests('testCompletion_incompleteClassMember','class A {
        this.buildTests('testCompletion_incompleteClosure_parameterType','f1(cb(String s)) {}
        this.buildTests('testCompletion_inPeriodPeriod','main(String str) {
            failingTests : '123'});
        this.buildTests('testCompletion_instanceCreation_unresolved','class A {
        this.buildTests('testCompletion_import_lib','import \'!1',new core.DartList.literal<string>("1+my_lib.dart"),{
            extraFiles : new core.DartMap.literal([
                ["/my_lib.dart",""]]),failingTests : '1'});
        this.buildTests('testCompletion_is','class MyClass {}
        this.buildTests('testCompletion_is_asIdentifierStart','main(p) {
        this.buildTests('testCompletion_is_asPrefixedIdentifierStart','class A {
        this.buildTests('testCompletion_is_incompleteStatement1','class MyClass {}
        this.buildTests('testCompletion_is_incompleteStatement2','class MyClass {}
        this.buildTests('testCompletion_keyword_in','class Foo { int input = 7; mth() { if (in!1) {}}}',new core.DartList.literal<string>("1+input"));
        this.buildTests('testCompletion_keyword_syntheticIdentifier','main() {
        this.buildTests('testCompletion_libraryIdentifier_atEOF','library int.!1',new core.DartList.literal<string>("1-parse","1-bool"));
        this.buildTests('testCompletion_libraryIdentifier_notEOF','library int.!1',new core.DartList.literal<string>("1-parse","1-bool"));
        this.buildTests('testCompletion_methodRef_asArg_incompatibleFunctionType','foo( f(int p) ) {}
            failingTests : '1'});
        this.buildTests('testCompletion_methodRef_asArg_notFunctionType','foo( f(int p) ) {}
            failingTests : '1'});
        this.buildTests('testCompletion_methodRef_asArg_ofFunctionType','foo( f(int p) ) {}
        this.buildTests('testCompletion_namedArgument_alreadyUsed','func({foo}) {} main() { func(foo: 0, fo!1); }',new core.DartList.literal<string>("1-foo"));
        this.buildTests('testCompletion_namedArgument_constructor','class A {A({foo, bar}) {}} main() { new A(fo!1); }',new core.DartList.literal<string>("1+foo","1-bar"),{
            failingTests : '1'});
        this.buildTests('testCompletion_namedArgument_empty','func({foo, bar}) {} main() { func(!1); }',new core.DartList.literal<string>("1+foo","1-foo"),{
            failingTests : '1'});
        this.buildTests('testCompletion_namedArgument_function','func({foo, bar}) {} main() { func(fo!1); }',new core.DartList.literal<string>("1+foo","1-bar"),{
            failingTests : '1'});
        this.buildTests('testCompletion_namedArgument_notNamed','func([foo]) {} main() { func(fo!1); }',new core.DartList.literal<string>("1-foo"));
        this.buildTests('testCompletion_namedArgument_unresolvedFunction','main() { func(fo!1); }',new core.DartList.literal<string>("1-foo"));
        this.buildTests('testCompletion_newMemberType1','class Collection{}class List extends Collection{}class Foo { !1 }',new core.DartList.literal<string>("1+Collection","1+List"));
        this.buildTests('testCompletion_newMemberType2','class Collection{}class List extends Collection{}class Foo {!1}',new core.DartList.literal<string>("1+Collection","1+List"));
        this.buildTests('testCompletion_newMemberType3','class Collection{}class List extends Collection{}class Foo {L!1}',new core.DartList.literal<string>("1-Collection","1+List"));
        this.buildTests('testCompletion_newMemberType4','class Collection{}class List extends Collection{}class Foo {C!1}',new core.DartList.literal<string>("1+Collection","1-List"));
        this.buildTests('testCompletion_positionalArgument_constructor','class A {
            failingTests : '12'});
        this.buildTests('testCompletion_positionalArgument_function','func([foo, bar]) {}
            failingTests : '12'});
        this.buildTests('testCompletion_preferStaticType','class A {
            failingTests : '1'});
        this.buildTests('testCompletion_privateElement_sameLibrary_constructor','class A {
        this.buildTests('testCompletion_privateElement_sameLibrary_member','class A {
        this.buildTests('testCompletion_propertyAccess_whenClassTarget','class A {
        this.buildTests('testCompletion_propertyAccess_whenClassTarget_excludeSuper','class A {
        this.buildTests('testCompletion_propertyAccess_whenInstanceTarget','class A {
        this.buildTests('testCompletion_return_withIdentifierPrefix','f() { var vvv = 42; return v!1 }',new core.DartList.literal<string>("1+vvv"));
        this.buildTests('testCompletion_return_withoutExpression','f() { var vvv = 42; return !1 }',new core.DartList.literal<string>("1+vvv"));
        this.buildTests('testCompletion_staticField1','class num{}class Sunflower {static final n!2um MAX_D = 300;nu!3m xc, yc;Sun!4flower() {x!Xc = y!Yc = MA!1 }}',new core.DartList.literal<string>("1+MAX_D","X+xc","Y+yc","2+num","3+num","4+Sunflower"));
        this.buildTests('testCompletion_super_superType','class A {
        this.buildTests('testCompletion_superConstructorInvocation_noNamePrefix','class A {
            failingTests : '1'});
        this.buildTests('testCompletion_superConstructorInvocation_withNamePrefix','class A {
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inConstructorInitializer','class A {
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inFieldDeclaration','class A {
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inStaticMethod','class A {
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inTopLevelFunction','main() {
            failingTests : '1'});
        this.buildTests('testCompletion_this_bad_inTopLevelVariableDeclaration','var v = this.!1;',new core.DartList.literal<string>("1-toString"),{
            failingTests : '1'});
        this.buildTests('testCompletion_this_OK_inConstructorBody','class A {
        this.buildTests('testCompletion_this_OK_localAndSuper','class A {
        this.buildTests('testCompletion_topLevelField_init2','class DateTime{static var JUN;}final num M = Dat!1eTime.JUN;',new core.DartList.literal<string>("1+DateTime","1-void"));
        this.buildTests('testCompletion_while','class Foo { int boo = 7; mth() { while (b!1) {} }}',new core.DartList.literal<string>("1+boo"));
    }
    buildLibraryTests() : void {
        let sources : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        this.buildTests('test_export_ignoreIfThisLibraryExports','export \'dart:math\';
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib;
        this.buildTests('test_export_showIfImportLibraryWithExport','import \'lib.dart\' as p;
            extraFiles : sources,failingTests : '1'});
        this.buildTests('test_importPrefix_hideCombinator','import \'dart:math\' as math hide PI;
            failingTests : '1'});
        this.buildTests('test_importPrefix_showCombinator','import \'dart:math\' as math show PI;
            failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib
        this.buildTests('test_memberOfPrivateClass_otherLibrary','import \'lib.dart\';
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib;
        this.buildTests('test_noPrivateElement_otherLibrary_constructor','import \'lib.dart\';
            failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib;
        this.buildTests('test_noPrivateElement_otherLibrary_member','              import \'lib.dart\';
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/firth.dart",'library firth;
        this.buildTests('testLibrary001','import \'firth.dart\';
            extraFiles : sources,failingTests : '1'});
        this.buildTests('testLibrary002','t2() {var q=[0],z=q.!1length;q.!2clear();}',new core.DartList.literal<string>("1+length","1+isEmpty","2+clear"),{
            failingTests : '1'});
        this.buildTests('testLibrary003','class X{var q; f() {q.!1a!2}}',new core.DartList.literal<string>("1+end","2+abs","2-end"),{
            failingTests : '12'});
        this.buildTests('testLibrary004','            library foo;
        this.buildTests('testLibrary005','var PHI;main(){PHI=5.3;PHI.abs().!1 Object x;}',new core.DartList.literal<string>("1+abs"),{
            failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/exp2a.dart",'library exp2a;
        op(Op.INDEX_ASSIGN,sources,"/exp1b.dart",'library exp1b;",
        op(Op.INDEX_ASSIGN,sources,"/exp1a.dart",'library exp1a;",
        op(Op.INDEX_ASSIGN,sources,"/imp1.dart",'library imp1;
        op(Op.INDEX_ASSIGN,sources,"/imp2.dart",'library imp2;
        this.buildTests('testLibrary006','import \'imp1.dart\';
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/l1.dart",'library l1;
        this.buildTests('testLibrary007','import \'l1.dart\';
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/public.dart",'library public;
        op(Op.INDEX_ASSIGN,sources,"/private.dart",'library _private;
        this.buildTests('testLibrary008','import \'private.dart\';
            extraFiles : sources,failingTests : '1'});
        sources.clear();
        op(Op.INDEX_ASSIGN,sources,"/lib.dart",'library lib;
        this.buildTests('testLibrary009','import \'lib.dart\' as Q;
            extraFiles : sources,failingTests : '1234'});
    }
    buildNumberedTests() : void {
        this.buildTests('test001','void r1(var v) {
        this.buildTests('test002','void r2(var vim) {
        this.buildTests('test003','class A {
        this.buildTests('test004','class A {
            failingTests : '12'});
        this.buildTests('test005','class A {}
            failingTests : '1'});
        this.buildTests('test006','void r2(var vim, {va: 2, b: 3}) {
        this.buildTests('test007','void r2(var vim, [va: 2, b: 3]) {
        this.buildTests('test008','!1class Aclass {}
            failingTests : '2346'});
        this.buildTests('test009','typedef !1dy!2namic TestFn1();
            failingTests : '1234'});
        this.buildTests('test010','class test !8<!1t !2 !3extends String,!4 List,!5 !6>!7 {}
            failingTests : '23'});
        this.buildTests('test011','r2(var object, Object object1, Object !1);',new core.DartList.literal<string>("1+object2"),{
            failingTests : '1'});
        this.buildTests('test012','class X {
            failingTests : '123'});
        this.buildTests('test013','class Q {
            failingTests : '689'});
        this.buildTests('test014','class Q {
            failingTests : '3CK'});
        this.buildTests('test015','f(a,b,c) => a + b * c !1;',new core.DartList.literal<string>("1+=="),{
            failingTests : '1'});
        this.buildTests('test016','class X {dynamic f(a,b,c) {return a + b * c !1;}}',new core.DartList.literal<string>("1+=="),{
            failingTests : '1'});
        this.buildTests('test017','!1!2import \'x\' !5as r;
            failingTests : '234567'});
        this.buildTests('test018','!1part !2of foo;',new core.DartList.literal<string>("1+part","2+of"),{
            failingTests : '12'});
        this.buildTests('test019','var truefalse = 0;
        this.buildTests('test020','var x = null.!1',new core.DartList.literal<string>("1+toString"));
        this.buildTests('test021','var x = .!1',new core.DartList.literal<string>("1-toString"));
        this.buildTests('test022','var x = .!1;',new core.DartList.literal<string>("1-toString"));
        this.buildTests('test023','class Map{getKeys(){}}
        this.buildTests('test024','class List{factory List.from(Iterable other) {}}
        this.buildTests('test025','class R {
        this.buildTests('test026','var aBcD; var x=ab!1',new core.DartList.literal<string>("1+aBcD"));
        this.buildTests('test027','m(){try{}catch(eeee,ssss){s!1}',new core.DartList.literal<string>("1+ssss"));
        this.buildTests('test028','m(){var isX=3;if(is!1)',new core.DartList.literal<string>("1+isX"));
        this.buildTests('test029','m(){[1].forEach((x)=>!1x);}',new core.DartList.literal<string>("1+x"));
        this.buildTests('test030','n(){[1].forEach((x){!1});}',new core.DartList.literal<string>("1+x"));
        this.buildTests('test031','class Caster {} m() {try {} on Cas!1ter catch (CastBlock) {!2}}',new core.DartList.literal<string>("1+Caster","1-CastBlock","2+Caster","2+CastBlock"));
        this.buildTests('test032','const ONE = 1;
        this.buildTests('test033','class A{}class B extends A{b(){}}class C implements A {c(){}}class X{x(){A f;f.!1}}',new core.DartList.literal<string>("1+b","1-c"),{
            failingTests : '1'});
        this.buildTests('test034','var topvar;
            failingTests : '12'});
        this.buildTests('test035','class Y {final x=\'hi\';mth() {x.!1length;}}',new core.DartList.literal<string>("1+length"),{
            failingTests : '1'});
        this.buildTests('test036','class A1 {
            failingTests : '12'});
        this.buildTests('test037','class HttpServer{}
            failingTests : '1'});
        this.buildTests('test038','class X {
            failingTests : '2'});
        this.buildTests('test039','class X{}var x = null as !1X;',new core.DartList.literal<string>("1-void"));
        this.buildTests('test040','m(){f(a, b, {x1, x2, y}) {};f(1, 2, !1)!2;}',new core.DartList.literal<string>("1+x1","2-x2"),{
            failingTests : '1'});
        this.buildTests('test041','m(){f(a, b, {x1, x2, y}) {};f(1, 2, !1',new core.DartList.literal<string>("1+x1","1+x2","1+y"),{
            failingTests : '1'});
        this.buildTests('test042','m(){f(a, b, {x1, x2, y}) {};f(1, 2, !1;!2',new core.DartList.literal<string>("1+x1","1+x2","2-y"),{
            failingTests : '1'});
    }
    buildOtherTests() : void {
        this.buildTests('test_classMembers_inGetter','class A { var fff; get z {ff!1}}',new core.DartList.literal<string>("1+fff"));
        this.buildTests('testSingle','class A {int x; !2mth() {int y = this.x;}}class B{}',new core.DartList.literal<string>("2+B"));
    }
    buildTests(baseName : string,originalSource : string,results : core.DartList<string>,_namedArguments? : {extraFiles? : core.DartMap<string,string>,failingTests? : string}) : void {
        let {extraFiles,failingTests} = Object.assign({
            "failingTests" : ''}, _namedArguments );
        let completionTests : core.DartList<lib4.LocationSpec> = lib4.LocationSpec.from(originalSource,results);
        completionTests.sort((first : lib4.LocationSpec,second : lib4.LocationSpec) =>  {
            return new core.DartString(first.id).compareTo(second.id);
        });
        if (completionTests.isEmpty) {
            test(baseName,() =>  {
                fail("Expected exclamation point ('!') within the source denoting the" + "position at which code completion should occur");
            });
        }
        let allSpecIds : core.DartSet<string> = completionTests.map((spec : lib4.LocationSpec) =>  {
            return spec.id;
        }).toSet();
        for(let id of new core.DartString(failingTests).split('')) {
            if (!allSpecIds.contains(id)) {
                test(`${baseName}-${id}`,() =>  {
                    fail(`Test case '${id}' included in failingTests, but this id does not exist.`);
                });
            }
        }
        for(let spec of completionTests) {
            let testName : string = `${baseName}-${spec.id}`;
            if (new core.DartString(failingTests).contains(spec.id)) {
                ++this.expectedFailCount;
                test(`${testName} (expected failure ${this.expectedFailCount})`,() =>  {
                    let test : lib4.CompletionTestCase = new lib4.CompletionTestCase();
                    return new async.Future<any>(() =>  {
                        return test.runTest(spec,extraFiles);
                    }).then((_ : any) =>  {
                        fail('Test passed - expected to fail.');
                    },{
                        onError : (_ : any) =>  {
                        }});
                });
            }else {
                ++this.expectedPassCount;
                test(testName,() =>  {
                    let test : lib4.CompletionTestCase = new lib4.CompletionTestCase();
                    return test.runTest(spec,extraFiles);
                });
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    CompletionTestBuilder() {
        this.expectedPassCount = 0;
        this.expectedFailCount = 0;
    }
}

export class properties {
}