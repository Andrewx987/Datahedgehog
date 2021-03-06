/** Library asset:datahedgehog_monitor/lib/lib/math/math.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var min : <T extends number>(a : T,b : T) => T = <T extends number>(a : T,b : T) : T =>  {
};
export var max : <T extends number>(a : T,b : T) => T = <T extends number>(a : T,b : T) : T =>  {
};
export var atan2 : (a : number,b : number) => double = (a : number,b : number) : double =>  {
};
export var pow : (x : number,exponent : number) => number = (x : number,exponent : number) : number =>  {
};
export var sin : (radians : number) => double = (radians : number) : double =>  {
};
export var cos : (radians : number) => double = (radians : number) : double =>  {
};
export var tan : (radians : number) => double = (radians : number) : double =>  {
};
export var acos : (x : number) => double = (x : number) : double =>  {
};
export var asin : (x : number) => double = (x : number) : double =>  {
};
export var atan : (x : number) => double = (x : number) : double =>  {
};
export var sqrt : (x : number) => double = (x : number) : double =>  {
};
export var exp : (x : number) => double = (x : number) : double =>  {
};
export var log : (x : number) => double = (x : number) : double =>  {
};
export var _clampToZero : <T extends number>(value : T) => T = <T extends number>(value : T) : T =>  {
    /* TODO (AssertStatementImpl) : assert (value < 0); */;
    return op(Op.NEG,value) * 0;
};
export namespace _JenkinsSmiHash {
    export type Constructors = '_JenkinsSmiHash';
    export type Interface = Omit<_JenkinsSmiHash, Constructors>;
}
@DartClass
export class _JenkinsSmiHash {
    static combine(hash : number,value : number) : number {
        hash = 536870911 & (hash + value);
        hash = 536870911 & (hash + ((524287 & hash) << 10));
        return hash ^ (hash >> 6);
    }
    static finish(hash : number) : number {
        hash = 536870911 & (hash + ((67108863 & hash) << 3));
        hash = hash ^ (hash >> 11);
        return 536870911 & (hash + ((16383 & hash) << 15));
    }
    static hash2(a : any,b : any) : number {
        return _JenkinsSmiHash.finish(_JenkinsSmiHash.combine(_JenkinsSmiHash.combine(0,a),b));
    }
    static hash4(a : any,b : any,c : any,d : any) : number {
        return _JenkinsSmiHash.finish(_JenkinsSmiHash.combine(_JenkinsSmiHash.combine(_JenkinsSmiHash.combine(_JenkinsSmiHash.combine(0,a),b),c),d));
    }
    constructor() {
    }
    @defaultConstructor
    _JenkinsSmiHash() {
    }
}

export namespace Point {
    export type Constructors = 'Point';
    export type Interface<T extends number> = Omit<Point<T extends number>, Constructors>;
}
@DartClass
export class Point<T extends number> {
    x : T;

    y : T;

    constructor(x : T,y : T) {
    }
    @defaultConstructor
    Point(x : T,y : T) {
        this.x = x;
        this.y = y;
    }
    toString() : string {
        return `Point(${this.x}, ${this.y})`;
    }
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, Point<any>)) return false;
        return op(Op.EQUALS,this.x,other.x) && op(Op.EQUALS,this.y,other.y);
    }
    get hashCode() : number {
        return _JenkinsSmiHash.hash2(this.x.hashCode,this.y.hashCode);
    }
    [OperatorMethods.PLUS](other : Point<T>) : Point<T> {
        return new Point<T>(op(Op.PLUS,this.x,other.x),op(Op.PLUS,this.y,other.y));
    }
    [OperatorMethods.MINUS](other : Point<T>) : Point<T> {
        return new Point<T>(op(Op.MINUS,this.x,other.x),op(Op.MINUS,this.y,other.y));
    }
    [OperatorMethods.MULTIPLY](factor : number) : Point<T> {
        return new Point<T>((op(Op.TIMES,this.x,factor)) as any,(op(Op.TIMES,this.y,factor)) as any);
    }
    get magnitude() : double {
        return sqrt(op(Op.TIMES,this.x,this.x) + op(Op.TIMES,this.y,this.y));
    }
    distanceTo(other : Point<T>) : double {
        let dx = op(Op.MINUS,this.x,other.x);
        let dy = op(Op.MINUS,this.y,other.y);
        return sqrt(dx * dx + dy * dy);
    }
    squaredDistanceTo(other : Point<T>) : T {
        let dx = op(Op.MINUS,this.x,other.x);
        let dy = op(Op.MINUS,this.y,other.y);
        return dx * dx + dy * dy;
    }
}

export namespace Random {
    export type Constructors = never;
    export type Interface = Omit<Random, Constructors>;
}
@DartClass
export class Random {
    constructor(seed? : number) {
    }
    @defaultFactory
    static $Random(seed? : number) : Random {
    }
    @namedFactory
    static $secure() : Random {
    }
    static secure : new() => Random;

    @Abstract
    nextInt(max : number) : number{ throw 'abstract'}
    @Abstract
    nextDouble() : double{ throw 'abstract'}
    @Abstract
    nextBool() : boolean{ throw 'abstract'}
}

export namespace _RectangleBase {
    export type Constructors = '_RectangleBase';
    export type Interface<T extends number> = Omit<_RectangleBase<T extends number>, Constructors>;
}
@DartClass
export class _RectangleBase<T extends number> {
    constructor() {
    }
    @defaultConstructor
    _RectangleBase() {
    }
    @AbstractProperty
    get left() : T{ throw 'abstract'}
    @AbstractProperty
    get top() : T{ throw 'abstract'}
    @AbstractProperty
    get width() : T{ throw 'abstract'}
    @AbstractProperty
    get height() : T{ throw 'abstract'}
    get right() : T {
        return op(Op.PLUS,this.left,this.width);
    }
    get bottom() : T {
        return op(Op.PLUS,this.top,this.height);
    }
    toString() : string {
        return `Rectangle (${this.left}, ${this.top}) ${this.width} x ${this.height}`;
    }
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, Rectangle<any>)) return false;
        return op(Op.EQUALS,this.left,other.left) && op(Op.EQUALS,this.top,other.top) && op(Op.EQUALS,this.right,other.right) && op(Op.EQUALS,this.bottom,other.bottom);
    }
    get hashCode() : number {
        return _JenkinsSmiHash.hash4(this.left.hashCode,this.top.hashCode,this.right.hashCode,this.bottom.hashCode);
    }
    intersection(other : Rectangle<T>) : Rectangle<T> {
        let x0 = max(this.left,other.left);
        let x1 = min(op(Op.PLUS,this.left,this.width),op(Op.PLUS,other.left,other.width));
        if (op(Op.LEQ,x0,x1)) {
            let y0 = max(this.top,other.top);
            let y1 = min(op(Op.PLUS,this.top,this.height),op(Op.PLUS,other.top,other.height));
            if (op(Op.LEQ,y0,y1)) {
                return new Rectangle<T>(x0,y0,op(Op.MINUS,x1,x0),op(Op.MINUS,y1,y0));
            }
        }
        return null;
    }
    intersects(other : Rectangle<number>) : boolean {
        return (op(Op.LEQ,this.left,other.left + other.width) && other.left <= op(Op.PLUS,this.left,this.width) && op(Op.LEQ,this.top,other.top + other.height) && other.top <= op(Op.PLUS,this.top,this.height));
    }
    boundingBox(other : Rectangle<T>) : Rectangle<T> {
        let right = max(op(Op.PLUS,this.left,this.width),op(Op.PLUS,other.left,other.width));
        let bottom = max(op(Op.PLUS,this.top,this.height),op(Op.PLUS,other.top,other.height));
        let left = min(this.left,other.left);
        let top = min(this.top,other.top);
        return new Rectangle<T>(left,top,op(Op.MINUS,right,left),op(Op.MINUS,bottom,top));
    }
    containsRectangle(another : Rectangle<number>) : boolean {
        return op(Op.LEQ,this.left,another.left) && op(Op.PLUS,this.left,this.width) >= another.left + another.width && op(Op.LEQ,this.top,another.top) && op(Op.PLUS,this.top,this.height) >= another.top + another.height;
    }
    containsPoint(another : Point<number>) : boolean {
        return another.x >= this.left && another.x <= op(Op.PLUS,this.left,this.width) && another.y >= this.top && another.y <= op(Op.PLUS,this.top,this.height);
    }
    get topLeft() : Point<T> {
        return new Point<T>(this.left,this.top);
    }
    get topRight() : Point<T> {
        return new Point<T>(op(Op.PLUS,this.left,this.width),this.top);
    }
    get bottomRight() : Point<T> {
        return new Point<T>(op(Op.PLUS,this.left,this.width),op(Op.PLUS,this.top,this.height));
    }
    get bottomLeft() : Point<T> {
        return new Point<T>(this.left,op(Op.PLUS,this.top,this.height));
    }
}

export namespace Rectangle {
    export type Constructors = _RectangleBase.Constructors | 'Rectangle';
    export type Interface<T extends number> = Omit<Rectangle<T extends number>, Constructors>;
}
@DartClass
export class Rectangle<T extends number> extends _RectangleBase<T> {
    left : T;

    top : T;

    width : T;

    height : T;

    constructor(left : T,top : T,width : T,height : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Rectangle(left : T,top : T,width : T,height : T) {
        this.width = (op(Op.LT,width,0)) ? op(Op.NEG,width) * 0 : width;
        this.height = (op(Op.LT,height,0)) ? op(Op.NEG,height) * 0 : height;
        this.left = left;
        this.top = top;
    }
    @namedFactory
    static $fromPoints<T extends number>(a : Point<T>,b : Point<T>) : Rectangle<T> {
        let left : T = min(a.x,b.x);
        let width : T = op(Op.MINUS,max(a.x,b.x),left);
        let top : T = min(a.y,b.y);
        let height : T = op(Op.MINUS,max(a.y,b.y),top);
        return new Rectangle<T>(left,top,width,height);
    }
    static fromPoints : new<T extends number>(a : Point<T>,b : Point<T>) => Rectangle<T>;

}

export namespace MutableRectangle {
    export type Constructors = _RectangleBase.Constructors | 'MutableRectangle';
    export type Interface<T extends number> = Omit<MutableRectangle<T extends number>, Constructors>;
}
@DartClass
@Implements(Rectangle)
export class MutableRectangle<T extends number> extends _RectangleBase<T> implements Rectangle.Interface<T> {
    left : T;

    top : T;

    _width : T;

    _height : T;

    constructor(left : T,top : T,width : T,height : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MutableRectangle(left : T,top : T,width : T,height : T) {
        this._width = (op(Op.LT,width,0)) ? _clampToZero(width) : width;
        this._height = (op(Op.LT,height,0)) ? _clampToZero(height) : height;
        this.left = left;
        this.top = top;
    }
    @namedFactory
    static $fromPoints<T extends number>(a : Point<T>,b : Point<T>) : MutableRectangle<T> {
        let left : T = min(a.x,b.x);
        let width : T = op(Op.MINUS,max(a.x,b.x),left);
        let top : T = min(a.y,b.y);
        let height : T = op(Op.MINUS,max(a.y,b.y),top);
        return new MutableRectangle<T>(left,top,width,height);
    }
    static fromPoints : new<T extends number>(a : Point<T>,b : Point<T>) => MutableRectangle<T>;

    get width() : T {
        return this._width;
    }
    set width(width : T) {
        if (op(Op.LT,width,0)) width = _clampToZero(width);
        this._width = width;
    }
    get height() : T {
        return this._height;
    }
    set height(height : T) {
        if (op(Op.LT,height,0)) height = _clampToZero(height);
        this._height = height;
    }
}

export class properties {
    private static __$E : double;
    static get E() : double { 
        if (this.__$E===undefined) {
            this.__$E = 2.718281828459045;
        }
        return this.__$E;
    }
    static set E(__$value : double)  { 
        this.__$E = __$value;
    }

    private static __$LN10 : double;
    static get LN10() : double { 
        if (this.__$LN10===undefined) {
            this.__$LN10 = 2.302585092994046;
        }
        return this.__$LN10;
    }
    static set LN10(__$value : double)  { 
        this.__$LN10 = __$value;
    }

    private static __$LN2 : double;
    static get LN2() : double { 
        if (this.__$LN2===undefined) {
            this.__$LN2 = 0.6931471805599453;
        }
        return this.__$LN2;
    }
    static set LN2(__$value : double)  { 
        this.__$LN2 = __$value;
    }

    private static __$LOG2E : double;
    static get LOG2E() : double { 
        if (this.__$LOG2E===undefined) {
            this.__$LOG2E = 1.4426950408889634;
        }
        return this.__$LOG2E;
    }
    static set LOG2E(__$value : double)  { 
        this.__$LOG2E = __$value;
    }

    private static __$LOG10E : double;
    static get LOG10E() : double { 
        if (this.__$LOG10E===undefined) {
            this.__$LOG10E = 0.4342944819032518;
        }
        return this.__$LOG10E;
    }
    static set LOG10E(__$value : double)  { 
        this.__$LOG10E = __$value;
    }

    private static __$PI : double;
    static get PI() : double { 
        if (this.__$PI===undefined) {
            this.__$PI = 3.141592653589793;
        }
        return this.__$PI;
    }
    static set PI(__$value : double)  { 
        this.__$PI = __$value;
    }

    private static __$SQRT1_2 : double;
    static get SQRT1_2() : double { 
        if (this.__$SQRT1_2===undefined) {
            this.__$SQRT1_2 = 0.7071067811865476;
        }
        return this.__$SQRT1_2;
    }
    static set SQRT1_2(__$value : double)  { 
        this.__$SQRT1_2 = __$value;
    }

    private static __$SQRT2 : double;
    static get SQRT2() : double { 
        if (this.__$SQRT2===undefined) {
            this.__$SQRT2 = 1.4142135623730951;
        }
        return this.__$SQRT2;
    }
    static set SQRT2(__$value : double)  { 
        this.__$SQRT2 = __$value;
    }

}
