(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const br="151",Ea=0,Pr=1,Ta=2,$s=1,Aa=2,Zn=3,Qt=0,ft=1,Wt=2,Jt=0,Fn=1,Rr=2,Dr=3,Ur=4,Ca=5,In=100,La=101,Pa=102,Ir=103,Nr=104,Ra=200,Da=201,Ua=202,Ia=203,Zs=204,Ks=205,Na=206,Fa=207,za=208,Oa=209,Ba=210,Ga=0,ka=1,Va=2,mr=3,Ha=4,Wa=5,qa=6,Xa=7,Js=0,Ya=1,ja=2,qt=0,$a=1,Za=2,Ka=3,Ja=4,Qa=5,Qs=300,Bn=301,Gn=302,gr=303,_r=304,Pi=306,vr=1e3,Lt=1001,xr=1002,tt=1003,Fr=1004,Bi=1005,ht=1006,eo=1007,Jn=1008,mn=1009,to=1010,no=1011,ea=1012,io=1013,hn=1014,dn=1015,Qn=1016,ro=1017,so=1018,zn=1020,ao=1021,Pt=1023,oo=1024,lo=1025,fn=1026,kn=1027,co=1028,uo=1029,ho=1030,fo=1031,po=1033,Gi=33776,ki=33777,Vi=33778,Hi=33779,zr=35840,Or=35841,Br=35842,Gr=35843,mo=36196,kr=37492,Vr=37496,Hr=37808,Wr=37809,qr=37810,Xr=37811,Yr=37812,jr=37813,$r=37814,Zr=37815,Kr=37816,Jr=37817,Qr=37818,es=37819,ts=37820,ns=37821,Wi=36492,go=36283,is=36284,rs=36285,ss=36286,gn=3e3,ke=3001,_o=3200,vo=3201,xo=0,Mo=1,Ut="srgb",ei="srgb-linear",ta="display-p3",qi=7680,So=519,as=35044,os="300 es",Mr=1035;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const st=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xi=Math.PI/180,Sr=180/Math.PI;function ti(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(st[s&255]+st[s>>8&255]+st[s>>16&255]+st[s>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[t&63|128]+st[t>>8&255]+"-"+st[t>>16&255]+st[t>>24&255]+st[n&255]+st[n>>8&255]+st[n>>16&255]+st[n>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function yo(s,e){return(s%e+e)%e}function Yi(s,e,t){return(1-t)*s+t*e}function ls(s){return(s&s-1)===0&&s!==0}function bo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,h,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=r,c[5]=h,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],c=n[4],d=n[7],f=n[2],m=n[5],_=n[8],v=i[0],p=i[3],u=i[6],A=i[1],w=i[4],S=i[7],E=i[2],P=i[5],I=i[8];return r[0]=o*v+a*A+h*E,r[3]=o*p+a*w+h*P,r[6]=o*u+a*S+h*I,r[1]=l*v+c*A+d*E,r[4]=l*p+c*w+d*P,r[7]=l*u+c*S+d*I,r[2]=f*v+m*A+_*E,r[5]=f*p+m*w+_*P,r[8]=f*u+m*S+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],c=e[8];return t*o*c-t*a*l-n*r*c+n*a*h+i*r*l-i*o*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],c=e[8],d=c*o-a*l,f=a*h-c*r,m=l*r-o*h,_=t*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(i*l-c*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(c*t-i*h)*v,e[5]=(i*r-a*t)*v,e[6]=m*v,e[7]=(n*h-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*o+l*a)+o+e,-i*l,i*h,-i*(-l*o+h*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ji.makeScale(e,t)),this}rotate(e){return this.premultiply(ji.makeRotation(-e)),this}translate(e,t){return this.premultiply(ji.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ji=new De;function na(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Li(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function On(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const wo=new De().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Eo=new De().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function To(s){return s.convertSRGBToLinear().applyMatrix3(Eo)}function Ao(s){return s.applyMatrix3(wo).convertLinearToSRGB()}const Co={[ei]:s=>s,[Ut]:s=>s.convertSRGBToLinear(),[ta]:To},Lo={[ei]:s=>s,[Ut]:s=>s.convertLinearToSRGB(),[ta]:Ao},gt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return ei},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Co[e],i=Lo[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let vn;class ia{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vn===void 0&&(vn=Li("canvas")),vn.width=e.width,vn.height=e.height;const n=vn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Li("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ra{constructor(e=null){this.isSource=!0,this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Zi(i[o].image)):r.push(Zi(i[o]))}else r=Zi(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zi(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ia.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Po=0;class xt extends Hn{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Lt,i=Lt,r=ht,o=Jn,a=Pt,h=mn,l=xt.DEFAULT_ANISOTROPY,c=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Po++}),this.uuid=ti(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Qs;xt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const h=e.elements,l=h[0],c=h[4],d=h[8],f=h[1],m=h[5],_=h[9],v=h[2],p=h[6],u=h[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,S=(m+1)/2,E=(u+1)/2,P=(c+f)/4,I=(d+v)/4,z=(_+p)/4;return w>S&&w>E?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=P/n,r=I/n):S>E?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=P/i,r=z/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=I/r,i=z/r),this.set(n,i,r,t),this}let A=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(d-v)/A,this.z=(f-c)/A,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xt extends Hn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ra(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let h=n[i+0],l=n[i+1],c=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=h,e[t+1]=l,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d!==v||h!==f||l!==m||c!==_){let p=1-a;const u=h*f+l*m+c*_+d*v,A=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const E=Math.sqrt(w),P=Math.atan2(E,u*A);p=Math.sin(p*P)/E,a=Math.sin(a*P)/E}const S=a*A;if(h=h*p+f*S,l=l*p+m*S,c=c*p+_*S,d=d*p+v*S,p===1-a){const E=1/Math.sqrt(h*h+l*l+c*c+d*d);h*=E,l*=E,c*=E,d*=E}}e[t]=h,e[t+1]=l,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],h=n[i+1],l=n[i+2],c=n[i+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+c*d+h*m-l*f,e[t+1]=h*_+c*f+l*d-a*m,e[t+2]=l*_+c*m+a*f-h*d,e[t+3]=c*_-a*d-h*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,h=Math.sin,l=a(n/2),c=a(i/2),d=a(r/2),f=h(n/2),m=h(i/2),_=h(r/2);switch(o){case"XYZ":this._x=f*c*d+l*m*_,this._y=l*m*d-f*c*_,this._z=l*c*_+f*m*d,this._w=l*c*d-f*m*_;break;case"YXZ":this._x=f*c*d+l*m*_,this._y=l*m*d-f*c*_,this._z=l*c*_-f*m*d,this._w=l*c*d+f*m*_;break;case"ZXY":this._x=f*c*d-l*m*_,this._y=l*m*d+f*c*_,this._z=l*c*_+f*m*d,this._w=l*c*d-f*m*_;break;case"ZYX":this._x=f*c*d-l*m*_,this._y=l*m*d+f*c*_,this._z=l*c*_-f*m*d,this._w=l*c*d+f*m*_;break;case"YZX":this._x=f*c*d+l*m*_,this._y=l*m*d+f*c*_,this._z=l*c*_-f*m*d,this._w=l*c*d-f*m*_;break;case"XZY":this._x=f*c*d-l*m*_,this._y=l*m*d-f*c*_,this._z=l*c*_+f*m*d,this._w=l*c*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],h=t[9],l=t[2],c=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-h)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(c-h)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,h=t._y,l=t._z,c=t._w;return this._x=n*c+o*a+i*l-r*h,this._y=i*c+o*h+r*a-n*l,this._z=r*c+o*l+n*h-i*a,this._w=o*c-n*a-i*h-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),c=Math.atan2(l,a),d=Math.sin((1-t)*c)/l,f=Math.sin(t*c)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,h=e.w,l=h*t+o*i-a*n,c=h*n+a*t-r*i,d=h*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=l*h+f*-r+c*-a-d*-o,this.y=c*h+f*-o+d*-r-l*-a,this.z=d*h+f*-a+l*-o-c*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,h=t.z;return this.x=i*h-r*a,this.y=r*o-n*h,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ki.copy(this).projectOnVector(e),this.sub(Ki)}reflect(e){return this.sub(Ki.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ki=new T,cs=new ni;class ii{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),xn.copy(e.boundingBox),xn.applyMatrix4(e.matrixWorld),this.union(xn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Ot.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ot)}else i.boundingBox===null&&i.computeBoundingBox(),xn.copy(i.boundingBox),xn.applyMatrix4(e.matrixWorld),this.union(xn)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xn),oi.subVectors(this.max,Xn),Mn.subVectors(e.a,Xn),Sn.subVectors(e.b,Xn),yn.subVectors(e.c,Xn),jt.subVectors(Sn,Mn),$t.subVectors(yn,Sn),sn.subVectors(Mn,yn);let t=[0,-jt.z,jt.y,0,-$t.z,$t.y,0,-sn.z,sn.y,jt.z,0,-jt.x,$t.z,0,-$t.x,sn.z,0,-sn.x,-jt.y,jt.x,0,-$t.y,$t.x,0,-sn.y,sn.x,0];return!Ji(t,Mn,Sn,yn,oi)||(t=[1,0,0,0,1,0,0,0,1],!Ji(t,Mn,Sn,yn,oi))?!1:(li.crossVectors(jt,$t),t=[li.x,li.y,li.z],Ji(t,Mn,Sn,yn,oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zt=[new T,new T,new T,new T,new T,new T,new T,new T],Ot=new T,xn=new ii,Mn=new T,Sn=new T,yn=new T,jt=new T,$t=new T,sn=new T,Xn=new T,oi=new T,li=new T,an=new T;function Ji(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){an.fromArray(s,r);const a=i.x*Math.abs(an.x)+i.y*Math.abs(an.y)+i.z*Math.abs(an.z),h=e.dot(an),l=t.dot(an),c=n.dot(an);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}const Do=new ii,Yn=new T,Qi=new T;class wr{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Do.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yn.subVectors(e,this.center);const t=Yn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yn.copy(e.center).add(Qi)),this.expandByPoint(Yn.copy(e.center).sub(Qi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bt=new T,er=new T,ci=new T,Zt=new T,tr=new T,ui=new T,nr=new T;class Uo{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bt.copy(this.origin).addScaledVector(this.direction,t),Bt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){er.copy(e).add(t).multiplyScalar(.5),ci.copy(t).sub(e).normalize(),Zt.copy(this.origin).sub(er);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ci),a=Zt.dot(this.direction),h=-Zt.dot(ci),l=Zt.lengthSq(),c=Math.abs(1-o*o);let d,f,m,_;if(c>0)if(d=o*h-a,f=o*a-h,_=r*c,d>=0)if(f>=-_)if(f<=_){const v=1/c;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*h)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*h)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*h)+l;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-h),r),m=-d*d+f*(f+2*h)+l):f<=_?(d=0,f=Math.min(Math.max(-r,-h),r),m=f*(f+2*h)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-h),r),m=-d*d+f*(f+2*h)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(er).addScaledVector(ci,f),m}intersectSphere(e,t){Bt.subVectors(e.center,this.origin);const n=Bt.dot(this.direction),i=Bt.dot(Bt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,h;const l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),c>=0?(r=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,h=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,h=(e.min.z-f.z)*d),n>h||a>i)||((a>n||n!==n)&&(n=a),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bt)!==null}intersectTriangle(e,t,n,i,r){tr.subVectors(t,e),ui.subVectors(n,e),nr.crossVectors(tr,ui);let o=this.direction.dot(nr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zt.subVectors(this.origin,e);const h=a*this.direction.dot(ui.crossVectors(Zt,ui));if(h<0)return null;const l=a*this.direction.dot(tr.cross(Zt));if(l<0||h+l>o)return null;const c=-a*Zt.dot(nr);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,h,l,c,d,f,m,_,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=h,u[2]=l,u[6]=c,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bn.setFromMatrixColumn(e,0).length(),r=1/bn.setFromMatrixColumn(e,1).length(),o=1/bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(i),l=Math.sin(i),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*c,m=o*d,_=a*c,v=a*d;t[0]=h*c,t[4]=-h*d,t[8]=l,t[1]=m+_*l,t[5]=f-v*l,t[9]=-a*h,t[2]=v-f*l,t[6]=_+m*l,t[10]=o*h}else if(e.order==="YXZ"){const f=h*c,m=h*d,_=l*c,v=l*d;t[0]=f+v*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=m*a-_,t[6]=v+f*a,t[10]=o*h}else if(e.order==="ZXY"){const f=h*c,m=h*d,_=l*c,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*c,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){const f=o*c,m=o*d,_=a*c,v=a*d;t[0]=h*c,t[4]=_*l-m,t[8]=f*l+v,t[1]=h*d,t[5]=v*l+f,t[9]=m*l-_,t[2]=-l,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){const f=o*h,m=o*l,_=a*h,v=a*l;t[0]=h*c,t[4]=v-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-l*c,t[6]=m*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*h,m=o*l,_=a*h,v=a*l;t[0]=h*c,t[4]=-d,t[8]=l*c,t[1]=f*d+v,t[5]=o*c,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*c,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Io,e,No)}lookAt(e,t,n){const i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),Kt.crossVectors(n,_t),Kt.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),Kt.crossVectors(n,_t)),Kt.normalize(),hi.crossVectors(_t,Kt),i[0]=Kt.x,i[4]=hi.x,i[8]=_t.x,i[1]=Kt.y,i[5]=hi.y,i[9]=_t.y,i[2]=Kt.z,i[6]=hi.z,i[10]=_t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],c=n[1],d=n[5],f=n[9],m=n[13],_=n[2],v=n[6],p=n[10],u=n[14],A=n[3],w=n[7],S=n[11],E=n[15],P=i[0],I=i[4],z=i[8],M=i[12],b=i[1],K=i[5],$=i[9],N=i[13],O=i[2],H=i[6],J=i[10],te=i[14],j=i[3],re=i[7],ne=i[11],ye=i[15];return r[0]=o*P+a*b+h*O+l*j,r[4]=o*I+a*K+h*H+l*re,r[8]=o*z+a*$+h*J+l*ne,r[12]=o*M+a*N+h*te+l*ye,r[1]=c*P+d*b+f*O+m*j,r[5]=c*I+d*K+f*H+m*re,r[9]=c*z+d*$+f*J+m*ne,r[13]=c*M+d*N+f*te+m*ye,r[2]=_*P+v*b+p*O+u*j,r[6]=_*I+v*K+p*H+u*re,r[10]=_*z+v*$+p*J+u*ne,r[14]=_*M+v*N+p*te+u*ye,r[3]=A*P+w*b+S*O+E*j,r[7]=A*I+w*K+S*H+E*re,r[11]=A*z+w*$+S*J+E*ne,r[15]=A*M+w*N+S*te+E*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],h=e[9],l=e[13],c=e[2],d=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],u=e[15];return _*(+r*h*d-i*l*d-r*a*f+n*l*f+i*a*m-n*h*m)+v*(+t*h*m-t*l*f+r*o*f-i*o*m+i*l*c-r*h*c)+p*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*c-n*l*c)+u*(-i*a*c-t*h*d+t*a*f+i*o*d-n*o*f+n*h*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],h=e[6],l=e[7],c=e[8],d=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],u=e[15],A=d*p*l-v*f*l+v*h*m-a*p*m-d*h*u+a*f*u,w=_*f*l-c*p*l-_*h*m+o*p*m+c*h*u-o*f*u,S=c*v*l-_*d*l+_*a*m-o*v*m-c*a*u+o*d*u,E=_*d*h-c*v*h-_*a*f+o*v*f+c*a*p-o*d*p,P=t*A+n*w+i*S+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=A*I,e[1]=(v*f*r-d*p*r-v*i*m+n*p*m+d*i*u-n*f*u)*I,e[2]=(a*p*r-v*h*r+v*i*l-n*p*l-a*i*u+n*h*u)*I,e[3]=(d*h*r-a*f*r-d*i*l+n*f*l+a*i*m-n*h*m)*I,e[4]=w*I,e[5]=(c*p*r-_*f*r+_*i*m-t*p*m-c*i*u+t*f*u)*I,e[6]=(_*h*r-o*p*r-_*i*l+t*p*l+o*i*u-t*h*u)*I,e[7]=(o*f*r-c*h*r+c*i*l-t*f*l-o*i*m+t*h*m)*I,e[8]=S*I,e[9]=(_*d*r-c*v*r-_*n*m+t*v*m+c*n*u-t*d*u)*I,e[10]=(o*v*r-_*a*r+_*n*l-t*v*l-o*n*u+t*a*u)*I,e[11]=(c*a*r-o*d*r-c*n*l+t*d*l+o*n*m-t*a*m)*I,e[12]=E*I,e[13]=(c*v*i-_*d*i+_*n*f-t*v*f-c*n*p+t*d*p)*I,e[14]=(_*a*i-o*v*i-_*n*h+t*v*h+o*n*p-t*a*p)*I,e[15]=(o*d*i-c*a*i+c*n*h-t*d*h-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,h=e.z,l=r*o,c=r*a;return this.set(l*o+n,l*a-i*h,l*h+i*a,0,l*a+i*h,c*a+n,c*h-i*o,0,l*h-i*a,c*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,h=t._w,l=r+r,c=o+o,d=a+a,f=r*l,m=r*c,_=r*d,v=o*c,p=o*d,u=a*d,A=h*l,w=h*c,S=h*d,E=n.x,P=n.y,I=n.z;return i[0]=(1-(v+u))*E,i[1]=(m+S)*E,i[2]=(_-w)*E,i[3]=0,i[4]=(m-S)*P,i[5]=(1-(f+u))*P,i[6]=(p+A)*P,i[7]=0,i[8]=(_+w)*I,i[9]=(p-A)*I,i[10]=(1-(f+v))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=bn.set(i[0],i[1],i[2]).length();const o=bn.set(i[4],i[5],i[6]).length(),a=bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wt.copy(this);const l=1/r,c=1/o,d=1/a;return wt.elements[0]*=l,wt.elements[1]*=l,wt.elements[2]*=l,wt.elements[4]*=c,wt.elements[5]*=c,wt.elements[6]*=c,wt.elements[8]*=d,wt.elements[9]*=d,wt.elements[10]*=d,t.setFromRotationMatrix(wt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,h=2*r/(t-e),l=2*r/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=h,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,h=1/(t-e),l=1/(n-i),c=1/(o-r),d=(t+e)*h,f=(n+i)*l,m=(o+r)*c;return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bn=new T,wt=new it,Io=new T(0,0,0),No=new T(1,1,1),Kt=new T,hi=new T,_t=new T,us=new it,hs=new ni;class Ri{constructor(e=0,t=0,n=0,i=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],h=i[1],l=i[5],c=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return us.makeRotationFromQuaternion(e),this.setFromRotationMatrix(us,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hs.setFromEuler(this),this.setFromQuaternion(hs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fo=0;const ds=new T,wn=new ni,Gt=new it,di=new T,jn=new T,zo=new T,Oo=new ni,fs=new T(1,0,0),ps=new T(0,1,0),ms=new T(0,0,1),Bo={type:"added"},gs={type:"removed"};class Mt extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fo++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new T,t=new Ri,n=new ni,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new De}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(fs,e)}rotateY(e){return this.rotateOnAxis(ps,e)}rotateZ(e){return this.rotateOnAxis(ms,e)}translateOnAxis(e,t){return ds.copy(e).applyQuaternion(this.quaternion),this.position.add(ds.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fs,e)}translateY(e){return this.translateOnAxis(ps,e)}translateZ(e){return this.translateOnAxis(ms,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?di.copy(e):di.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gt.lookAt(jn,di,this.up):Gt.lookAt(di,jn,this.up),this.quaternion.setFromRotationMatrix(Gt),i&&(Gt.extractRotation(i.matrixWorld),wn.setFromRotationMatrix(Gt),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(gs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,e,zo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,Oo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const d=h[l];r(e.shapes,d)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(e.materials,this.material[h]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];i.animations.push(r(e.animations,h))}}if(t){const a=o(e.geometries),h=o(e.materials),l=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const h=[];for(const l in a){const c=a[l];delete c.metadata,h.push(c)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new T(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Et=new T,kt=new T,ir=new T,Vt=new T,En=new T,Tn=new T,_s=new T,rr=new T,sr=new T,ar=new T;let fi=!1;class At{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Et.subVectors(e,t),i.cross(Et);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Et.subVectors(i,t),kt.subVectors(n,t),ir.subVectors(e,t);const o=Et.dot(Et),a=Et.dot(kt),h=Et.dot(ir),l=kt.dot(kt),c=kt.dot(ir),d=o*l-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(l*h-a*c)*f,_=(o*c-a*h)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vt),Vt.x>=0&&Vt.y>=0&&Vt.x+Vt.y<=1}static getUV(e,t,n,i,r,o,a,h){return fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fi=!0),this.getInterpolation(e,t,n,i,r,o,a,h)}static getInterpolation(e,t,n,i,r,o,a,h){return this.getBarycoord(e,t,n,i,Vt),h.setScalar(0),h.addScaledVector(r,Vt.x),h.addScaledVector(o,Vt.y),h.addScaledVector(a,Vt.z),h}static isFrontFacing(e,t,n,i){return Et.subVectors(n,t),kt.subVectors(e,t),Et.cross(kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Et.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),Et.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return At.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return At.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fi=!0),At.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return At.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return At.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return At.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;En.subVectors(i,n),Tn.subVectors(r,n),rr.subVectors(e,n);const h=En.dot(rr),l=Tn.dot(rr);if(h<=0&&l<=0)return t.copy(n);sr.subVectors(e,i);const c=En.dot(sr),d=Tn.dot(sr);if(c>=0&&d<=c)return t.copy(i);const f=h*d-c*l;if(f<=0&&h>=0&&c<=0)return o=h/(h-c),t.copy(n).addScaledVector(En,o);ar.subVectors(e,r);const m=En.dot(ar),_=Tn.dot(ar);if(_>=0&&m<=_)return t.copy(r);const v=m*l-h*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Tn,a);const p=c*_-m*d;if(p<=0&&d-c>=0&&m-_>=0)return _s.subVectors(r,i),a=(d-c)/(d-c+(m-_)),t.copy(i).addScaledVector(_s,a);const u=1/(p+v+f);return o=v*u,a=f*u,t.copy(n).addScaledVector(En,o).addScaledVector(Tn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Go=0,Di=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Go++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Fn,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zs,this.blendDst=Ks,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fn&&(n.blending=this.blending),this.side!==Qt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={h:0,s:0,l:0},pi={h:0,s:0,l:0};function or(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=yo(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=or(o,r,e+1/3),this.g=or(o,r,e),this.b=or(o,r,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,gt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,gt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const h=parseFloat(r[1])/360,l=parseFloat(r[2])/100,c=parseFloat(r[3])/100;return n(r[4]),this.setHSL(h,l,c,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=oa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return gt.fromWorkingColorSpace(at.copy(this),e),dt(at.r*255,0,255)<<16^dt(at.g*255,0,255)<<8^dt(at.b*255,0,255)<<0}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(at.copy(this),t);const n=at.r,i=at.g,r=at.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let h,l;const c=(a+o)/2;if(a===o)h=0,l=0;else{const d=o-a;switch(l=c<=.5?d/(o+a):d/(2-o-a),o){case n:h=(i-r)/d+(i<r?6:0);break;case i:h=(r-n)/d+2;break;case r:h=(n-i)/d+4;break}h/=6}return e.h=h,e.s=l,e.l=c,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(at.copy(this),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=Ut){gt.fromWorkingColorSpace(at.copy(this),e);const t=at.r,n=at.g,i=at.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tt),Tt.h+=e,Tt.s+=t,Tt.l+=n,this.setHSL(Tt.h,Tt.s,Tt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tt),e.getHSL(pi);const n=Yi(Tt.h,pi.h,t),i=Yi(Tt.s,pi.s,t),r=Yi(Tt.l,pi.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const at=new He;He.NAMES=oa;class Er extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ze=new T,mi=new Oe;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=as,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mi.fromBufferAttribute(this,t),mi.applyMatrix3(e),this.setXY(t,mi.x,mi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==as&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class la extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ca extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ko=0;const yt=new it,lr=new Mt,An=new T,vt=new ii,$n=new ii,et=new T;class _n extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ko++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(na(e)?ca:la)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,n){return yt.makeTranslation(e,t,n),this.applyMatrix4(yt),this}scale(e,t,n){return yt.makeScale(e,t,n),this.applyMatrix4(yt),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(An).negate(),this.translate(An.x,An.y,An.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];vt.setFromBufferAttribute(r),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(et.addVectors(vt.min,$n.min),vt.expandByPoint(et),et.addVectors(vt.max,$n.max),vt.expandByPoint(et)):(vt.expandByPoint($n.min),vt.expandByPoint($n.max))}vt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)et.fromBufferAttribute(a,l),h&&(An.fromBufferAttribute(e,l),et.add(An)),i=Math.max(i,n.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const h=this.getAttribute("tangent").array,l=[],c=[];for(let b=0;b<a;b++)l[b]=new T,c[b]=new T;const d=new T,f=new T,m=new T,_=new Oe,v=new Oe,p=new Oe,u=new T,A=new T;function w(b,K,$){d.fromArray(i,b*3),f.fromArray(i,K*3),m.fromArray(i,$*3),_.fromArray(o,b*2),v.fromArray(o,K*2),p.fromArray(o,$*2),f.sub(d),m.sub(d),v.sub(_),p.sub(_);const N=1/(v.x*p.y-p.x*v.y);isFinite(N)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(N),A.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(N),l[b].add(u),l[K].add(u),l[$].add(u),c[b].add(A),c[K].add(A),c[$].add(A))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,K=S.length;b<K;++b){const $=S[b],N=$.start,O=$.count;for(let H=N,J=N+O;H<J;H+=3)w(n[H+0],n[H+1],n[H+2])}const E=new T,P=new T,I=new T,z=new T;function M(b){I.fromArray(r,b*3),z.copy(I);const K=l[b];E.copy(K),E.sub(I.multiplyScalar(I.dot(K))).normalize(),P.crossVectors(z,K);const N=P.dot(c[b])<0?-1:1;h[b*4]=E.x,h[b*4+1]=E.y,h[b*4+2]=E.z,h[b*4+3]=N}for(let b=0,K=S.length;b<K;++b){const $=S[b],N=$.start,O=$.count;for(let H=N,J=N+O;H<J;H+=3)M(n[H+0]),M(n[H+1]),M(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new T,r=new T,o=new T,a=new T,h=new T,l=new T,c=new T,d=new T;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),c.subVectors(o,r),d.subVectors(i,r),c.cross(d),a.fromBufferAttribute(n,_),h.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(c),h.add(c),l.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,h.x,h.y,h.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,r),d.subVectors(i,r),c.cross(d),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(a,h){const l=a.array,c=a.itemSize,d=a.normalized,f=new l.constructor(h.length*c);let m=0,_=0;for(let v=0,p=h.length;v<p;v++){a.isInterleavedBufferAttribute?m=h[v]*a.data.stride+a.offset:m=h[v]*c;for(let u=0;u<c;u++)f[_++]=l[m++]}return new Ft(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,i=this.attributes;for(const a in i){const h=i[a],l=e(h,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const h=[],l=r[a];for(let c=0,d=l.length;c<d;c++){const f=l[c],m=e(f,n);h.push(m)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const l=n[h];e.data.attributes[h]=l.toJSON(e.data)}const i={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];c.push(m.toJSON(e.data))}c.length>0&&(i[h]=c,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],d=r[l];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vs=new it,Dt=new Uo,gi=new wr,xs=new T,Cn=new T,Ln=new T,Pn=new T,cr=new T,_i=new T,vi=new Oe,xi=new Oe,Mi=new Oe,Ms=new T,Ss=new T,ys=new T,Si=new T,yi=new T;class Nt extends Mt{constructor(e=new _n,t=new Er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){_i.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const c=a[h],d=r[h];c!==0&&(cr.fromBufferAttribute(d,e),o?_i.addScaledVector(cr,c):_i.addScaledVector(cr.sub(t),c))}t.add(_i)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),gi.copy(n.boundingSphere),gi.applyMatrix4(r),Dt.copy(e.ray).recast(e.near),gi.containsPoint(Dt.origin)===!1&&(Dt.intersectSphere(gi,xs)===null||Dt.origin.distanceToSquared(xs)>(e.far-e.near)**2))||(vs.copy(r).invert(),Dt.copy(e.ray).applyMatrix4(vs),n.boundingBox!==null&&Dt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,h=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv2,d=n.attributes.normal,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,v=f.length;_<v;_++){const p=f[_],u=i[p.materialIndex],A=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,E=w;S<E;S+=3){const P=a.getX(S),I=a.getX(S+1),z=a.getX(S+2);o=bi(this,u,e,Dt,l,c,d,P,I,z),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,u=v;p<u;p+=3){const A=a.getX(p),w=a.getX(p+1),S=a.getX(p+2);o=bi(this,i,e,Dt,l,c,d,A,w,S),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(i))for(let _=0,v=f.length;_<v;_++){const p=f[_],u=i[p.materialIndex],A=Math.max(p.start,m.start),w=Math.min(h.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,E=w;S<E;S+=3){const P=S,I=S+1,z=S+2;o=bi(this,u,e,Dt,l,c,d,P,I,z),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,m.start),v=Math.min(h.count,m.start+m.count);for(let p=_,u=v;p<u;p+=3){const A=p,w=p+1,S=p+2;o=bi(this,i,e,Dt,l,c,d,A,w,S),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Vo(s,e,t,n,i,r,o,a){let h;if(e.side===ft?h=n.intersectTriangle(o,r,i,!0,a):h=n.intersectTriangle(i,r,o,e.side===Qt,a),h===null)return null;yi.copy(a),yi.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(yi);return l<t.near||l>t.far?null:{distance:l,point:yi.clone(),object:s}}function bi(s,e,t,n,i,r,o,a,h,l){s.getVertexPosition(a,Cn),s.getVertexPosition(h,Ln),s.getVertexPosition(l,Pn);const c=Vo(s,e,t,n,Cn,Ln,Pn,Si);if(c){i&&(vi.fromBufferAttribute(i,a),xi.fromBufferAttribute(i,h),Mi.fromBufferAttribute(i,l),c.uv=At.getInterpolation(Si,Cn,Ln,Pn,vi,xi,Mi,new Oe)),r&&(vi.fromBufferAttribute(r,a),xi.fromBufferAttribute(r,h),Mi.fromBufferAttribute(r,l),c.uv2=At.getInterpolation(Si,Cn,Ln,Pn,vi,xi,Mi,new Oe)),o&&(Ms.fromBufferAttribute(o,a),Ss.fromBufferAttribute(o,h),ys.fromBufferAttribute(o,l),c.normal=At.getInterpolation(Si,Cn,Ln,Pn,Ms,Ss,ys,new T),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:h,c:l,normal:new T,materialIndex:0};At.getNormal(Cn,Ln,Pn,d.normal),c.face=d}return c}class ri extends _n{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const h=[],l=[],c=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(d,2));function _(v,p,u,A,w,S,E,P,I,z,M){const b=S/I,K=E/z,$=S/2,N=E/2,O=P/2,H=I+1,J=z+1;let te=0,j=0;const re=new T;for(let ne=0;ne<J;ne++){const ye=ne*K-N;for(let ae=0;ae<H;ae++){const B=ae*b-$;re[v]=B*A,re[p]=ye*w,re[u]=O,l.push(re.x,re.y,re.z),re[v]=0,re[p]=0,re[u]=P>0?1:-1,c.push(re.x,re.y,re.z),d.push(ae/I),d.push(1-ne/z),te+=1}}for(let ne=0;ne<z;ne++)for(let ye=0;ye<I;ye++){const ae=f+ye+H*ne,B=f+ye+H*(ne+1),Z=f+(ye+1)+H*(ne+1),D=f+(ye+1)+H*ne;h.push(ae,B,D),h.push(B,Z,D),j+=6}a.addGroup(m,j,M),m+=j,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vn(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ct(s){const e={};for(let t=0;t<s.length;t++){const n=Vn(s[t]);for(const i in n)e[i]=n[i]}return e}function Ho(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ua(s){return s.getRenderTarget()===null&&s.outputEncoding===ke?Ut:ei}const Wo={clone:Vn,merge:ct};var qo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qo,this.fragmentShader=Xo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vn(e.uniforms),this.uniformsGroups=Ho(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ha extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends ha{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/h,t-=o.offsetY*n/l,i*=o.width/h,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rn=-90,Dn=1;class Yo extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ct(Rn,Dn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ct(Rn,Dn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Ct(Rn,Dn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ct(Rn,Dn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const h=new Ct(Rn,Dn,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const l=new Ct(Rn,Dn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,h,l]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=qt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class da extends xt{constructor(e,t,n,i,r,o,a,h,l,c){e=e!==void 0?e:[],t=t!==void 0?t:Bn,super(e,t,n,i,r,o,a,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jo extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new da(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ri(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ft,blending:Jt});r.uniforms.tEquirect.value=t;const o=new Nt(i,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=ht),new Yo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ur=new T,$o=new T,Zo=new De;class ln{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ur.subVectors(n,t).cross($o.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zo.getNormalMatrix(e),i=this.coplanarPoint(ur).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const on=new wr,wi=new T;class fa{constructor(e=new ln,t=new ln,n=new ln,i=new ln,r=new ln,o=new ln){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],h=n[4],l=n[5],c=n[6],d=n[7],f=n[8],m=n[9],_=n[10],v=n[11],p=n[12],u=n[13],A=n[14],w=n[15];return t[0].setComponents(a-i,d-h,v-f,w-p).normalize(),t[1].setComponents(a+i,d+h,v+f,w+p).normalize(),t[2].setComponents(a+r,d+l,v+m,w+u).normalize(),t[3].setComponents(a-r,d-l,v-m,w-u).normalize(),t[4].setComponents(a-o,d-c,v-_,w-A).normalize(),t[5].setComponents(a+o,d+c,v+_,w+A).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(e){return on.center.set(0,0,0),on.radius=.7071067811865476,on.applyMatrix4(e.matrixWorld),this.intersectsSphere(on)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wi.x=i.normal.x>0?e.max.x:e.min.x,wi.y=i.normal.y>0?e.max.y:e.min.y,wi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pa(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ko(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,c){const d=l.array,f=l.usage,m=s.createBuffer();s.bindBuffer(c,m),s.bufferData(c,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function r(l,c,d){const f=c.array,m=c.updateRange;s.bindBuffer(d,l),m.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(s.deleteBuffer(c.buffer),n.delete(l))}function h(l,c){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,c)):d.version<l.version&&(r(d.buffer,l,c),d.version=l.version)}return{get:o,remove:a,update:h}}class Ui extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),h=Math.floor(i),l=a+1,c=h+1,d=e/a,f=t/h,m=[],_=[],v=[],p=[];for(let u=0;u<c;u++){const A=u*f-o;for(let w=0;w<l;w++){const S=w*d-r;_.push(S,-A,0),v.push(0,0,1),p.push(w/a),p.push(1-u/h)}}for(let u=0;u<h;u++)for(let A=0;A<a;A++){const w=A+l*u,S=A+l*(u+1),E=A+1+l*(u+1),P=A+1+l*u;m.push(w,S,P),m.push(S,E,P)}this.setIndex(m),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,el=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,il=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rl="vec3 transformed = vec3( position );",sl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,al=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ol=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ll=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ml=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_l=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ml=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wl="gl_FragColor = linearToOutputTexel( gl_FragColor );",El=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Al=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ll=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ul=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Il=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ol=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kl=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Vl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ql=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Yl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jl=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$l=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ql=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ec=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ic=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ac=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,dc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_c=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ec=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ac=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ic=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Nc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Vc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Hc=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wc=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qc=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qc=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ru=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,au=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ou=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,du=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_u=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Eu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:Jo,alphamap_pars_fragment:Qo,alphatest_fragment:el,alphatest_pars_fragment:tl,aomap_fragment:nl,aomap_pars_fragment:il,begin_vertex:rl,beginnormal_vertex:sl,bsdfs:al,iridescence_fragment:ol,bumpmap_pars_fragment:ll,clipping_planes_fragment:cl,clipping_planes_pars_fragment:ul,clipping_planes_pars_vertex:hl,clipping_planes_vertex:dl,color_fragment:fl,color_pars_fragment:pl,color_pars_vertex:ml,color_vertex:gl,common:_l,cube_uv_reflection_fragment:vl,defaultnormal_vertex:xl,displacementmap_pars_vertex:Ml,displacementmap_vertex:Sl,emissivemap_fragment:yl,emissivemap_pars_fragment:bl,encodings_fragment:wl,encodings_pars_fragment:El,envmap_fragment:Tl,envmap_common_pars_fragment:Al,envmap_pars_fragment:Cl,envmap_pars_vertex:Ll,envmap_physical_pars_fragment:kl,envmap_vertex:Pl,fog_vertex:Rl,fog_pars_vertex:Dl,fog_fragment:Ul,fog_pars_fragment:Il,gradientmap_pars_fragment:Nl,lightmap_fragment:Fl,lightmap_pars_fragment:zl,lights_lambert_fragment:Ol,lights_lambert_pars_fragment:Bl,lights_pars_begin:Gl,lights_toon_fragment:Vl,lights_toon_pars_fragment:Hl,lights_phong_fragment:Wl,lights_phong_pars_fragment:ql,lights_physical_fragment:Xl,lights_physical_pars_fragment:Yl,lights_fragment_begin:jl,lights_fragment_maps:$l,lights_fragment_end:Zl,logdepthbuf_fragment:Kl,logdepthbuf_pars_fragment:Jl,logdepthbuf_pars_vertex:Ql,logdepthbuf_vertex:ec,map_fragment:tc,map_pars_fragment:nc,map_particle_fragment:ic,map_particle_pars_fragment:rc,metalnessmap_fragment:sc,metalnessmap_pars_fragment:ac,morphcolor_vertex:oc,morphnormal_vertex:lc,morphtarget_pars_vertex:cc,morphtarget_vertex:uc,normal_fragment_begin:hc,normal_fragment_maps:dc,normal_pars_fragment:fc,normal_pars_vertex:pc,normal_vertex:mc,normalmap_pars_fragment:gc,clearcoat_normal_fragment_begin:_c,clearcoat_normal_fragment_maps:vc,clearcoat_pars_fragment:xc,iridescence_pars_fragment:Mc,output_fragment:Sc,packing:yc,premultiplied_alpha_fragment:bc,project_vertex:wc,dithering_fragment:Ec,dithering_pars_fragment:Tc,roughnessmap_fragment:Ac,roughnessmap_pars_fragment:Cc,shadowmap_pars_fragment:Lc,shadowmap_pars_vertex:Pc,shadowmap_vertex:Rc,shadowmask_pars_fragment:Dc,skinbase_vertex:Uc,skinning_pars_vertex:Ic,skinning_vertex:Nc,skinnormal_vertex:Fc,specularmap_fragment:zc,specularmap_pars_fragment:Oc,tonemapping_fragment:Bc,tonemapping_pars_fragment:Gc,transmission_fragment:kc,transmission_pars_fragment:Vc,uv_pars_fragment:Hc,uv_pars_vertex:Wc,uv_vertex:qc,worldpos_vertex:Xc,background_vert:Yc,background_frag:jc,backgroundCube_vert:$c,backgroundCube_frag:Zc,cube_vert:Kc,cube_frag:Jc,depth_vert:Qc,depth_frag:eu,distanceRGBA_vert:tu,distanceRGBA_frag:nu,equirect_vert:iu,equirect_frag:ru,linedashed_vert:su,linedashed_frag:au,meshbasic_vert:ou,meshbasic_frag:lu,meshlambert_vert:cu,meshlambert_frag:uu,meshmatcap_vert:hu,meshmatcap_frag:du,meshnormal_vert:fu,meshnormal_frag:pu,meshphong_vert:mu,meshphong_frag:gu,meshphysical_vert:_u,meshphysical_frag:vu,meshtoon_vert:xu,meshtoon_frag:Mu,points_vert:Su,points_frag:yu,shadow_vert:bu,shadow_frag:wu,sprite_vert:Eu,sprite_frag:Tu},le={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaTest:{value:0}}},It={basic:{uniforms:ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ct([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ct([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ct([le.points,le.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ct([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ct([le.common,le.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:ct([le.sprite,le.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:ct([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:ct([le.lights,le.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};It.physical={uniforms:ct([It.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Ei={r:0,b:0,g:0};function Au(s,e,t,n,i,r,o){const a=new He(0);let h=r===!0?0:1,l,c,d=null,f=0,m=null;function _(p,u){let A=!1,w=u.isScene===!0?u.background:null;w&&w.isTexture&&(w=(u.backgroundBlurriness>0?t:e).get(w));const S=s.xr,E=S.getSession&&S.getSession();E&&E.environmentBlendMode==="additive"&&(w=null),w===null?v(a,h):w&&w.isColor&&(v(w,1),A=!0),(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Pi)?(c===void 0&&(c=new Nt(new ri(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Vn(It.backgroundCube.uniforms),vertexShader:It.backgroundCube.vertexShader,fragmentShader:It.backgroundCube.fragmentShader,side:ft,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=w.encoding!==ke,(d!==w||f!==w.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Nt(new Ui(2,2),new en({name:"BackgroundMaterial",uniforms:Vn(It.background.uniforms),vertexShader:It.background.vertexShader,fragmentShader:It.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=w.encoding!==ke,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,u){p.getRGB(Ei,ua(s)),n.buffers.color.setClear(Ei.r,Ei.g,Ei.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),h=u,v(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,v(a,h)},render:_}}function Cu(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},h=p(null);let l=h,c=!1;function d(O,H,J,te,j){let re=!1;if(o){const ne=v(te,J,H);l!==ne&&(l=ne,m(l.object)),re=u(O,te,J,j),re&&A(O,te,J,j)}else{const ne=H.wireframe===!0;(l.geometry!==te.id||l.program!==J.id||l.wireframe!==ne)&&(l.geometry=te.id,l.program=J.id,l.wireframe=ne,re=!0)}j!==null&&t.update(j,34963),(re||c)&&(c=!1,z(O,H,J,te),j!==null&&s.bindBuffer(34963,t.get(j).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function v(O,H,J){const te=J.wireframe===!0;let j=a[O.id];j===void 0&&(j={},a[O.id]=j);let re=j[H.id];re===void 0&&(re={},j[H.id]=re);let ne=re[te];return ne===void 0&&(ne=p(f()),re[te]=ne),ne}function p(O){const H=[],J=[],te=[];for(let j=0;j<i;j++)H[j]=0,J[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:te,object:O,attributes:{},index:null}}function u(O,H,J,te){const j=l.attributes,re=H.attributes;let ne=0;const ye=J.getAttributes();for(const ae in ye)if(ye[ae].location>=0){const Z=j[ae];let D=re[ae];if(D===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(D=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(D=O.instanceColor)),Z===void 0||Z.attribute!==D||D&&Z.data!==D.data)return!0;ne++}return l.attributesNum!==ne||l.index!==te}function A(O,H,J,te){const j={},re=H.attributes;let ne=0;const ye=J.getAttributes();for(const ae in ye)if(ye[ae].location>=0){let Z=re[ae];Z===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor));const D={};D.attribute=Z,Z&&Z.data&&(D.data=Z.data),j[ae]=D,ne++}l.attributes=j,l.attributesNum=ne,l.index=te}function w(){const O=l.newAttributes;for(let H=0,J=O.length;H<J;H++)O[H]=0}function S(O){E(O,0)}function E(O,H){const J=l.newAttributes,te=l.enabledAttributes,j=l.attributeDivisors;J[O]=1,te[O]===0&&(s.enableVertexAttribArray(O),te[O]=1),j[O]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,H),j[O]=H)}function P(){const O=l.newAttributes,H=l.enabledAttributes;for(let J=0,te=H.length;J<te;J++)H[J]!==O[J]&&(s.disableVertexAttribArray(J),H[J]=0)}function I(O,H,J,te,j,re){n.isWebGL2===!0&&(J===5124||J===5125)?s.vertexAttribIPointer(O,H,J,j,re):s.vertexAttribPointer(O,H,J,te,j,re)}function z(O,H,J,te){if(n.isWebGL2===!1&&(O.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const j=te.attributes,re=J.getAttributes(),ne=H.defaultAttributeValues;for(const ye in re){const ae=re[ye];if(ae.location>=0){let B=j[ye];if(B===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(B=O.instanceColor)),B!==void 0){const Z=B.normalized,D=B.itemSize,U=t.get(B);if(U===void 0)continue;const C=U.buffer,Q=U.type,W=U.bytesPerElement;if(B.isInterleavedBufferAttribute){const q=B.data,he=q.stride,pe=B.offset;if(q.isInstancedInterleavedBuffer){for(let oe=0;oe<ae.locationSize;oe++)E(ae.location+oe,q.meshPerAttribute);O.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let oe=0;oe<ae.locationSize;oe++)S(ae.location+oe);s.bindBuffer(34962,C);for(let oe=0;oe<ae.locationSize;oe++)I(ae.location+oe,D/ae.locationSize,Q,Z,he*W,(pe+D/ae.locationSize*oe)*W)}else{if(B.isInstancedBufferAttribute){for(let q=0;q<ae.locationSize;q++)E(ae.location+q,B.meshPerAttribute);O.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let q=0;q<ae.locationSize;q++)S(ae.location+q);s.bindBuffer(34962,C);for(let q=0;q<ae.locationSize;q++)I(ae.location+q,D/ae.locationSize,Q,Z,D*W,D/ae.locationSize*q*W)}}else if(ne!==void 0){const Z=ne[ye];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(ae.location,Z);break;case 3:s.vertexAttrib3fv(ae.location,Z);break;case 4:s.vertexAttrib4fv(ae.location,Z);break;default:s.vertexAttrib1fv(ae.location,Z)}}}}P()}function M(){$();for(const O in a){const H=a[O];for(const J in H){const te=H[J];for(const j in te)_(te[j].object),delete te[j];delete H[J]}delete a[O]}}function b(O){if(a[O.id]===void 0)return;const H=a[O.id];for(const J in H){const te=H[J];for(const j in te)_(te[j].object),delete te[j];delete H[J]}delete a[O.id]}function K(O){for(const H in a){const J=a[H];if(J[O.id]===void 0)continue;const te=J[O.id];for(const j in te)_(te[j].object),delete te[j];delete J[O.id]}}function $(){N(),c=!0,l!==h&&(l=h,m(l.object))}function N(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:d,reset:$,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:K,initAttributes:w,enableAttribute:S,disableUnusedAttributes:P}}function Lu(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,c){s.drawArrays(r,l,c),t.update(c,r,1)}function h(l,c,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,c,d),t.update(c,r,d)}this.setMode=o,this.render=a,this.renderInstances=h}function Pu(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const h=r(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);const l=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),v=s.getParameter(34921),p=s.getParameter(36347),u=s.getParameter(36348),A=s.getParameter(36349),w=f>0,S=o||e.has("OES_texture_float"),E=w&&S,P=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:A,vertexTextures:w,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:P}}function Ru(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ln,a=new De,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?c(null):l();else{const A=r?0:n,w=A*4;let S=u.clippingState||null;h.value=S,S=c(_,f,w,m);for(let E=0;E!==w;++E)S[E]=t[E];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(d,f,m,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=h.value,_!==!0||p===null){const u=m+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,S=m;w!==v;++w,S+=4)o.copy(d[w]).applyMatrix4(A,a),o.normal.toArray(p,S),p[S+3]=o.constant}h.value=p,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Du(s){let e=new WeakMap;function t(o,a){return a===gr?o.mapping=Bn:a===_r&&(o.mapping=Gn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===gr||a===_r)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new jo(h.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ma extends ha{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nn=4,bs=[.125,.215,.35,.446,.526,.582],un=20,hr=new ma,ws=new He;let dr=null;const cn=(1+Math.sqrt(5))/2,Un=1/cn,Es=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,cn,Un),new T(0,cn,-Un),new T(Un,0,cn),new T(-Un,0,cn),new T(cn,Un,0),new T(-cn,Un,0)];class Ts{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){dr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ls(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dr),e.scissorTest=!1,Ti(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bn||e.mapping===Gn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:Qn,format:Pt,encoding:gn,depthBuffer:!1},i=As(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=As(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uu(r)),this._blurMaterial=Iu(r,e,t)}return i}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,n,i){const a=new Ct(90,1,t,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(ws),c.toneMapping=qt,c.autoClear=!1;const m=new Er({name:"PMREM.Background",side:ft,depthWrite:!1,depthTest:!1}),_=new Nt(new ri,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(ws),v=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(a.up.set(0,h[u],0),a.lookAt(l[u],0,0)):A===1?(a.up.set(0,0,h[u]),a.lookAt(0,l[u],0)):(a.up.set(0,h[u],0),a.lookAt(0,0,l[u]));const w=this._cubeSize;Ti(i,A*w,u>2?w:0,w,w),c.setRenderTarget(i),v&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bn||e.mapping===Gn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ls()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cs());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const h=this._cubeSize;Ti(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Es[(i-1)%Es.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Nt(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*un-1),v=r/_,p=isFinite(r)?1+Math.floor(c*v):un;p>un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${un}`);const u=[];let A=0;for(let I=0;I<un;++I){const z=I/v,M=Math.exp(-z*z/2);u.push(M),I===0?A+=M:I<p&&(A+=2*M)}for(let I=0;I<u.length;I++)u[I]=u[I]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-n;const S=this._sizeLods[i],E=3*S*(i>w-Nn?i-w+Nn:0),P=4*(this._cubeSize-S);Ti(t,E,P,3*S,2*S),h.setRenderTarget(t),h.render(d,hr)}}function Uu(s){const e=[],t=[],n=[];let i=s;const r=s-Nn+1+bs.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let h=1/a;o>s-Nn?h=bs[o-s+Nn-1]:o===0&&(h=0),n.push(h);const l=1/(a-2),c=-l,d=1+l,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,_=6,v=3,p=2,u=1,A=new Float32Array(v*_*m),w=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let P=0;P<m;P++){const I=P%3*2/3-1,z=P>2?0:-1,M=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];A.set(M,v*_*P),w.set(f,p*_*P);const b=[P,P,P,P,P,P];S.set(b,u*_*P)}const E=new _n;E.setAttribute("position",new Ft(A,v)),E.setAttribute("uv",new Ft(w,p)),E.setAttribute("faceIndex",new Ft(S,u)),e.push(E),i>Nn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function As(s,e,t){const n=new Xt(s,e,t);return n.texture.mapping=Pi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ti(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Iu(s,e,t){const n=new Float32Array(un),i=new T(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Cs(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Ls(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Tr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nu(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const h=a.mapping,l=h===gr||h===_r,c=h===Bn||h===Gn;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ts(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||c&&d&&i(d)){t===null&&(t=new Ts(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let h=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&h++;return h===l}function r(a){const h=a.target;h.removeEventListener("dispose",r);const l=e.get(h);l!==void 0&&(e.delete(h),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Fu(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zu(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function h(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const m=d.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,u=v.length;p<u;p++)e.update(v[p],34962)}}function l(d){const f=[],m=d.index,_=d.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let w=0,S=A.length;w<S;w+=3){const E=A[w+0],P=A[w+1],I=A[w+2];f.push(E,P,P,I,I,E)}}else{const A=_.array;v=_.version;for(let w=0,S=A.length/3-1;w<S;w+=3){const E=w+0,P=w+1,I=w+2;f.push(E,P,P,I,I,E)}}const p=new(na(f)?ca:la)(f,1);p.version=v;const u=r.get(d);u&&e.remove(u),r.set(d,p)}function c(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:h,getWireframeAttribute:c}}function Ou(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,h;function l(f){a=f.type,h=f.bytesPerElement}function c(f,m){s.drawElements(r,m,a,f*h),t.update(m,r,1)}function d(f,m,_){if(_===0)return;let v,p;if(i)v=s,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](r,m,a,f*h,_),t.update(m,r,_)}this.setMode=o,this.setIndex=l,this.render=c,this.renderInstances=d}function Bu(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gu(s,e){return s[0]-e[0]}function ku(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Vu(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function h(l,c,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=_!==void 0?_.length:0;let p=r.get(c);if(p===void 0||p.count!==v){let H=function(){N.dispose(),r.delete(c),c.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const w=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],I=c.morphAttributes.normal||[],z=c.morphAttributes.color||[];let M=0;w===!0&&(M=1),S===!0&&(M=2),E===!0&&(M=3);let b=c.attributes.position.count*M,K=1;b>e.maxTextureSize&&(K=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const $=new Float32Array(b*K*4*v),N=new sa($,b,K,v);N.type=dn,N.needsUpdate=!0;const O=M*4;for(let J=0;J<v;J++){const te=P[J],j=I[J],re=z[J],ne=b*K*4*J;for(let ye=0;ye<te.count;ye++){const ae=ye*O;w===!0&&(o.fromBufferAttribute(te,ye),$[ne+ae+0]=o.x,$[ne+ae+1]=o.y,$[ne+ae+2]=o.z,$[ne+ae+3]=0),S===!0&&(o.fromBufferAttribute(j,ye),$[ne+ae+4]=o.x,$[ne+ae+5]=o.y,$[ne+ae+6]=o.z,$[ne+ae+7]=0),E===!0&&(o.fromBufferAttribute(re,ye),$[ne+ae+8]=o.x,$[ne+ae+9]=o.y,$[ne+ae+10]=o.z,$[ne+ae+11]=re.itemSize===4?o.w:1)}}p={count:v,texture:N,size:new Oe(b,K)},r.set(c,p),c.addEventListener("dispose",H)}let u=0;for(let w=0;w<f.length;w++)u+=f[w];const A=c.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let v=n[c.id];if(v===void 0||v.length!==_){v=[];for(let S=0;S<_;S++)v[S]=[S,0];n[c.id]=v}for(let S=0;S<_;S++){const E=v[S];E[0]=S,E[1]=f[S]}v.sort(ku);for(let S=0;S<8;S++)S<_&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Gu);const p=c.morphAttributes.position,u=c.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const E=a[S],P=E[0],I=E[1];P!==Number.MAX_SAFE_INTEGER&&I?(p&&c.getAttribute("morphTarget"+S)!==p[P]&&c.setAttribute("morphTarget"+S,p[P]),u&&c.getAttribute("morphNormal"+S)!==u[P]&&c.setAttribute("morphNormal"+S,u[P]),i[S]=I,A+=I):(p&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),u&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),i[S]=0)}const w=c.morphTargetsRelative?1:1-A;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:h}}function Hu(s,e,t,n){let i=new WeakMap;function r(h){const l=n.render.frame,c=h.geometry,d=e.get(h,c);return i.get(d)!==l&&(e.update(d),i.set(d,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),d}function o(){i=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const ga=new xt,_a=new sa,va=new Ro,xa=new da,Ps=[],Rs=[],Ds=new Float32Array(16),Us=new Float32Array(9),Is=new Float32Array(4);function Wn(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ps[i];if(r===void 0&&(r=new Float32Array(i),Ps[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ke(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Je(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ii(s,e){let t=Rs[e];t===void 0&&(t=new Int32Array(e),Rs[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2fv(this.addr,e),Je(t,e)}}function Xu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ke(t,e))return;s.uniform3fv(this.addr,e),Je(t,e)}}function Yu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4fv(this.addr,e),Je(t,e)}}function ju(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Je(t,e)}else{if(Ke(t,n))return;Is.set(n),s.uniformMatrix2fv(this.addr,!1,Is),Je(t,n)}}function $u(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Je(t,e)}else{if(Ke(t,n))return;Us.set(n),s.uniformMatrix3fv(this.addr,!1,Us),Je(t,n)}}function Zu(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Je(t,e)}else{if(Ke(t,n))return;Ds.set(n),s.uniformMatrix4fv(this.addr,!1,Ds),Je(t,n)}}function Ku(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ju(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2iv(this.addr,e),Je(t,e)}}function Qu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;s.uniform3iv(this.addr,e),Je(t,e)}}function eh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4iv(this.addr,e),Je(t,e)}}function th(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2uiv(this.addr,e),Je(t,e)}}function ih(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;s.uniform3uiv(this.addr,e),Je(t,e)}}function rh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4uiv(this.addr,e),Je(t,e)}}function sh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ga,i)}function ah(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||va,i)}function oh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xa,i)}function lh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_a,i)}function ch(s){switch(s){case 5126:return Wu;case 35664:return qu;case 35665:return Xu;case 35666:return Yu;case 35674:return ju;case 35675:return $u;case 35676:return Zu;case 5124:case 35670:return Ku;case 35667:case 35671:return Ju;case 35668:case 35672:return Qu;case 35669:case 35673:return eh;case 5125:return th;case 36294:return nh;case 36295:return ih;case 36296:return rh;case 35678:case 36198:case 36298:case 36306:case 35682:return sh;case 35679:case 36299:case 36307:return ah;case 35680:case 36300:case 36308:case 36293:return oh;case 36289:case 36303:case 36311:case 36292:return lh}}function uh(s,e){s.uniform1fv(this.addr,e)}function hh(s,e){const t=Wn(e,this.size,2);s.uniform2fv(this.addr,t)}function dh(s,e){const t=Wn(e,this.size,3);s.uniform3fv(this.addr,t)}function fh(s,e){const t=Wn(e,this.size,4);s.uniform4fv(this.addr,t)}function ph(s,e){const t=Wn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mh(s,e){const t=Wn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gh(s,e){const t=Wn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _h(s,e){s.uniform1iv(this.addr,e)}function vh(s,e){s.uniform2iv(this.addr,e)}function xh(s,e){s.uniform3iv(this.addr,e)}function Mh(s,e){s.uniform4iv(this.addr,e)}function Sh(s,e){s.uniform1uiv(this.addr,e)}function yh(s,e){s.uniform2uiv(this.addr,e)}function bh(s,e){s.uniform3uiv(this.addr,e)}function wh(s,e){s.uniform4uiv(this.addr,e)}function Eh(s,e,t){const n=this.cache,i=e.length,r=Ii(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ga,r[o])}function Th(s,e,t){const n=this.cache,i=e.length,r=Ii(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||va,r[o])}function Ah(s,e,t){const n=this.cache,i=e.length,r=Ii(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xa,r[o])}function Ch(s,e,t){const n=this.cache,i=e.length,r=Ii(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_a,r[o])}function Lh(s){switch(s){case 5126:return uh;case 35664:return hh;case 35665:return dh;case 35666:return fh;case 35674:return ph;case 35675:return mh;case 35676:return gh;case 5124:case 35670:return _h;case 35667:case 35671:return vh;case 35668:case 35672:return xh;case 35669:case 35673:return Mh;case 5125:return Sh;case 36294:return yh;case 36295:return bh;case 36296:return wh;case 35678:case 36198:case 36298:case 36306:case 35682:return Eh;case 35679:case 36299:case 36307:return Th;case 35680:case 36300:case 36308:case 36293:return Ah;case 36289:case 36303:case 36311:case 36292:return Ch}}class Ph{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ch(t.type)}}class Rh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lh(t.type)}}class Dh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function Ns(s,e){s.seq.push(e),s.map[e.id]=e}function Uh(s,e,t){const n=s.name,i=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),o=fr.lastIndex;let a=r[1];const h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===i){Ns(t,l===void 0?new Ph(a,s,e):new Rh(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Dh(a),Ns(t,d)),t=d}}}class Ci{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Uh(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Fs(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Ih=0;function Nh(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Fh(s){switch(s){case gn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function zs(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Nh(s.getShaderSource(e),o)}else return i}function zh(s,e){const t=Fh(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Oh(s,e){let t;switch(e){case $a:t="Linear";break;case Za:t="Reinhard";break;case Ka:t="OptimizedCineon";break;case Ja:t="ACESFilmic";break;case Qa:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bh(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Kn).join(`
`)}function Gh(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kh(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Kn(s){return s!==""}function Os(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bs(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vh=/^[ \t]*#include +<([\w\d./]+)>/gm;function yr(s){return s.replace(Vh,Hh)}function Hh(s,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yr(t)}const Wh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gs(s){return s.replace(Wh,qh)}function qh(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ks(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xh(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$s?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Aa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yh(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bn:case Gn:e="ENVMAP_TYPE_CUBE";break;case Pi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jh(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gn:e="ENVMAP_MODE_REFRACTION";break}return e}function $h(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Js:e="ENVMAP_BLENDING_MULTIPLY";break;case Ya:e="ENVMAP_BLENDING_MIX";break;case ja:e="ENVMAP_BLENDING_ADD";break}return e}function Zh(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kh(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const h=Xh(t),l=Yh(t),c=jh(t),d=$h(t),f=Zh(t),m=t.isWebGL2?"":Bh(t),_=Gh(r),v=i.createProgram();let p,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(Kn).join(`
`),p.length>0&&(p+=`
`),u=[m,_].filter(Kn).join(`
`),u.length>0&&(u+=`
`)):(p=[ks(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kn).join(`
`),u=[m,ks(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?Ce.tonemapping_pars_fragment:"",t.toneMapping!==qt?Oh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,zh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kn).join(`
`)),o=yr(o),o=Os(o,t),o=Bs(o,t),a=yr(a),a=Os(a,t),a=Bs(a,t),o=Gs(o),a=Gs(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===os?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===os?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=A+p+o,S=A+u+a,E=Fs(i,35633,w),P=Fs(i,35632,S);if(i.attachShader(v,E),i.attachShader(v,P),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(v).trim(),b=i.getShaderInfoLog(E).trim(),K=i.getShaderInfoLog(P).trim();let $=!0,N=!0;if(i.getProgramParameter(v,35714)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,E,P);else{const O=zs(i,E,"vertex"),H=zs(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+M+`
`+O+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||K==="")&&(N=!1);N&&(this.diagnostics={runnable:$,programLog:M,vertexShader:{log:b,prefix:p},fragmentShader:{log:K,prefix:u}})}i.deleteShader(E),i.deleteShader(P);let I;this.getUniforms=function(){return I===void 0&&(I=new Ci(i,v)),I};let z;return this.getAttributes=function(){return z===void 0&&(z=kh(i,v)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Ih++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=P,this}let Jh=0;class Qh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ed(e),t.set(e,n)),n}}class ed{constructor(e){this.id=Jh++,this.code=e,this.usedTimes=0}}function td(s,e,t,n,i,r,o){const a=new aa,h=new Qh,l=[],c=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===1?"uv2":"uv"}function p(M,b,K,$,N){const O=$.fog,H=N.geometry,J=M.isMeshStandardMaterial?$.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),j=te&&te.mapping===Pi?te.image.height:null,re=_[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ye=ne!==void 0?ne.length:0;let ae=0;H.morphAttributes.position!==void 0&&(ae=1),H.morphAttributes.normal!==void 0&&(ae=2),H.morphAttributes.color!==void 0&&(ae=3);let B,Z,D,U;if(re){const ue=It[re];B=ue.vertexShader,Z=ue.fragmentShader}else B=M.vertexShader,Z=M.fragmentShader,h.update(M),D=h.getVertexShaderID(M),U=h.getFragmentShaderID(M);const C=s.getRenderTarget(),Q=N.isInstancedMesh===!0,W=!!M.map,q=!!M.matcap,he=!!te,pe=!!M.aoMap,oe=!!M.lightMap,me=!!M.bumpMap,Te=!!M.normalMap,Be=!!M.displacementMap,We=!!M.emissiveMap,Ve=!!M.metalnessMap,Ne=!!M.roughnessMap,Xe=M.clearcoat>0,ut=M.iridescence>0,y=M.sheen>0,g=M.transmission>0,G=Xe&&!!M.clearcoatMap,ie=Xe&&!!M.clearcoatNormalMap,se=Xe&&!!M.clearcoatRoughnessMap,ce=ut&&!!M.iridescenceMap,be=ut&&!!M.iridescenceThicknessMap,fe=y&&!!M.sheenColorMap,X=y&&!!M.sheenRoughnessMap,ge=!!M.specularMap,xe=!!M.specularColorMap,Se=!!M.specularIntensityMap,de=g&&!!M.transmissionMap,_e=g&&!!M.thicknessMap,Ue=!!M.gradientMap,Fe=!!M.alphaMap,Ye=M.alphaTest>0,L=!!M.extensions,V=!!H.attributes.uv2;return{isWebGL2:c,shaderID:re,shaderName:M.type,vertexShader:B,fragmentShader:Z,defines:M.defines,customVertexShaderID:D,customFragmentShaderID:U,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Q,instancingColor:Q&&N.instanceColor!==null,supportsVertexTextures:f,outputEncoding:C===null?s.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:gn,map:W,matcap:q,envMap:he,envMapMode:he&&te.mapping,envMapCubeUVHeight:j,aoMap:pe,lightMap:oe,bumpMap:me,normalMap:Te,displacementMap:f&&Be,emissiveMap:We,normalMapObjectSpace:Te&&M.normalMapType===Mo,normalMapTangentSpace:Te&&M.normalMapType===xo,decodeVideoTexture:W&&M.map.isVideoTexture===!0&&M.map.encoding===ke,metalnessMap:Ve,roughnessMap:Ne,clearcoat:Xe,clearcoatMap:G,clearcoatNormalMap:ie,clearcoatRoughnessMap:se,iridescence:ut,iridescenceMap:ce,iridescenceThicknessMap:be,sheen:y,sheenColorMap:fe,sheenRoughnessMap:X,specularMap:ge,specularColorMap:xe,specularIntensityMap:Se,transmission:g,transmissionMap:de,thicknessMap:_e,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===Fn,alphaMap:Fe,alphaTest:Ye,combine:M.combine,mapUv:W&&v(M.map.channel),aoMapUv:pe&&v(M.aoMap.channel),lightMapUv:oe&&v(M.lightMap.channel),bumpMapUv:me&&v(M.bumpMap.channel),normalMapUv:Te&&v(M.normalMap.channel),displacementMapUv:Be&&v(M.displacementMap.channel),emissiveMapUv:We&&v(M.emissiveMap.channel),metalnessMapUv:Ve&&v(M.metalnessMap.channel),roughnessMapUv:Ne&&v(M.roughnessMap.channel),clearcoatMapUv:G&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:be&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:X&&v(M.sheenRoughnessMap.channel),specularMapUv:ge&&v(M.specularMap.channel),specularColorMapUv:xe&&v(M.specularColorMap.channel),specularIntensityMapUv:Se&&v(M.specularIntensityMap.channel),transmissionMapUv:de&&v(M.transmissionMap.channel),thicknessMapUv:_e&&v(M.thicknessMap.channel),alphaMapUv:Fe&&v(M.alphaMap.channel),vertexTangents:Te&&!!H.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUvs2:V,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(W||Fe),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ae,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:qt,useLegacyLights:s.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wt,flipSided:M.side===ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:L&&M.extensions.derivatives===!0,extensionFragDepth:L&&M.extensions.fragDepth===!0,extensionDrawBuffers:L&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)b.push(K),b.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(A(b,M),w(b,M),b.push(s.outputEncoding)),b.push(M.customProgramCacheKey),b.join()}function A(M,b){M.push(b.precision),M.push(b.outputEncoding),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function w(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUvs2&&a.enable(13),b.vertexTangents&&a.enable(14),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.decodeVideoTexture&&a.enable(17),b.opaque&&a.enable(18),b.pointsUvs&&a.enable(19),M.push(a.mask)}function S(M){const b=_[M.type];let K;if(b){const $=It[b];K=Wo.clone($.uniforms)}else K=M.uniforms;return K}function E(M,b){let K;for(let $=0,N=l.length;$<N;$++){const O=l[$];if(O.cacheKey===b){K=O,++K.usedTimes;break}}return K===void 0&&(K=new Kh(s,b,M,r),l.push(K)),K}function P(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function I(M){h.remove(M)}function z(){h.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:E,releaseProgram:P,releaseShaderCache:I,programs:l,dispose:z}}function nd(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function id(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vs(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hs(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,_,v,p){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=p),e++,u}function a(d,f,m,_,v,p){const u=o(d,f,m,_,v,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function h(d,f,m,_,v,p){const u=o(d,f,m,_,v,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||id),n.length>1&&n.sort(f||Vs),i.length>1&&i.sort(f||Vs)}function c(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:h,finish:c,sort:l}}function rd(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Hs,s.set(n,[o])):i>=r.length?(o=new Hs,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new He};break;case"SpotLight":t={position:new T,direction:new T,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function ad(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let od=0;function ld(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cd(s,e){const t=new sd,n=ad(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new T);const r=new T,o=new it,a=new it;function h(c,d){let f=0,m=0,_=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let v=0,p=0,u=0,A=0,w=0,S=0,E=0,P=0,I=0,z=0;c.sort(ld);const M=d===!0?Math.PI:1;for(let K=0,$=c.length;K<$;K++){const N=c[K],O=N.color,H=N.intensity,J=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=O.r*H*M,m+=O.g*H*M,_+=O.b*H*M;else if(N.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],H);else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const re=N.shadow,ne=n.get(N);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,i.directionalShadow[v]=ne,i.directionalShadowMap[v]=te,i.directionalShadowMatrix[v]=N.shadow.matrix,S++}i.directional[v]=j,v++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(O).multiplyScalar(H*M),j.distance=J,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[u]=j;const re=N.shadow;if(N.map&&(i.spotLightMap[I]=N.map,I++,re.updateMatrices(N),N.castShadow&&z++),i.spotLightMatrix[u]=re.matrix,N.castShadow){const ne=n.get(N);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,i.spotShadow[u]=ne,i.spotShadowMap[u]=te,P++}u++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(O).multiplyScalar(H),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[A]=j,A++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*M),j.distance=N.distance,j.decay=N.decay,N.castShadow){const re=N.shadow,ne=n.get(N);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,ne.shadowCameraNear=re.camera.near,ne.shadowCameraFar=re.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=te,i.pointShadowMatrix[p]=N.shadow.matrix,E++}i.point[p]=j,p++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(H*M),j.groundColor.copy(N.groundColor).multiplyScalar(H*M),i.hemi[w]=j,w++}}A>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const b=i.hash;(b.directionalLength!==v||b.pointLength!==p||b.spotLength!==u||b.rectAreaLength!==A||b.hemiLength!==w||b.numDirectionalShadows!==S||b.numPointShadows!==E||b.numSpotShadows!==P||b.numSpotMaps!==I)&&(i.directional.length=v,i.spot.length=u,i.rectArea.length=A,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=P+I-z,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=z,b.directionalLength=v,b.pointLength=p,b.spotLength=u,b.rectAreaLength=A,b.hemiLength=w,b.numDirectionalShadows=S,b.numPointShadows=E,b.numSpotShadows=P,b.numSpotMaps=I,i.version=od++)}function l(c,d){let f=0,m=0,_=0,v=0,p=0;const u=d.matrixWorldInverse;for(let A=0,w=c.length;A<w;A++){const S=c[A];if(S.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),f++}else if(S.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:h,setupView:l,state:i}}function Ws(s,e){const t=new cd(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function h(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:h,setupLightsView:l,pushLight:o,pushShadow:a}}function ud(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let h;return a===void 0?(h=new Ws(s,e),t.set(r,[h])):o>=a.length?(h=new Ws(s,e),a.push(h)):h=a[o],h}function i(){t=new WeakMap}return{get:n,dispose:i}}class hd extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_o,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dd extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function md(s,e,t){let n=new fa;const i=new Oe,r=new Oe,o=new nt,a=new hd({depthPacking:vo}),h=new dd,l={},c=t.maxTextureSize,d={[Qt]:ft,[ft]:Qt,[Wt]:Wt},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:fd,fragmentShader:pd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s,this.render=function(S,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const I=s.getRenderTarget(),z=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),b=s.state;b.setBlending(Jt),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let K=0,$=S.length;K<$;K++){const N=S[K],O=N.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const H=O.getFrameExtents();if(i.multiply(H),r.copy(O.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/H.x),i.x=r.x*H.x,O.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/H.y),i.y=r.y*H.y,O.mapSize.y=r.y)),O.map===null){const te=this.type!==Zn?{minFilter:tt,magFilter:tt}:{};O.map=new Xt(i.x,i.y,te),O.map.texture.name=N.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const J=O.getViewportCount();for(let te=0;te<J;te++){const j=O.getViewport(te);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),b.viewport(o),O.updateMatrices(N,te),n=O.getFrustum(),w(E,P,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===Zn&&u(O,P),O.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(I,z,M)};function u(S,E){const P=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Xt(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,P,f,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,P,m,v,null)}function A(S,E,P,I){let z=null;const M=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(M!==void 0)z=M;else if(z=P.isPointLight===!0?h:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const b=z.uuid,K=E.uuid;let $=l[b];$===void 0&&($={},l[b]=$);let N=$[K];N===void 0&&(N=z.clone(),$[K]=N),z=N}if(z.visible=E.visible,z.wireframe=E.wireframe,I===Zn?z.side=E.shadowSide!==null?E.shadowSide:E.side:z.side=E.shadowSide!==null?E.shadowSide:d[E.side],z.alphaMap=E.alphaMap,z.alphaTest=E.alphaTest,z.map=E.map,z.clipShadows=E.clipShadows,z.clippingPlanes=E.clippingPlanes,z.clipIntersection=E.clipIntersection,z.displacementMap=E.displacementMap,z.displacementScale=E.displacementScale,z.displacementBias=E.displacementBias,z.wireframeLinewidth=E.wireframeLinewidth,z.linewidth=E.linewidth,P.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const b=s.properties.get(z);b.light=P}return z}function w(S,E,P,I,z){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&z===Zn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const K=e.update(S),$=S.material;if(Array.isArray($)){const N=K.groups;for(let O=0,H=N.length;O<H;O++){const J=N[O],te=$[J.materialIndex];if(te&&te.visible){const j=A(S,te,I,z);s.renderBufferDirect(P,null,K,j,S,J)}}}else if($.visible){const N=A(S,$,I,z);s.renderBufferDirect(P,null,K,N,S,null)}}const b=S.children;for(let K=0,$=b.length;K<$;K++)w(b[K],E,P,I,z)}}function gd(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const V=new nt;let ee=null;const ue=new nt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!L&&(s.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Ge,qe,rt,Yt){Yt===!0&&(ve*=rt,Ge*=rt,qe*=rt),V.set(ve,Ge,qe,rt),ue.equals(V)===!1&&(s.clearColor(ve,Ge,qe,rt),ue.copy(V))},reset:function(){L=!1,ee=null,ue.set(-1,0,0,0)}}}function r(){let L=!1,V=null,ee=null,ue=null;return{setTest:function(ve){ve?C(2929):Q(2929)},setMask:function(ve){V!==ve&&!L&&(s.depthMask(ve),V=ve)},setFunc:function(ve){if(ee!==ve){switch(ve){case Ga:s.depthFunc(512);break;case ka:s.depthFunc(519);break;case Va:s.depthFunc(513);break;case mr:s.depthFunc(515);break;case Ha:s.depthFunc(514);break;case Wa:s.depthFunc(518);break;case qa:s.depthFunc(516);break;case Xa:s.depthFunc(517);break;default:s.depthFunc(515)}ee=ve}},setLocked:function(ve){L=ve},setClear:function(ve){ue!==ve&&(s.clearDepth(ve),ue=ve)},reset:function(){L=!1,V=null,ee=null,ue=null}}}function o(){let L=!1,V=null,ee=null,ue=null,ve=null,Ge=null,qe=null,rt=null,Yt=null;return{setTest:function(je){L||(je?C(2960):Q(2960))},setMask:function(je){V!==je&&!L&&(s.stencilMask(je),V=je)},setFunc:function(je,St,Rt){(ee!==je||ue!==St||ve!==Rt)&&(s.stencilFunc(je,St,Rt),ee=je,ue=St,ve=Rt)},setOp:function(je,St,Rt){(Ge!==je||qe!==St||rt!==Rt)&&(s.stencilOp(je,St,Rt),Ge=je,qe=St,rt=Rt)},setLocked:function(je){L=je},setClear:function(je){Yt!==je&&(s.clearStencil(je),Yt=je)},reset:function(){L=!1,V=null,ee=null,ue=null,ve=null,Ge=null,qe=null,rt=null,Yt=null}}}const a=new i,h=new r,l=new o,c=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,u=!1,A=null,w=null,S=null,E=null,P=null,I=null,z=null,M=!1,b=null,K=null,$=null,N=null,O=null;const H=s.getParameter(35661);let J=!1,te=0;const j=s.getParameter(7938);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=te>=2);let re=null,ne={};const ye=s.getParameter(3088),ae=s.getParameter(2978),B=new nt().fromArray(ye),Z=new nt().fromArray(ae);function D(L,V,ee){const ue=new Uint8Array(4),ve=s.createTexture();s.bindTexture(L,ve),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let Ge=0;Ge<ee;Ge++)s.texImage2D(V+Ge,0,6408,1,1,0,6408,5121,ue);return ve}const U={};U[3553]=D(3553,3553,1),U[34067]=D(34067,34069,6),a.setClear(0,0,0,1),h.setClear(1),l.setClear(0),C(2929),h.setFunc(mr),Be(!1),We(Pr),C(2884),me(Jt);function C(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function Q(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function W(L,V){return m[L]!==V?(s.bindFramebuffer(L,V),m[L]=V,n&&(L===36009&&(m[36160]=V),L===36160&&(m[36009]=V)),!0):!1}function q(L,V){let ee=v,ue=!1;if(L)if(ee=_.get(V),ee===void 0&&(ee=[],_.set(V,ee)),L.isWebGLMultipleRenderTargets){const ve=L.texture;if(ee.length!==ve.length||ee[0]!==36064){for(let Ge=0,qe=ve.length;Ge<qe;Ge++)ee[Ge]=36064+Ge;ee.length=ve.length,ue=!0}}else ee[0]!==36064&&(ee[0]=36064,ue=!0);else ee[0]!==1029&&(ee[0]=1029,ue=!0);ue&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function he(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const pe={[In]:32774,[La]:32778,[Pa]:32779};if(n)pe[Ir]=32775,pe[Nr]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(pe[Ir]=L.MIN_EXT,pe[Nr]=L.MAX_EXT)}const oe={[Ra]:0,[Da]:1,[Ua]:768,[Zs]:770,[Ba]:776,[za]:774,[Na]:772,[Ia]:769,[Ks]:771,[Oa]:775,[Fa]:773};function me(L,V,ee,ue,ve,Ge,qe,rt){if(L===Jt){u===!0&&(Q(3042),u=!1);return}if(u===!1&&(C(3042),u=!0),L!==Ca){if(L!==A||rt!==M){if((w!==In||P!==In)&&(s.blendEquation(32774),w=In,P=In),rt)switch(L){case Fn:s.blendFuncSeparate(1,771,1,771);break;case Rr:s.blendFunc(1,1);break;case Dr:s.blendFuncSeparate(0,769,0,1);break;case Ur:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fn:s.blendFuncSeparate(770,771,1,771);break;case Rr:s.blendFunc(770,1);break;case Dr:s.blendFuncSeparate(0,769,0,1);break;case Ur:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,I=null,z=null,A=L,M=rt}return}ve=ve||V,Ge=Ge||ee,qe=qe||ue,(V!==w||ve!==P)&&(s.blendEquationSeparate(pe[V],pe[ve]),w=V,P=ve),(ee!==S||ue!==E||Ge!==I||qe!==z)&&(s.blendFuncSeparate(oe[ee],oe[ue],oe[Ge],oe[qe]),S=ee,E=ue,I=Ge,z=qe),A=L,M=!1}function Te(L,V){L.side===Wt?Q(2884):C(2884);let ee=L.side===ft;V&&(ee=!ee),Be(ee),L.blending===Fn&&L.transparent===!1?me(Jt):me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),h.setFunc(L.depthFunc),h.setTest(L.depthTest),h.setMask(L.depthWrite),a.setMask(L.colorWrite);const ue=L.stencilWrite;l.setTest(ue),ue&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?C(32926):Q(32926)}function Be(L){b!==L&&(L?s.frontFace(2304):s.frontFace(2305),b=L)}function We(L){L!==Ea?(C(2884),L!==K&&(L===Pr?s.cullFace(1029):L===Ta?s.cullFace(1028):s.cullFace(1032))):Q(2884),K=L}function Ve(L){L!==$&&(J&&s.lineWidth(L),$=L)}function Ne(L,V,ee){L?(C(32823),(N!==V||O!==ee)&&(s.polygonOffset(V,ee),N=V,O=ee)):Q(32823)}function Xe(L){L?C(3089):Q(3089)}function ut(L){L===void 0&&(L=33984+H-1),re!==L&&(s.activeTexture(L),re=L)}function y(L,V,ee){ee===void 0&&(re===null?ee=33984+H-1:ee=re);let ue=ne[ee];ue===void 0&&(ue={type:void 0,texture:void 0},ne[ee]=ue),(ue.type!==L||ue.texture!==V)&&(re!==ee&&(s.activeTexture(ee),re=ee),s.bindTexture(L,V||U[L]),ue.type=L,ue.texture=V)}function g(){const L=ne[re];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){B.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),B.copy(L))}function _e(L){Z.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function Ue(L,V){let ee=d.get(V);ee===void 0&&(ee=new WeakMap,d.set(V,ee));let ue=ee.get(L);ue===void 0&&(ue=s.getUniformBlockIndex(V,L.name),ee.set(L,ue))}function Fe(L,V){const ue=d.get(V).get(L);c.get(V)!==ue&&(s.uniformBlockBinding(V,ue,L.__bindingPointIndex),c.set(V,ue))}function Ye(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},re=null,ne={},m={},_=new WeakMap,v=[],p=null,u=!1,A=null,w=null,S=null,E=null,P=null,I=null,z=null,M=!1,b=null,K=null,$=null,N=null,O=null,B.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),a.reset(),h.reset(),l.reset()}return{buffers:{color:a,depth:h,stencil:l},enable:C,disable:Q,bindFramebuffer:W,drawBuffers:q,useProgram:he,setBlending:me,setMaterial:Te,setFlipSided:Be,setCullFace:We,setLineWidth:Ve,setPolygonOffset:Ne,setScissorTest:Xe,activeTexture:ut,bindTexture:y,unbindTexture:g,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:xe,texImage3D:Se,updateUBOMapping:Ue,uniformBlockBinding:Fe,texStorage2D:X,texStorage3D:ge,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:be,compressedTexSubImage3D:fe,scissor:de,viewport:_e,reset:Ye}}function _d(s,e,t,n,i,r,o){const a=i.isWebGL2,h=i.maxTextures,l=i.maxCubemapSize,c=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(y,g){return u?new OffscreenCanvas(y,g):Li("canvas")}function w(y,g,G,ie){let se=1;if((y.width>ie||y.height>ie)&&(se=ie/Math.max(y.width,y.height)),se<1||g===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ce=g?bo:Math.floor,be=ce(se*y.width),fe=ce(se*y.height);v===void 0&&(v=A(be,fe));const X=G?A(be,fe):v;return X.width=be,X.height=fe,X.getContext("2d").drawImage(y,0,0,be,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+be+"x"+fe+")."),X}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function S(y){return ls(y.width)&&ls(y.height)}function E(y){return a?!1:y.wrapS!==Lt||y.wrapT!==Lt||y.minFilter!==tt&&y.minFilter!==ht}function P(y,g){return y.generateMipmaps&&g&&y.minFilter!==tt&&y.minFilter!==ht}function I(y){s.generateMipmap(y)}function z(y,g,G,ie,se=!1){if(a===!1)return g;if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce=g;return g===6403&&(G===5126&&(ce=33326),G===5131&&(ce=33325),G===5121&&(ce=33321)),g===33319&&(G===5126&&(ce=33328),G===5131&&(ce=33327),G===5121&&(ce=33323)),g===6408&&(G===5126&&(ce=34836),G===5131&&(ce=34842),G===5121&&(ce=ie===ke&&se===!1?35907:32856),G===32819&&(ce=32854),G===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function M(y,g,G){return P(y,G)===!0||y.isFramebufferTexture&&y.minFilter!==tt&&y.minFilter!==ht?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function b(y){return y===tt||y===Fr||y===Bi?9728:9729}function K(y){const g=y.target;g.removeEventListener("dispose",K),N(g),g.isVideoTexture&&_.delete(g)}function $(y){const g=y.target;g.removeEventListener("dispose",$),H(g)}function N(y){const g=n.get(y);if(g.__webglInit===void 0)return;const G=y.source,ie=p.get(G);if(ie){const se=ie[g.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(y),Object.keys(ie).length===0&&p.delete(G)}n.remove(y)}function O(y){const g=n.get(y);s.deleteTexture(g.__webglTexture);const G=y.source,ie=p.get(G);delete ie[g.__cacheKey],o.memory.textures--}function H(y){const g=y.texture,G=n.get(y),ie=n.get(g);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(G.__webglFramebuffer[se]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let se=0;se<G.__webglColorRenderbuffer.length;se++)G.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[se]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let se=0,ce=g.length;se<ce;se++){const be=n.get(g[se]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(g[se])}n.remove(g),n.remove(y)}let J=0;function te(){J=0}function j(){const y=J;return y>=h&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+h),J+=1,y}function re(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.encoding),g.join()}function ne(y,g){const G=n.get(y);if(y.isVideoTexture&&Xe(y),y.isRenderTargetTexture===!1&&y.version>0&&G.__version!==y.version){const ie=y.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,y,g);return}}t.bindTexture(3553,G.__webglTexture,33984+g)}function ye(y,g){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Q(G,y,g);return}t.bindTexture(35866,G.__webglTexture,33984+g)}function ae(y,g){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Q(G,y,g);return}t.bindTexture(32879,G.__webglTexture,33984+g)}function B(y,g){const G=n.get(y);if(y.version>0&&G.__version!==y.version){W(G,y,g);return}t.bindTexture(34067,G.__webglTexture,33984+g)}const Z={[vr]:10497,[Lt]:33071,[xr]:33648},D={[tt]:9728,[Fr]:9984,[Bi]:9986,[ht]:9729,[eo]:9985,[Jn]:9987};function U(y,g,G){if(G?(s.texParameteri(y,10242,Z[g.wrapS]),s.texParameteri(y,10243,Z[g.wrapT]),(y===32879||y===35866)&&s.texParameteri(y,32882,Z[g.wrapR]),s.texParameteri(y,10240,D[g.magFilter]),s.texParameteri(y,10241,D[g.minFilter])):(s.texParameteri(y,10242,33071),s.texParameteri(y,10243,33071),(y===32879||y===35866)&&s.texParameteri(y,32882,33071),(g.wrapS!==Lt||g.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(y,10240,b(g.magFilter)),s.texParameteri(y,10241,b(g.minFilter)),g.minFilter!==tt&&g.minFilter!==ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===tt||g.minFilter!==Bi&&g.minFilter!==Jn||g.type===dn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===Qn&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(s.texParameterf(y,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function C(y,g){let G=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",K));const ie=g.source;let se=p.get(ie);se===void 0&&(se={},p.set(ie,se));const ce=re(g);if(ce!==y.__cacheKey){se[ce]===void 0&&(se[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[ce].usedTimes++;const be=se[y.__cacheKey];be!==void 0&&(se[y.__cacheKey].usedTimes--,be.usedTimes===0&&O(g)),y.__cacheKey=ce,y.__webglTexture=se[ce].texture}return G}function Q(y,g,G){let ie=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ie=35866),g.isData3DTexture&&(ie=32879);const se=C(y,g),ce=g.source;t.bindTexture(ie,y.__webglTexture,33984+G);const be=n.get(ce);if(ce.version!==be.__version||se===!0){t.activeTexture(33984+G),s.pixelStorei(37440,g.flipY),s.pixelStorei(37441,g.premultiplyAlpha),s.pixelStorei(3317,g.unpackAlignment),s.pixelStorei(37443,0);const fe=E(g)&&S(g.image)===!1;let X=w(g.image,fe,!1,c);X=ut(g,X);const ge=S(X)||a,xe=r.convert(g.format,g.encoding);let Se=r.convert(g.type),de=z(g.internalFormat,xe,Se,g.encoding,g.isVideoTexture);U(ie,g,ge);let _e;const Ue=g.mipmaps,Fe=a&&g.isVideoTexture!==!0,Ye=be.__version===void 0||se===!0,L=M(g,X,ge);if(g.isDepthTexture)de=6402,a?g.type===dn?de=36012:g.type===hn?de=33190:g.type===zn?de=35056:de=33189:g.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===fn&&de===6402&&g.type!==ea&&g.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=hn,Se=r.convert(g.type)),g.format===kn&&de===6402&&(de=34041,g.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=zn,Se=r.convert(g.type))),Ye&&(Fe?t.texStorage2D(3553,1,de,X.width,X.height):t.texImage2D(3553,0,de,X.width,X.height,0,xe,Se,null));else if(g.isDataTexture)if(Ue.length>0&&ge){Fe&&Ye&&t.texStorage2D(3553,L,de,Ue[0].width,Ue[0].height);for(let V=0,ee=Ue.length;V<ee;V++)_e=Ue[V],Fe?t.texSubImage2D(3553,V,0,0,_e.width,_e.height,xe,Se,_e.data):t.texImage2D(3553,V,de,_e.width,_e.height,0,xe,Se,_e.data);g.generateMipmaps=!1}else Fe?(Ye&&t.texStorage2D(3553,L,de,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,xe,Se,X.data)):t.texImage2D(3553,0,de,X.width,X.height,0,xe,Se,X.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&Ye&&t.texStorage3D(35866,L,de,Ue[0].width,Ue[0].height,X.depth);for(let V=0,ee=Ue.length;V<ee;V++)_e=Ue[V],g.format!==Pt?xe!==null?Fe?t.compressedTexSubImage3D(35866,V,0,0,0,_e.width,_e.height,X.depth,xe,_e.data,0,0):t.compressedTexImage3D(35866,V,de,_e.width,_e.height,X.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(35866,V,0,0,0,_e.width,_e.height,X.depth,xe,Se,_e.data):t.texImage3D(35866,V,de,_e.width,_e.height,X.depth,0,xe,Se,_e.data)}else{Fe&&Ye&&t.texStorage2D(3553,L,de,Ue[0].width,Ue[0].height);for(let V=0,ee=Ue.length;V<ee;V++)_e=Ue[V],g.format!==Pt?xe!==null?Fe?t.compressedTexSubImage2D(3553,V,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(3553,V,de,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,V,0,0,_e.width,_e.height,xe,Se,_e.data):t.texImage2D(3553,V,de,_e.width,_e.height,0,xe,Se,_e.data)}else if(g.isDataArrayTexture)Fe?(Ye&&t.texStorage3D(35866,L,de,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,xe,Se,X.data)):t.texImage3D(35866,0,de,X.width,X.height,X.depth,0,xe,Se,X.data);else if(g.isData3DTexture)Fe?(Ye&&t.texStorage3D(32879,L,de,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,xe,Se,X.data)):t.texImage3D(32879,0,de,X.width,X.height,X.depth,0,xe,Se,X.data);else if(g.isFramebufferTexture){if(Ye)if(Fe)t.texStorage2D(3553,L,de,X.width,X.height);else{let V=X.width,ee=X.height;for(let ue=0;ue<L;ue++)t.texImage2D(3553,ue,de,V,ee,0,xe,Se,null),V>>=1,ee>>=1}}else if(Ue.length>0&&ge){Fe&&Ye&&t.texStorage2D(3553,L,de,Ue[0].width,Ue[0].height);for(let V=0,ee=Ue.length;V<ee;V++)_e=Ue[V],Fe?t.texSubImage2D(3553,V,0,0,xe,Se,_e):t.texImage2D(3553,V,de,xe,Se,_e);g.generateMipmaps=!1}else Fe?(Ye&&t.texStorage2D(3553,L,de,X.width,X.height),t.texSubImage2D(3553,0,0,0,xe,Se,X)):t.texImage2D(3553,0,de,xe,Se,X);P(g,ge)&&I(ie),be.__version=ce.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function W(y,g,G){if(g.image.length!==6)return;const ie=C(y,g),se=g.source;t.bindTexture(34067,y.__webglTexture,33984+G);const ce=n.get(se);if(se.version!==ce.__version||ie===!0){t.activeTexture(33984+G),s.pixelStorei(37440,g.flipY),s.pixelStorei(37441,g.premultiplyAlpha),s.pixelStorei(3317,g.unpackAlignment),s.pixelStorei(37443,0);const be=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,X=[];for(let V=0;V<6;V++)!be&&!fe?X[V]=w(g.image[V],!1,!0,l):X[V]=fe?g.image[V].image:g.image[V],X[V]=ut(g,X[V]);const ge=X[0],xe=S(ge)||a,Se=r.convert(g.format,g.encoding),de=r.convert(g.type),_e=z(g.internalFormat,Se,de,g.encoding),Ue=a&&g.isVideoTexture!==!0,Fe=ce.__version===void 0||ie===!0;let Ye=M(g,ge,xe);U(34067,g,xe);let L;if(be){Ue&&Fe&&t.texStorage2D(34067,Ye,_e,ge.width,ge.height);for(let V=0;V<6;V++){L=X[V].mipmaps;for(let ee=0;ee<L.length;ee++){const ue=L[ee];g.format!==Pt?Se!==null?Ue?t.compressedTexSubImage2D(34069+V,ee,0,0,ue.width,ue.height,Se,ue.data):t.compressedTexImage2D(34069+V,ee,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+V,ee,0,0,ue.width,ue.height,Se,de,ue.data):t.texImage2D(34069+V,ee,_e,ue.width,ue.height,0,Se,de,ue.data)}}}else{L=g.mipmaps,Ue&&Fe&&(L.length>0&&Ye++,t.texStorage2D(34067,Ye,_e,X[0].width,X[0].height));for(let V=0;V<6;V++)if(fe){Ue?t.texSubImage2D(34069+V,0,0,0,X[V].width,X[V].height,Se,de,X[V].data):t.texImage2D(34069+V,0,_e,X[V].width,X[V].height,0,Se,de,X[V].data);for(let ee=0;ee<L.length;ee++){const ve=L[ee].image[V].image;Ue?t.texSubImage2D(34069+V,ee+1,0,0,ve.width,ve.height,Se,de,ve.data):t.texImage2D(34069+V,ee+1,_e,ve.width,ve.height,0,Se,de,ve.data)}}else{Ue?t.texSubImage2D(34069+V,0,0,0,Se,de,X[V]):t.texImage2D(34069+V,0,_e,Se,de,X[V]);for(let ee=0;ee<L.length;ee++){const ue=L[ee];Ue?t.texSubImage2D(34069+V,ee+1,0,0,Se,de,ue.image[V]):t.texImage2D(34069+V,ee+1,_e,Se,de,ue.image[V])}}}P(g,xe)&&I(34067),ce.__version=se.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function q(y,g,G,ie,se){const ce=r.convert(G.format,G.encoding),be=r.convert(G.type),fe=z(G.internalFormat,ce,be,G.encoding);n.get(g).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,fe,g.width,g.height,g.depth,0,ce,be,null):t.texImage2D(se,0,fe,g.width,g.height,0,ce,be,null)),t.bindFramebuffer(36160,y),Ne(g)?f.framebufferTexture2DMultisampleEXT(36160,ie,se,n.get(G).__webglTexture,0,Ve(g)):(se===3553||se>=34069&&se<=34074)&&s.framebufferTexture2D(36160,ie,se,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(y,g,G){if(s.bindRenderbuffer(36161,y),g.depthBuffer&&!g.stencilBuffer){let ie=33189;if(G||Ne(g)){const se=g.depthTexture;se&&se.isDepthTexture&&(se.type===dn?ie=36012:se.type===hn&&(ie=33190));const ce=Ve(g);Ne(g)?f.renderbufferStorageMultisampleEXT(36161,ce,ie,g.width,g.height):s.renderbufferStorageMultisample(36161,ce,ie,g.width,g.height)}else s.renderbufferStorage(36161,ie,g.width,g.height);s.framebufferRenderbuffer(36160,36096,36161,y)}else if(g.depthBuffer&&g.stencilBuffer){const ie=Ve(g);G&&Ne(g)===!1?s.renderbufferStorageMultisample(36161,ie,35056,g.width,g.height):Ne(g)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,g.width,g.height):s.renderbufferStorage(36161,34041,g.width,g.height),s.framebufferRenderbuffer(36160,33306,36161,y)}else{const ie=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let se=0;se<ie.length;se++){const ce=ie[se],be=r.convert(ce.format,ce.encoding),fe=r.convert(ce.type),X=z(ce.internalFormat,be,fe,ce.encoding),ge=Ve(g);G&&Ne(g)===!1?s.renderbufferStorageMultisample(36161,ge,X,g.width,g.height):Ne(g)?f.renderbufferStorageMultisampleEXT(36161,ge,X,g.width,g.height):s.renderbufferStorage(36161,X,g.width,g.height)}}s.bindRenderbuffer(36161,null)}function pe(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ne(g.depthTexture,0);const ie=n.get(g.depthTexture).__webglTexture,se=Ve(g);if(g.depthTexture.format===fn)Ne(g)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,se):s.framebufferTexture2D(36160,36096,3553,ie,0);else if(g.depthTexture.format===kn)Ne(g)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,se):s.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function oe(y){const g=n.get(y),G=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");pe(g.__webglFramebuffer,y)}else if(G){g.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,g.__webglFramebuffer[ie]),g.__webglDepthbuffer[ie]=s.createRenderbuffer(),he(g.__webglDepthbuffer[ie],y,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=s.createRenderbuffer(),he(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function me(y,g,G){const ie=n.get(y);g!==void 0&&q(ie.__webglFramebuffer,y,y.texture,36064,3553),G!==void 0&&oe(y)}function Te(y){const g=y.texture,G=n.get(y),ie=n.get(g);y.addEventListener("dispose",$),y.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=g.version,o.memory.textures++);const se=y.isWebGLCubeRenderTarget===!0,ce=y.isWebGLMultipleRenderTargets===!0,be=S(y)||a;if(se){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)G.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ce)if(i.drawBuffers){const fe=y.texture;for(let X=0,ge=fe.length;X<ge;X++){const xe=n.get(fe[X]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Ne(y)===!1){const fe=ce?g:[g];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let X=0;X<fe.length;X++){const ge=fe[X];G.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[X]);const xe=r.convert(ge.format,ge.encoding),Se=r.convert(ge.type),de=z(ge.internalFormat,xe,Se,ge.encoding,y.isXRRenderTarget===!0),_e=Ve(y);s.renderbufferStorageMultisample(36161,_e,de,y.width,y.height),s.framebufferRenderbuffer(36160,36064+X,36161,G.__webglColorRenderbuffer[X])}s.bindRenderbuffer(36161,null),y.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),he(G.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ie.__webglTexture),U(34067,g,be);for(let fe=0;fe<6;fe++)q(G.__webglFramebuffer[fe],y,g,36064,34069+fe);P(g,be)&&I(34067),t.unbindTexture()}else if(ce){const fe=y.texture;for(let X=0,ge=fe.length;X<ge;X++){const xe=fe[X],Se=n.get(xe);t.bindTexture(3553,Se.__webglTexture),U(3553,xe,be),q(G.__webglFramebuffer,y,xe,36064+X,3553),P(xe,be)&&I(3553)}t.unbindTexture()}else{let fe=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?fe=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),U(fe,g,be),q(G.__webglFramebuffer,y,g,36064,fe),P(g,be)&&I(fe),t.unbindTexture()}y.depthBuffer&&oe(y)}function Be(y){const g=S(y)||a,G=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0,se=G.length;ie<se;ie++){const ce=G[ie];if(P(ce,g)){const be=y.isWebGLCubeRenderTarget?34067:3553,fe=n.get(ce).__webglTexture;t.bindTexture(be,fe),I(be),t.unbindTexture()}}}function We(y){if(a&&y.samples>0&&Ne(y)===!1){const g=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],G=y.width,ie=y.height;let se=16384;const ce=[],be=y.stencilBuffer?33306:36096,fe=n.get(y),X=y.isWebGLMultipleRenderTargets===!0;if(X)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,fe.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){ce.push(36064+ge),y.depthBuffer&&ce.push(be);const xe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(xe===!1&&(y.depthBuffer&&(se|=256),y.stencilBuffer&&(se|=1024)),X&&s.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[ge]),xe===!0&&(s.invalidateFramebuffer(36008,[be]),s.invalidateFramebuffer(36009,[be])),X){const Se=n.get(g[ge]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Se,0)}s.blitFramebuffer(0,0,G,ie,0,0,G,ie,se,9728),m&&s.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ge,36161,fe.__webglColorRenderbuffer[ge]);const xe=n.get(g[ge]).__webglTexture;t.bindFramebuffer(36160,fe.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ge,3553,xe,0)}t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function Ve(y){return Math.min(d,y.samples)}function Ne(y){const g=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Xe(y){const g=o.render.frame;_.get(y)!==g&&(_.set(y,g),y.update())}function ut(y,g){const G=y.encoding,ie=y.format,se=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Mr||G!==gn&&(G===ke?a===!1?e.has("EXT_sRGB")===!0&&ie===Pt?(y.format=Mr,y.minFilter=ht,y.generateMipmaps=!1):g=ia.sRGBToLinear(g):(ie!==Pt||se!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),g}this.allocateTextureUnit=j,this.resetTextureUnits=te,this.setTexture2D=ne,this.setTexture2DArray=ye,this.setTexture3D=ae,this.setTextureCube=B,this.rebindTextures=me,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ne}function vd(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===mn)return 5121;if(r===ro)return 32819;if(r===so)return 32820;if(r===to)return 5120;if(r===no)return 5122;if(r===ea)return 5123;if(r===io)return 5124;if(r===hn)return 5125;if(r===dn)return 5126;if(r===Qn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ao)return 6406;if(r===Pt)return 6408;if(r===oo)return 6409;if(r===lo)return 6410;if(r===fn)return 6402;if(r===kn)return 34041;if(r===Mr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===co)return 6403;if(r===uo)return 36244;if(r===ho)return 33319;if(r===fo)return 33320;if(r===po)return 36249;if(r===Gi||r===ki||r===Vi||r===Hi)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ki)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ki)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zr||r===Or||r===Br||r===Gr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===zr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Or)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Br)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kr||r===Vr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===kr)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Vr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hr||r===Wr||r===qr||r===Xr||r===Yr||r===jr||r===$r||r===Zr||r===Kr||r===Jr||r===Qr||r===es||r===ts||r===ns)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Hr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$r)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===es)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ts)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ns)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wi)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Wi)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===go||r===is||r===rs||r===ss)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wi)return a.COMPRESSED_RED_RGTC1_EXT;if(r===is)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ss)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class xd extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ai extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),u=this._getHandJoint(l,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=p.radius),u.visible=p!==null}const c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return a!==null&&(a.visible=i!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Sd extends xt{constructor(e,t,n,i,r,o,a,h,l,c){if(c=c!==void 0?c:fn,c!==fn&&c!==kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===fn&&(n=hn),n===void 0&&c===kn&&(n=zn),super(null,i,r,o,a,h,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tt,this.minFilter=h!==void 0?h:tt,this.flipY=!1,this.generateMipmaps=!1}}class yd extends Hn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",h=1,l=null,c=null,d=null,f=null,m=null,_=null;const v=t.getContextAttributes();let p=null,u=null;const A=[],w=[],S=new Set,E=new Map,P=new Ct;P.layers.enable(1),P.viewport=new nt;const I=new Ct;I.layers.enable(2),I.viewport=new nt;const z=[P,I],M=new xd;M.layers.enable(1),M.layers.enable(2);let b=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=A[B];return Z===void 0&&(Z=new pr,A[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=A[B];return Z===void 0&&(Z=new pr,A[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=A[B];return Z===void 0&&(Z=new pr,A[B]=Z),Z.getHandSpace()};function $(B){const Z=w.indexOf(B.inputSource);if(Z===-1)return;const D=A[Z];D!==void 0&&D.dispatchEvent({type:B.type,data:B.inputSource})}function N(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let B=0;B<A.length;B++){const Z=w[B];Z!==null&&(w[B]=null,A[B].disconnect(Z))}b=null,K=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),u=new Xt(m.framebufferWidth,m.framebufferHeight,{format:Pt,type:mn,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let Z=null,D=null,U=null;v.depth&&(U=v.stencil?35056:33190,Z=v.stencil?kn:fn,D=v.stencil?zn:hn);const C={colorFormat:32856,depthFormat:U,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(C),i.updateRenderState({layers:[f]}),u=new Xt(f.textureWidth,f.textureHeight,{format:Pt,type:mn,depthTexture:new Sd(f.textureWidth,f.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Q=e.properties.get(u);Q.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(B){for(let Z=0;Z<B.removed.length;Z++){const D=B.removed[Z],U=w.indexOf(D);U>=0&&(w[U]=null,A[U].disconnect(D))}for(let Z=0;Z<B.added.length;Z++){const D=B.added[Z];let U=w.indexOf(D);if(U===-1){for(let Q=0;Q<A.length;Q++)if(Q>=w.length){w.push(D),U=Q;break}else if(w[Q]===null){w[Q]=D,U=Q;break}if(U===-1)break}const C=A[U];C&&C.connect(D)}}const H=new T,J=new T;function te(B,Z,D){H.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(D.matrixWorld);const U=H.distanceTo(J),C=Z.projectionMatrix.elements,Q=D.projectionMatrix.elements,W=C[14]/(C[10]-1),q=C[14]/(C[10]+1),he=(C[9]+1)/C[5],pe=(C[9]-1)/C[5],oe=(C[8]-1)/C[0],me=(Q[8]+1)/Q[0],Te=W*oe,Be=W*me,We=U/(-oe+me),Ve=We*-oe;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ve),B.translateZ(We),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ne=W+We,Xe=q+We,ut=Te-Ve,y=Be+(U-Ve),g=he*q/Xe*Ne,G=pe*q/Xe*Ne;B.projectionMatrix.makePerspective(ut,y,g,G,Ne,Xe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function j(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;M.near=I.near=P.near=B.near,M.far=I.far=P.far=B.far,(b!==M.near||K!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,K=M.far);const Z=B.parent,D=M.cameras;j(M,Z);for(let U=0;U<D.length;U++)j(D[U],Z);D.length===2?te(M,P,I):M.projectionMatrix.copy(P.projectionMatrix),re(B,M,Z)};function re(B,Z,D){D===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(D.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const U=B.children;for(let C=0,Q=U.length;C<Q;C++)U[C].updateMatrixWorld(!0);B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Sr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(B){h=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return S};let ne=null;function ye(B,Z){if(c=Z.getViewerPose(l||o),_=Z,c!==null){const D=c.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let U=!1;D.length!==M.cameras.length&&(M.cameras.length=0,U=!0);for(let C=0;C<D.length;C++){const Q=D[C];let W=null;if(m!==null)W=m.getViewport(Q);else{const he=d.getViewSubImage(f,Q);W=he.viewport,C===0&&(e.setRenderTargetTextures(u,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(u))}let q=z[C];q===void 0&&(q=new Ct,q.layers.enable(C),q.viewport=new nt,z[C]=q),q.matrix.fromArray(Q.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Q.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(W.x,W.y,W.width,W.height),C===0&&(M.matrix.copy(q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),U===!0&&M.cameras.push(q)}}for(let D=0;D<A.length;D++){const U=w[D],C=A[D];U!==null&&C!==void 0&&C.update(U,Z,l||o)}if(ne&&ne(B,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let D=null;for(const U of S)Z.detectedPlanes.has(U)||(D===null&&(D=[]),D.push(U));if(D!==null)for(const U of D)S.delete(U),E.delete(U),n.dispatchEvent({type:"planeremoved",data:U});for(const U of Z.detectedPlanes)if(!S.has(U))S.add(U),E.set(U,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:U});else{const C=E.get(U);U.lastChangedTime>C&&(E.set(U,U.lastChangedTime),n.dispatchEvent({type:"planechanged",data:U}))}}_=null}const ae=new pa;ae.setAnimationLoop(ye),this.setAnimationLoop=function(B){ne=B},this.dispose=function(){}}}function bd(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ua(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,A,w,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),c(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?h(p,u,A,w):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===ft&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===ft&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=e.get(u).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const w=s.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*w,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function h(p,u,A,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=w*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ft&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const A=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wd(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function h(A,w){const S=w.program;n.uniformBlockBinding(A,S)}function l(A,w){let S=i[A.id];S===void 0&&(_(A),S=c(A),i[A.id]=S,A.addEventListener("dispose",p));const E=w.program;n.updateUBOMapping(A,E);const P=e.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}function c(A){const w=d();A.__bindingPointIndex=w;const S=s.createBuffer(),E=A.__size,P=A.usage;return s.bindBuffer(35345,S),s.bufferData(35345,E,P),s.bindBuffer(35345,null),s.bindBufferBase(35345,w,S),S}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const w=i[A.id],S=A.uniforms,E=A.__cache;s.bindBuffer(35345,w);for(let P=0,I=S.length;P<I;P++){const z=S[P];if(m(z,P,E)===!0){const M=z.__offset,b=Array.isArray(z.value)?z.value:[z.value];let K=0;for(let $=0;$<b.length;$++){const N=b[$],O=v(N);typeof N=="number"?(z.__data[0]=N,s.bufferSubData(35345,M+K,z.__data)):N.isMatrix3?(z.__data[0]=N.elements[0],z.__data[1]=N.elements[1],z.__data[2]=N.elements[2],z.__data[3]=N.elements[0],z.__data[4]=N.elements[3],z.__data[5]=N.elements[4],z.__data[6]=N.elements[5],z.__data[7]=N.elements[0],z.__data[8]=N.elements[6],z.__data[9]=N.elements[7],z.__data[10]=N.elements[8],z.__data[11]=N.elements[0]):(N.toArray(z.__data,K),K+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,M,z.__data)}}s.bindBuffer(35345,null)}function m(A,w,S){const E=A.value;if(S[w]===void 0){if(typeof E=="number")S[w]=E;else{const P=Array.isArray(E)?E:[E],I=[];for(let z=0;z<P.length;z++)I.push(P[z].clone());S[w]=I}return!0}else if(typeof E=="number"){if(S[w]!==E)return S[w]=E,!0}else{const P=Array.isArray(S[w])?S[w]:[S[w]],I=Array.isArray(E)?E:[E];for(let z=0;z<P.length;z++){const M=P[z];if(M.equals(I[z])===!1)return M.copy(I[z]),!0}}return!1}function _(A){const w=A.uniforms;let S=0;const E=16;let P=0;for(let I=0,z=w.length;I<z;I++){const M=w[I],b={boundary:0,storage:0},K=Array.isArray(M.value)?M.value:[M.value];for(let $=0,N=K.length;$<N;$++){const O=K[$],H=v(O);b.boundary+=H.boundary,b.storage+=H.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,I>0){P=S%E;const $=E-P;P!==0&&$-b.boundary<0&&(S+=E-P,M.__offset=S)}S+=b.storage}return P=S%E,P>0&&(S+=E-P),A.__size=S,A.__cache={},this}function v(A){const w={boundary:0,storage:0};return typeof A=="number"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function p(A){const w=A.target;w.removeEventListener("dispose",p);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function u(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:h,update:l,dispose:u}}function Ed(){const s=Li("canvas");return s.style.display="block",s}class Ma{constructor(e={}){const{canvas:t=Ed(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=null,_=null;const v=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gn,this.useLegacyLights=!0,this.toneMapping=qt,this.toneMappingExposure=1;const u=this;let A=!1,w=0,S=0,E=null,P=-1,I=null;const z=new nt,M=new nt;let b=null,K=t.width,$=t.height,N=1,O=null,H=null;const J=new nt(0,0,K,$),te=new nt(0,0,K,$);let j=!1;const re=new fa;let ne=!1,ye=!1,ae=null;const B=new it,Z=new T,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function U(){return E===null?N:1}let C=n;function Q(x,F){for(let k=0;k<x.length;k++){const R=x[k],Y=t.getContext(R,F);if(Y!==null)return Y}return null}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${br}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),C===null){const F=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&F.shift(),C=Q(F,x),C===null)throw Q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let W,q,he,pe,oe,me,Te,Be,We,Ve,Ne,Xe,ut,y,g,G,ie,se,ce,be,fe,X,ge,xe;function Se(){W=new Fu(C),q=new Pu(C,W,e),W.init(q),X=new vd(C,W,q),he=new gd(C,W,q),pe=new Bu,oe=new nd,me=new _d(C,W,he,oe,q,X,pe),Te=new Du(u),Be=new Nu(u),We=new Ko(C,q),ge=new Cu(C,W,We,q),Ve=new zu(C,We,pe,ge),Ne=new Hu(C,Ve,We,pe),ce=new Vu(C,q,me),G=new Ru(oe),Xe=new td(u,Te,Be,W,q,ge,G),ut=new bd(u,oe),y=new rd,g=new ud(W,q),se=new Au(u,Te,Be,he,Ne,f,h),ie=new md(u,Ne,q),xe=new wd(C,pe,q,he),be=new Lu(C,W,pe,q),fe=new Ou(C,W,pe,q),pe.programs=Xe.programs,u.capabilities=q,u.extensions=W,u.properties=oe,u.renderLists=y,u.shadowMap=ie,u.state=he,u.info=pe}Se();const de=new yd(u,C);this.xr=de,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=W.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=W.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(x){x!==void 0&&(N=x,this.setSize(K,$,!1))},this.getSize=function(x){return x.set(K,$)},this.setSize=function(x,F,k=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,$=F,t.width=Math.floor(x*N),t.height=Math.floor(F*N),k===!0&&(t.style.width=x+"px",t.style.height=F+"px"),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(K*N,$*N).floor()},this.setDrawingBufferSize=function(x,F,k){K=x,$=F,N=k,t.width=Math.floor(x*k),t.height=Math.floor(F*k),this.setViewport(0,0,x,F)},this.getCurrentViewport=function(x){return x.copy(z)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,F,k,R){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,F,k,R),he.viewport(z.copy(J).multiplyScalar(N).floor())},this.getScissor=function(x){return x.copy(te)},this.setScissor=function(x,F,k,R){x.isVector4?te.set(x.x,x.y,x.z,x.w):te.set(x,F,k,R),he.scissor(M.copy(te).multiplyScalar(N).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(x){he.setScissorTest(j=x)},this.setOpaqueSort=function(x){O=x},this.setTransparentSort=function(x){H=x},this.getClearColor=function(x){return x.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(x=!0,F=!0,k=!0){let R=0;x&&(R|=16384),F&&(R|=256),k&&(R|=1024),C.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),y.dispose(),g.dispose(),oe.dispose(),Te.dispose(),Be.dispose(),Ne.dispose(),ge.dispose(),xe.dispose(),Xe.dispose(),de.dispose(),de.removeEventListener("sessionstart",ve),de.removeEventListener("sessionend",Ge),ae&&(ae.dispose(),ae=null),qe.stop()};function _e(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=pe.autoReset,F=ie.enabled,k=ie.autoUpdate,R=ie.needsUpdate,Y=ie.type;Se(),pe.autoReset=x,ie.enabled=F,ie.autoUpdate=k,ie.needsUpdate=R,ie.type=Y}function Fe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ye(x){const F=x.target;F.removeEventListener("dispose",Ye),L(F)}function L(x){V(x),oe.remove(x)}function V(x){const F=oe.get(x).programs;F!==void 0&&(F.forEach(function(k){Xe.releaseProgram(k)}),x.isShaderMaterial&&Xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,k,R,Y,Me){F===null&&(F=D);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ee=Sa(x,F,k,R,Y);he.setMaterial(R,we);let Ae=k.index,Le=1;R.wireframe===!0&&(Ae=Ve.getWireframeAttribute(k),Le=2);const Pe=k.drawRange,Re=k.attributes.position;let ze=Pe.start*Le,ot=(Pe.start+Pe.count)*Le;Me!==null&&(ze=Math.max(ze,Me.start*Le),ot=Math.min(ot,(Me.start+Me.count)*Le)),Ae!==null?(ze=Math.max(ze,0),ot=Math.min(ot,Ae.count)):Re!=null&&(ze=Math.max(ze,0),ot=Math.min(ot,Re.count));const bt=ot-ze;if(bt<0||bt===1/0)return;ge.setup(Y,R,Ee,k,Ae);let tn,$e=be;if(Ae!==null&&(tn=We.get(Ae),$e=fe,$e.setIndex(tn)),Y.isMesh)R.wireframe===!0?(he.setLineWidth(R.wireframeLinewidth*U()),$e.setMode(1)):$e.setMode(4);else if(Y.isLine){let Ie=R.linewidth;Ie===void 0&&(Ie=1),he.setLineWidth(Ie*U()),Y.isLineSegments?$e.setMode(1):Y.isLineLoop?$e.setMode(2):$e.setMode(3)}else Y.isPoints?$e.setMode(0):Y.isSprite&&$e.setMode(4);if(Y.isInstancedMesh)$e.renderInstances(ze,bt,Y.count);else if(k.isInstancedBufferGeometry){const Ie=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ni=Math.min(k.instanceCount,Ie);$e.renderInstances(ze,bt,Ni)}else $e.render(ze,bt)},this.compile=function(x,F){function k(R,Y,Me){R.transparent===!0&&R.side===Wt&&R.forceSinglePass===!1?(R.side=ft,R.needsUpdate=!0,si(R,Y,Me),R.side=Qt,R.needsUpdate=!0,si(R,Y,Me),R.side=Wt):si(R,Y,Me)}_=g.get(x),_.init(),p.push(_),x.traverseVisible(function(R){R.isLight&&R.layers.test(F.layers)&&(_.pushLight(R),R.castShadow&&_.pushShadow(R))}),_.setupLights(u.useLegacyLights),x.traverse(function(R){const Y=R.material;if(Y)if(Array.isArray(Y))for(let Me=0;Me<Y.length;Me++){const we=Y[Me];k(we,x,R)}else k(Y,x,R)}),p.pop(),_=null};let ee=null;function ue(x){ee&&ee(x)}function ve(){qe.stop()}function Ge(){qe.start()}const qe=new pa;qe.setAnimationLoop(ue),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(x){ee=x,de.setAnimationLoop(x),x===null?qe.stop():qe.start()},de.addEventListener("sessionstart",ve),de.addEventListener("sessionend",Ge),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),x.isScene===!0&&x.onBeforeRender(u,x,F,E),_=g.get(x,p.length),_.init(),p.push(_),B.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),re.setFromProjectionMatrix(B),ye=this.localClippingEnabled,ne=G.init(this.clippingPlanes,ye),m=y.get(x,v.length),m.init(),v.push(m),rt(x,F,0,u.sortObjects),m.finish(),u.sortObjects===!0&&m.sort(O,H),ne===!0&&G.beginShadows();const k=_.state.shadowsArray;if(ie.render(k,x,F),ne===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(m,x),_.setupLights(u.useLegacyLights),F.isArrayCamera){const R=F.cameras;for(let Y=0,Me=R.length;Y<Me;Y++){const we=R[Y];Yt(m,x,we,we.viewport)}}else Yt(m,x,F);E!==null&&(me.updateMultisampleRenderTarget(E),me.updateRenderTargetMipmap(E)),x.isScene===!0&&x.onAfterRender(u,x,F),ge.resetDefaultState(),P=-1,I=null,p.pop(),p.length>0?_=p[p.length-1]:_=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function rt(x,F,k,R){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLight)_.pushLight(x),x.castShadow&&_.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||re.intersectsSprite(x)){R&&Z.setFromMatrixPosition(x.matrixWorld).applyMatrix4(B);const we=Ne.update(x),Ee=x.material;Ee.visible&&m.push(x,we,Ee,k,Z.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==pe.render.frame&&(x.skeleton.update(),x.skeleton.frame=pe.render.frame),!x.frustumCulled||re.intersectsObject(x))){R&&Z.setFromMatrixPosition(x.matrixWorld).applyMatrix4(B);const we=Ne.update(x),Ee=x.material;if(Array.isArray(Ee)){const Ae=we.groups;for(let Le=0,Pe=Ae.length;Le<Pe;Le++){const Re=Ae[Le],ze=Ee[Re.materialIndex];ze&&ze.visible&&m.push(x,we,ze,k,Z.z,Re)}}else Ee.visible&&m.push(x,we,Ee,k,Z.z,null)}}const Me=x.children;for(let we=0,Ee=Me.length;we<Ee;we++)rt(Me[we],F,k,R)}function Yt(x,F,k,R){const Y=x.opaque,Me=x.transmissive,we=x.transparent;_.setupLightsView(k),ne===!0&&G.setGlobalState(u.clippingPlanes,k),Me.length>0&&je(Y,Me,F,k),R&&he.viewport(z.copy(R)),Y.length>0&&St(Y,F,k),Me.length>0&&St(Me,F,k),we.length>0&&St(we,F,k),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function je(x,F,k,R){if(ae===null){const Ee=q.isWebGL2;ae=new Xt(1024,1024,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")?Qn:mn,minFilter:Jn,samples:Ee&&a===!0?4:0})}const Y=u.getRenderTarget();u.setRenderTarget(ae),u.clear();const Me=u.toneMapping;u.toneMapping=qt,St(x,k,R),me.updateMultisampleRenderTarget(ae),me.updateRenderTargetMipmap(ae);let we=!1;for(let Ee=0,Ae=F.length;Ee<Ae;Ee++){const Le=F[Ee],Pe=Le.object,Re=Le.geometry,ze=Le.material,ot=Le.group;if(ze.side===Wt&&Pe.layers.test(R.layers)){const bt=ze.side;ze.side=ft,ze.needsUpdate=!0,Rt(Pe,k,R,Re,ze,ot),ze.side=bt,ze.needsUpdate=!0,we=!0}}we===!0&&(me.updateMultisampleRenderTarget(ae),me.updateRenderTargetMipmap(ae)),u.setRenderTarget(Y),u.toneMapping=Me}function St(x,F,k){const R=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,Me=x.length;Y<Me;Y++){const we=x[Y],Ee=we.object,Ae=we.geometry,Le=R===null?we.material:R,Pe=we.group;Ee.layers.test(k.layers)&&Rt(Ee,F,k,Ae,Le,Pe)}}function Rt(x,F,k,R,Y,Me){x.onBeforeRender(u,F,k,R,Y,Me),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),Y.onBeforeRender(u,F,k,R,x,Me),Y.transparent===!0&&Y.side===Wt&&Y.forceSinglePass===!1?(Y.side=ft,Y.needsUpdate=!0,u.renderBufferDirect(k,F,R,Y,x,Me),Y.side=Qt,Y.needsUpdate=!0,u.renderBufferDirect(k,F,R,Y,x,Me),Y.side=Wt):u.renderBufferDirect(k,F,R,Y,x,Me),x.onAfterRender(u,F,k,R,Y,Me)}function si(x,F,k){F.isScene!==!0&&(F=D);const R=oe.get(x),Y=_.state.lights,Me=_.state.shadowsArray,we=Y.state.version,Ee=Xe.getParameters(x,Y.state,Me,F,k),Ae=Xe.getProgramCacheKey(Ee);let Le=R.programs;R.environment=x.isMeshStandardMaterial?F.environment:null,R.fog=F.fog,R.envMap=(x.isMeshStandardMaterial?Be:Te).get(x.envMap||R.environment),Le===void 0&&(x.addEventListener("dispose",Ye),Le=new Map,R.programs=Le);let Pe=Le.get(Ae);if(Pe!==void 0){if(R.currentProgram===Pe&&R.lightsStateVersion===we)return Ar(x,Ee),Pe}else Ee.uniforms=Xe.getUniforms(x),x.onBuild(k,Ee,u),x.onBeforeCompile(Ee,u),Pe=Xe.acquireProgram(Ee,Ae),Le.set(Ae,Pe),R.uniforms=Ee.uniforms;const Re=R.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=G.uniform),Ar(x,Ee),R.needsLights=ba(x),R.lightsStateVersion=we,R.needsLights&&(Re.ambientLightColor.value=Y.state.ambient,Re.lightProbe.value=Y.state.probe,Re.directionalLights.value=Y.state.directional,Re.directionalLightShadows.value=Y.state.directionalShadow,Re.spotLights.value=Y.state.spot,Re.spotLightShadows.value=Y.state.spotShadow,Re.rectAreaLights.value=Y.state.rectArea,Re.ltc_1.value=Y.state.rectAreaLTC1,Re.ltc_2.value=Y.state.rectAreaLTC2,Re.pointLights.value=Y.state.point,Re.pointLightShadows.value=Y.state.pointShadow,Re.hemisphereLights.value=Y.state.hemi,Re.directionalShadowMap.value=Y.state.directionalShadowMap,Re.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Re.spotShadowMap.value=Y.state.spotShadowMap,Re.spotLightMatrix.value=Y.state.spotLightMatrix,Re.spotLightMap.value=Y.state.spotLightMap,Re.pointShadowMap.value=Y.state.pointShadowMap,Re.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ze=Pe.getUniforms(),ot=Ci.seqWithValue(ze.seq,Re);return R.currentProgram=Pe,R.uniformsList=ot,Pe}function Ar(x,F){const k=oe.get(x);k.outputEncoding=F.outputEncoding,k.instancing=F.instancing,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Sa(x,F,k,R,Y){F.isScene!==!0&&(F=D),me.resetTextureUnits();const Me=F.fog,we=R.isMeshStandardMaterial?F.environment:null,Ee=E===null?u.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:gn,Ae=(R.isMeshStandardMaterial?Be:Te).get(R.envMap||we),Le=R.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pe=!!R.normalMap&&!!k.attributes.tangent,Re=!!k.morphAttributes.position,ze=!!k.morphAttributes.normal,ot=!!k.morphAttributes.color,bt=R.toneMapped?u.toneMapping:qt,tn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$e=tn!==void 0?tn.length:0,Ie=oe.get(R),Ni=_.state.lights;if(ne===!0&&(ye===!0||x!==I)){const pt=x===I&&R.id===P;G.setState(R,x,pt)}let Qe=!1;R.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Ni.state.version||Ie.outputEncoding!==Ee||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Ae||R.fog===!0&&Ie.fog!==Me||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==G.numPlanes||Ie.numIntersection!==G.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==Pe||Ie.morphTargets!==Re||Ie.morphNormals!==ze||Ie.morphColors!==ot||Ie.toneMapping!==bt||q.isWebGL2===!0&&Ie.morphTargetsCount!==$e)&&(Qe=!0):(Qe=!0,Ie.__version=R.version);let nn=Ie.currentProgram;Qe===!0&&(nn=si(R,F,Y));let Cr=!1,qn=!1,Fi=!1;const lt=nn.getUniforms(),rn=Ie.uniforms;if(he.useProgram(nn.program)&&(Cr=!0,qn=!0,Fi=!0),R.id!==P&&(P=R.id,qn=!0),Cr||I!==x){if(lt.setValue(C,"projectionMatrix",x.projectionMatrix),q.logarithmicDepthBuffer&&lt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),I!==x&&(I=x,qn=!0,Fi=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const pt=lt.map.cameraPosition;pt!==void 0&&pt.setValue(C,Z.setFromMatrixPosition(x.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&lt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||Y.isSkinnedMesh)&&lt.setValue(C,"viewMatrix",x.matrixWorldInverse)}if(Y.isSkinnedMesh){lt.setOptional(C,Y,"bindMatrix"),lt.setOptional(C,Y,"bindMatrixInverse");const pt=Y.skeleton;pt&&(q.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),lt.setValue(C,"boneTexture",pt.boneTexture,me),lt.setValue(C,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zi=k.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0&&q.isWebGL2===!0)&&ce.update(Y,k,nn),(qn||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,lt.setValue(C,"receiveShadow",Y.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(rn.envMap.value=Ae,rn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),qn&&(lt.setValue(C,"toneMappingExposure",u.toneMappingExposure),Ie.needsLights&&ya(rn,Fi),Me&&R.fog===!0&&ut.refreshFogUniforms(rn,Me),ut.refreshMaterialUniforms(rn,R,N,$,ae),Ci.upload(C,Ie.uniformsList,rn,me)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Ci.upload(C,Ie.uniformsList,rn,me),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&lt.setValue(C,"center",Y.center),lt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),lt.setValue(C,"normalMatrix",Y.normalMatrix),lt.setValue(C,"modelMatrix",Y.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const pt=R.uniformsGroups;for(let Oi=0,wa=pt.length;Oi<wa;Oi++)if(q.isWebGL2){const Lr=pt[Oi];xe.update(Lr,nn),xe.bind(Lr,nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nn}function ya(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function ba(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(x,F,k){oe.get(x.texture).__webglTexture=F,oe.get(x.depthTexture).__webglTexture=k;const R=oe.get(x);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=k===void 0,R.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,F){const k=oe.get(x);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(x,F=0,k=0){E=x,w=F,S=k;let R=!0,Y=null,Me=!1,we=!1;if(x){const Ae=oe.get(x);Ae.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),R=!1):Ae.__webglFramebuffer===void 0?me.setupRenderTarget(x):Ae.__hasExternalTextures&&me.rebindTextures(x,oe.get(x.texture).__webglTexture,oe.get(x.depthTexture).__webglTexture);const Le=x.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(we=!0);const Pe=oe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Y=Pe[F],Me=!0):q.isWebGL2&&x.samples>0&&me.useMultisampledRTT(x)===!1?Y=oe.get(x).__webglMultisampledFramebuffer:Y=Pe,z.copy(x.viewport),M.copy(x.scissor),b=x.scissorTest}else z.copy(J).multiplyScalar(N).floor(),M.copy(te).multiplyScalar(N).floor(),b=j;if(he.bindFramebuffer(36160,Y)&&q.drawBuffers&&R&&he.drawBuffers(x,Y),he.viewport(z),he.scissor(M),he.setScissorTest(b),Me){const Ae=oe.get(x.texture);C.framebufferTexture2D(36160,36064,34069+F,Ae.__webglTexture,k)}else if(we){const Ae=oe.get(x.texture),Le=F||0;C.framebufferTextureLayer(36160,36064,Ae.__webglTexture,k||0,Le)}P=-1},this.readRenderTargetPixels=function(x,F,k,R,Y,Me,we){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=oe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){he.bindFramebuffer(36160,Ee);try{const Ae=x.texture,Le=Ae.format,Pe=Ae.type;if(Le!==Pt&&X.convert(Le)!==C.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Pe===Qn&&(W.has("EXT_color_buffer_half_float")||q.isWebGL2&&W.has("EXT_color_buffer_float"));if(Pe!==mn&&X.convert(Pe)!==C.getParameter(35738)&&!(Pe===dn&&(q.isWebGL2||W.has("OES_texture_float")||W.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-R&&k>=0&&k<=x.height-Y&&C.readPixels(F,k,R,Y,X.convert(Le),X.convert(Pe),Me)}finally{const Ae=E!==null?oe.get(E).__webglFramebuffer:null;he.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(x,F,k=0){const R=Math.pow(2,-k),Y=Math.floor(F.image.width*R),Me=Math.floor(F.image.height*R);me.setTexture2D(F,0),C.copyTexSubImage2D(3553,k,0,0,x.x,x.y,Y,Me),he.unbindTexture()},this.copyTextureToTexture=function(x,F,k,R=0){const Y=F.image.width,Me=F.image.height,we=X.convert(k.format),Ee=X.convert(k.type);me.setTexture2D(k,0),C.pixelStorei(37440,k.flipY),C.pixelStorei(37441,k.premultiplyAlpha),C.pixelStorei(3317,k.unpackAlignment),F.isDataTexture?C.texSubImage2D(3553,R,x.x,x.y,Y,Me,we,Ee,F.image.data):F.isCompressedTexture?C.compressedTexSubImage2D(3553,R,x.x,x.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):C.texSubImage2D(3553,R,x.x,x.y,we,Ee,F.image),R===0&&k.generateMipmaps&&C.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(x,F,k,R,Y=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=x.max.x-x.min.x+1,we=x.max.y-x.min.y+1,Ee=x.max.z-x.min.z+1,Ae=X.convert(R.format),Le=X.convert(R.type);let Pe;if(R.isData3DTexture)me.setTexture3D(R,0),Pe=32879;else if(R.isDataArrayTexture)me.setTexture2DArray(R,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(37440,R.flipY),C.pixelStorei(37441,R.premultiplyAlpha),C.pixelStorei(3317,R.unpackAlignment);const Re=C.getParameter(3314),ze=C.getParameter(32878),ot=C.getParameter(3316),bt=C.getParameter(3315),tn=C.getParameter(32877),$e=k.isCompressedTexture?k.mipmaps[0]:k.image;C.pixelStorei(3314,$e.width),C.pixelStorei(32878,$e.height),C.pixelStorei(3316,x.min.x),C.pixelStorei(3315,x.min.y),C.pixelStorei(32877,x.min.z),k.isDataTexture||k.isData3DTexture?C.texSubImage3D(Pe,Y,F.x,F.y,F.z,Me,we,Ee,Ae,Le,$e.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Pe,Y,F.x,F.y,F.z,Me,we,Ee,Ae,$e.data)):C.texSubImage3D(Pe,Y,F.x,F.y,F.z,Me,we,Ee,Ae,Le,$e),C.pixelStorei(3314,Re),C.pixelStorei(32878,ze),C.pixelStorei(3316,ot),C.pixelStorei(3315,bt),C.pixelStorei(32877,tn),Y===0&&R.generateMipmaps&&C.generateMipmap(Pe),he.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?me.setTextureCube(x,0):x.isData3DTexture?me.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?me.setTexture2DArray(x,0):me.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){w=0,S=0,E=null,he.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Td extends Ma{}Td.prototype.isWebGL1Renderer=!0;class qs extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Xs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ad{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,h;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){const d=l.indexOf(c);return d!==-1&&l.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],_=l[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const Cd=new Ad;class Ld{constructor(e){this.manager=e!==void 0?e:Cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ht={};class Pd extends Error{constructor(e,t){super(e),this.response=t}}class Rd extends Ld{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ht[e]!==void 0){Ht[e].push({onLoad:t,onProgress:n,onError:i});return}Ht[e]=[],Ht[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,h=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=Ht[e],d=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let v=0;const p=new ReadableStream({start(u){A();function A(){d.read().then(({done:w,value:S})=>{if(w)u.close();else{v+=S.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let P=0,I=c.length;P<I;P++){const z=c[P];z.onProgress&&z.onProgress(E)}u.enqueue(S),A()}})}}});return new Response(p)}else throw new Pd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(h){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(_=>m.decode(_))}}}).then(l=>{Xs.add(e,l);const c=Ht[e];delete Ht[e];for(let d=0,f=c.length;d<f;d++){const m=c[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const c=Ht[e];if(c===void 0)throw this.manager.itemError(e),l;delete Ht[e];for(let d=0,f=c.length;d<f;d++){const m=c[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ys(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ys();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ys(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:br}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=br);class Ud{constructor(e,t){return new Promise(async n=>{this.vertexShader=await js(`shaders/${e}-vertex.glsl`),this.fragmentShader=await js(`shaders/${e}-fragment.glsl`),this.material=new en({uniforms:t,vertexShader:this.vertexShader,fragmentShader:this.fragmentShader}),n(this.material)})}}function js(s){return new Promise(e=>{new Rd().load(s,n=>{e(n)})})}(async function(){let s={},i=2,r=["sphere","tri","quad"];const o=[{type:2,name:"Back Wall",pos:new T(0,0,45/2),dims:new T(45,45,0),dims2:new T(0,0,0),mat:0,exists:!0},{type:2,name:"Front Wall",pos:new T(0,0,-45/2),dims:new T(45,45,0),dims2:new T(180,0,0),mat:1,exists:!0},{type:2,name:"Left Wall",pos:new T(-45/2,0,0),dims:new T(45,45,0),dims2:new T(-90,0,0),mat:2,exists:!0},{type:2,name:"Right Wall",pos:new T(45/2,0,0),dims:new T(45,45,0),dims2:new T(90,0,0),mat:3,exists:!0},{type:2,name:"Floor",pos:new T(0,-45/2,0),dims:new T(45,45,0),dims2:new T(0,90,0),mat:4,exists:!0},{type:2,name:"Roof",pos:new T(0,45/2,0),dims:new T(45,45,0),dims2:new T(0,-90,0),mat:5,exists:!0},{type:2,name:"Lamp",pos:new T(0,45/2-.001,0),dims:new T(45/3,45/3,0),dims2:new T(0,-90,0),mat:6,exists:!0},{type:0,name:"Left Sphere",pos:new T(-12,0,0),dims:new T(5,0,0),dims2:new T(0,0,0),mat:7,exists:!0},{type:0,name:"Middle Sphere",pos:new T(0,0,0),dims:new T(5,0,0),dims2:new T(0,0,0),mat:8,exists:!0},{type:0,name:"Right Sphere",pos:new T(12,0,0),dims:new T(5,0,0),dims2:new T(0,0,0),mat:9,exists:!0},{type:0,name:"Glowing Sphere",pos:new T(6,-15,0),dims:new T(3,0,0),dims2:new T(0,0,0),mat:10,exists:!0}],a=[{color:new T(255,255,255),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:0,specProb:0,specularColor:new T(255,255,255)},{color:new T(252,217,220),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:0,specProb:0,specularColor:new T(255,255,255)},{color:new T(255,0,0),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:0,specProb:0,specularColor:new T(255,255,255)},{color:new T(0,255,0),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:0,specProb:0,specularColor:new T(255,255,255)},{color:new T(255,255,255),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:1,specProb:.1,specularColor:new T(255,255,255)},{color:new T(46,52,57),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:0,specProb:0,specularColor:new T(255,255,255)},{color:new T(0,0,0),emissionColor:new T(255,255,255),emissionStrength:10,smoothness:0,specProb:0,specularColor:new T(255,255,255)},{color:new T(200,200,200),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:1,specProb:1,specularColor:new T(255,255,255)},{color:new T(200,200,200),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:1,specProb:.5,specularColor:new T(255,255,255)},{color:new T(200,200,200),emissionColor:new T(0,0,0),emissionStrength:0,smoothness:1,specProb:.02,specularColor:new T(255,255,255)},{color:new T(0,200,200),emissionColor:new T(0,200,200),emissionStrength:10,smoothness:.5,specProb:.02,specularColor:new T(255,255,255)}],h=await new Ud("raytracing",{time:{value:0},resolution:{value:new Oe},cameraPos:{value:new T(0,0,-55)},cameraRot:{value:new Oe(0,0)},fov:{value:90},bounceLimit:{value:7},raysPerPixel:{value:10},divergeStrength:{value:1},defocusStrength:{value:0},focusDist:{value:1},obs:{value:b(o,12)},mats:{value:b(a,12)},numObs:{value:o.length},lastFrame:{type:"t",value:null},renderedFrames:{value:0},hasSky:{value:!1},skyColorHorizon:{value:new T(252,249,252)},skyColorZenith:{value:new T(82,170,232)},groundColor:{value:new T(167,155,167)},sunLightDirection:{value:new T(1,-1,-.5)},sunFocus:{value:256},sunIntensity:{value:40}});let l=h.uniforms;const c=new Er;let d=document.querySelector("#canvas");const f=new Ma({canvas:d}),m=new qs,_=new qs,v=new ma(-1,1,1,-1,0,1);let p=new Xt(512,512,{minFilter:ht,magFilter:tt,format:void 0}),u=new Xt(512,512,{minFilter:ht,magFilter:tt,format:void 0});const A=new Dd,w=new Ui(2,2),S=new Nt(w,h),E=new Nt(w,c);m.add(S),_.add(E),window.onresize=M,M(),document.addEventListener("keydown",I),document.addEventListener("keyup",z);function P(){requestAnimationFrame(P),l.time.value=A.getElapsedTime();let D=s.shift?.2:1,U={x:0,y:0};s.arrowleft&&(U.x+=-1),s.arrowright&&(U.x+=1),s.arrowup&&(U.y+=-1),s.arrowdown&&(U.y+=1),l.cameraRot.value.x+=U.x*2*D,l.cameraRot.value.y+=U.y*2*D;let C={x:0,y:0,z:0};s.w&&(C.z+=1),s.s&&(C.z+=-1),s.a&&(C.x+=-1),s.d&&(C.x+=1),s[" "]&&(C.y+=1),s.c&&(C.y+=-1);let Q={x:C.x*1*D,y:C.y*1*D,z:C.z*1*D},W=l.cameraRot.value.x*Math.PI/180,q=l.cameraRot.value.y*Math.PI/180,he=[[Math.cos(W),0,Math.sin(W)],[0,1,0],[-Math.sin(W),0,Math.cos(W)]],pe=[[1,0,0],[0,Math.cos(q),-Math.sin(q)],[0,Math.sin(q),Math.cos(q)]],oe=K(he,K(pe,Q));l.cameraPos.value.x+=oe.x,l.cameraPos.value.y+=oe.y,l.cameraPos.value.z+=oe.z,(C.x||C.y||C.z||U.x||U.y)&&(l.lastFrame.value=null,l.renderedFrames.value=0),l.renderedFrames.value==0&&(c.visible=!1,f.render(_,v,p),c.visible=!0),l.lastFrame.value=p.texture,l.renderedFrames.value++,f.setRenderTarget(u),f.render(m,v),c.map=u.texture,c.needsUpdate=!0,f.setRenderTarget(null),f.render(_,v);let me=p;p=u,u=me}P();function I(D){s[D.key.toLowerCase()]=!0}function z(D){s[D.key.toLowerCase()]=!1}function M(){let D=window.innerWidth/i,U=window.innerHeight/i;l.resolution.value.x=D,l.resolution.value.y=U,v.aspect=D/U,v.updateProjectionMatrix(),f.setSize(D,U),p.setSize(D,U),u.setSize(D,U),l.lastFrame.value=null,l.renderedFrames.value=0,c.map=null,c.needsUpdate=!0}function b(D,U){let C=[];for(let Q=0;Q<U;Q++)Q<D.length?C.push(D[Q]):C.push(D[0]);return C}function K(D,U){let C=[];for(var Q=0;Q<3;Q++){let q=0;for(var W=0;W<3;W++)q+=D[Q][W]*U[["x","y","z"][W]];C.push(q)}return{x:C[0],y:C[1],z:C[2]}}function $(D){let U=D.x.toString(16),C=D.y.toString(16),Q=D.z.toString(16);return U.length==1&&(U="0"+U),C.length==1&&(C="0"+C),Q.length==1&&(Q="0"+Q),`#${U}${C}${Q}`}function N(D){return new T(parseInt(D[1]+D[2],16),parseInt(D[3]+D[4],16),parseInt(D[5]+D[6],16))}let O=document.getElementsByClassName("controls")[0];function H(D,U,C,Q=0){let W=document.createElement("div");W.className=`control ${U}`;let q=document.createElement("div");q.className="name",q.innerText=D,W.appendChild(q);let he=document.createElement("div");he.className="input-holder",W.appendChild(he);let pe;C&&(pe=document.createElement("div"),pe.className="value",pe.innerText=Q,he.appendChild(pe));let oe=document.createElement("input");return oe.type=U,he.appendChild(oe),oe.addEventListener("keydown",me=>(me.preventDefault(),!1)),{elem:W,nameElem:q,inputHolderElem:he,valueElem:pe,inputElem:oe}}function J(D,U,C,Q,W,q,he=()=>{}){let pe=H(D,"range",!0,U);return pe.inputElem.value=U,pe.inputElem.min=C,pe.inputElem.max=Q,pe.inputElem.step=W,pe.inputElem.addEventListener("input",oe=>{pe.valueElem.innerText=pe.inputElem.value,q&&(l.lastFrame.value=null,l.renderedFrames.value=0,c.map=null,c.needsUpdate=!0),he(pe.inputElem.value)}),pe.elem}function te(D,U,C,Q=()=>{}){let W=H(D,"checkbox",!1);return W.inputElem.checked=U,W.inputElem.addEventListener("change",q=>{C&&(l.lastFrame.value=null,l.renderedFrames.value=0,c.map=null,c.needsUpdate=!0),d.focus(),Q(W.inputElem.checked)}),W.elem}function j(D,U,C,Q=()=>{}){let W=H(D,"color",!1);return W.inputElem.value=$(U),W.inputElem.addEventListener("input",q=>{C&&(l.lastFrame.value=null,l.renderedFrames.value=0,c.map=null,c.needsUpdate=!0),Q(N(W.inputElem.value))}),W.elem}function re(D,U,C,Q,W,q,he=()=>{}){let pe=H(D,"vector",!1);pe.inputHolderElem.replaceChildren();let oe=Object.keys(U).length,me=ae(`Vec${oe}`,!1);pe.inputHolderElem.appendChild(me[0]),pe.inputHolderElem.appendChild(me[1]),me=me[1];for(let Te=0;Te<oe;Te++){let Be=["x","y","z"][Te],We=J(Be,U[Be],C,Q,W,q,Ve=>{U[Be]=parseFloat(Ve),he(U)});me.appendChild(We)}return setInterval(()=>{let Te=me.getElementsByTagName("input");for(let Be=0;Be<Te.length;Be++){let We=["x","y","z"][Be],Ve=Te[Be];Ve.value=U[We],Ve.previousSibling.innerText=Math.round(U[We]*10)/10}},16.66),pe.elem}function ne(D){let U=o[D],C=r[U.type],Q=document.createElement("div"),W=ae(`${D}: ${U.name} - ${C}`,!1);Q.appendChild(W[0]),Q.appendChild(W[1]),W=W[1];let q=re("Pos",U.pos,-50,50,1,!0);if(W.appendChild(q),C=="sphere"){let oe=J("Radius",U.dims.x,0,20,.1,!0,me=>{U.dims.x=me});W.appendChild(oe)}else if(C=="tri"){let oe=re("Pos",U.dims,-50,50,1,!0);W.appendChild(oe);let me=re("Pos",U.dims2,-50,50,1,!0);W.appendChild(me)}else if(C=="quad"){let oe=re("Dimensions",new Oe(U.dims.x,U.dims.y),-50,50,1,!0,Te=>{U.dims.x=Te.x,U.dims.y=Te.y});W.appendChild(oe);let me=re("Rotation",U.dims2,-180,180,1,!0,Te=>{});W.appendChild(me)}let he=J("Material",U.mat,0,a.length,1,!0,oe=>{U.mat=oe});W.appendChild(he);let pe=te("Active",U.exists,!0,oe=>{U.exists=oe});return W.appendChild(pe),Q}function ye(D){let U=a[D],C=document.createElement("div"),Q=ae(D,!1);C.appendChild(Q[0]),C.appendChild(Q[1]),C.className="control-mat-list",Q=Q[1];let W=j("Color",U.color,!0,Te=>{U.color=Te});Q.appendChild(W);let q=j("Emission Color",U.emissionColor,!0,Te=>{U.emissionColor=Te});Q.appendChild(q);let he=J("Emission Strength",U.emissionStrength,0,10,.01,!0,Te=>{U.emissionStrength=Te});Q.appendChild(he);let pe=J("Smoothness",U.smoothness,0,1,.01,!0,Te=>{U.smoothness=Te});Q.appendChild(pe);let oe=J("Specular Prob.",U.specProb,0,1,.01,!0,Te=>{U.specProb=Te});Q.appendChild(oe);let me=j("Specular Color",U.specularColor,!0,Te=>{U.specularColor=Te});return Q.appendChild(me),C}function ae(D,U){let C=document.createElement("button");C.className="controls-toggle",C.innerText=D;let Q=document.createElement("div");return Q.className=`controls-submenu${U?" open":""}`,C.addEventListener("click",W=>{Q.classList.toggle("open")}),[C,Q]}function B(D,U=0){let C=[];for(let Q=0;Q<D.length;Q++){let W=D[Q],q;switch(W.type){case"menu":q=ae(W.name,W.open),q[1].style.setProperty("--depth",U+1);let he=B(W.controls,U+1);for(let pe in he){let oe=he[pe];q[1].appendChild(oe)}C.push(q[0]),C.push(q[1]);break;case"range":q=J(W.name,W.value,W.range[0],W.range[1],W.range[2],!0,W.callback),C.push(q);break;case"vector":q=re(W.name,W.value,W.range[0],W.range[1],W.range[2],!0,W.callback),C.push(q);break;case"check":q=te(W.name,W.value,!0,W.callback),C.push(q);break;case"color":q=j(W.name,W.value,!0,W.callback),C.push(q);break;case"object":q=ne(W.i),C.push(q);break;case"material":q=ye(W.i),C.push(q);break}}if(U==0)for(let Q in C){let W=C[Q];O.appendChild(W)}else return C}let Z=[{type:"menu",name:"controls",open:!0,controls:[{type:"range",name:"Bounce Limit",value:l.bounceLimit.value,range:[1,20,1],callback:D=>{l.bounceLimit.value=D}},{type:"range",name:"Rays/Pixel/Frame",value:l.raysPerPixel.value,range:[1,100,1],callback:D=>{l.raysPerPixel.value=D}},{type:"range",name:"Size Divisions",value:i,range:[1,10,1],callback:D=>{i=D,M()}},{type:"menu",name:"camera",open:!0,controls:[{type:"vector",name:"Position",value:l.cameraPos.value,range:[-100,100,1],callback:()=>{}},{type:"vector",name:"Rotation",value:l.cameraRot.value,range:[-180,180,1],callback:()=>{}},{type:"range",name:"FOV",value:l.fov.value,range:[10,179,1],callback:D=>{l.fov.value=D}},{type:"range",name:"Divergence",value:l.divergeStrength.value,range:[0,100,1],callback:D=>{l.divergeStrength.value=D}},{type:"range",name:"Defocus",value:l.defocusStrength.value,range:[0,200,1],callback:D=>{l.defocusStrength.value=D}},{type:"range",name:"Focus Plane",value:l.focusDist.value,range:[1,100,1],callback:D=>{l.focusDist.value=D}}]},{type:"menu",name:"skybox",open:!1,controls:[{type:"check",name:"Has Sky",value:l.hasSky.value,callback:D=>{l.hasSky.value=D}},{type:"color",name:"Color Horizon",value:l.skyColorHorizon.value,callback:D=>{l.skyColorHorizon.value=D}},{type:"color",name:"Color Zenith",value:l.skyColorZenith.value,callback:D=>{l.skyColorZenith.value=D}},{type:"color",name:"Color Ground",value:l.groundColor.value,callback:D=>{l.groundColor.value=D}},{type:"vector",name:"Sun Direction",value:l.sunLightDirection.value,range:[-5,5,.01],callback:()=>{}},{type:"range",name:"Sun Focus",value:l.sunFocus.value,range:[0,1e3,1],callback:D=>{l.sunFocus.value=D}},{type:"range",name:"Sun Intensity",value:l.sunIntensity.value,range:[0,100,1],callback:D=>{l.sunIntensity.value=D}}]},{type:"menu",name:"objects",open:!1,controls:function(){let D=[];for(let U=0;U<o.length;U++)D.push({type:"object",i:U});return D}()},{type:"menu",name:"materials",open:!1,controls:function(){let D=[];for(let U=0;U<a.length;U++)D.push({type:"material",i:U});return D}()}]}];B(Z)})();
