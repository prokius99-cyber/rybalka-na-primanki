/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="169";const dn="",jt="srgb",pn="srgb-linear",$r="display-p3",rr="display-p3-linear",Qi="linear",ct="srgb",er="rec709",tr="p3";const _s="300 es";class $n{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,Wr=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Oa(n,e){return(n%e+e)%e}function fr(n,e,t){return(1-t)*n+t*e}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],m=i[5],v=i[8],y=r[0],h=r[3],f=r[6],E=r[1],S=r[4],T=r[7],U=r[2],R=r[5],w=r[8];return s[0]=o*y+a*E+l*U,s[3]=o*h+a*S+l*R,s[6]=o*f+a*T+l*w,s[1]=c*y+u*E+d*U,s[4]=c*h+u*S+d*R,s[7]=c*f+u*T+d*w,s[2]=p*y+m*E+v*U,s[5]=p*h+m*S+v*R,s[8]=p*f+m*T+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,p=a*l-u*s,m=c*s-o*l,v=t*d+i*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=p*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dr.makeScale(e,t)),this}rotate(e){return this.premultiply(dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new ke;function ha(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function za(){const n=nr("canvas");return n.style.display="block",n}const gs={};function ji(n){n in gs||(gs[n]=!0,console.warn(n))}function Ga(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Ha(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Va(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vs=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xs=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),li={[pn]:{transfer:Qi,primaries:er,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[jt]:{transfer:ct,primaries:er,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[rr]:{transfer:Qi,primaries:tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(xs),fromReference:n=>n.applyMatrix3(vs)},[$r]:{transfer:ct,primaries:tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(xs),fromReference:n=>n.applyMatrix3(vs).convertLinearToSRGB()}},ka=new Set([pn,rr]),it={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ka.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=li[e].toReference,r=li[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return li[n].primaries},getTransfer:function(n){return n===dn?Qi:li[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(li[e].luminanceCoefficients)}};function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ln;class Wa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ln===void 0&&(Ln=nr("canvas")),Ln.width=e.width,Ln.height=e.height;const i=Ln.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ln}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xa=0;class fa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xa++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mr(r[o].image)):s.push(mr(r[o]))}else s=mr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function mr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qa=0;class At extends $n{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=1001,r=1001,s=1006,o=1008,a=1023,l=1009,c=At.DEFAULT_ANISOTROPY,u=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qa++}),this.uuid=_i(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=300;At.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],v=l[9],y=l[2],h=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-y)<.01&&Math.abs(v-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+y)<.1&&Math.abs(v+h)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,T=(m+1)/2,U=(f+1)/2,R=(u+p)/4,w=(d+y)/4,L=(v+h)/4;return S>T&&S>U?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=w/i):T>U?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=L/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=w/s,r=L/s),this.set(i,r,s,t),this}let E=Math.sqrt((h-v)*(h-v)+(d-y)*(d-y)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(h-v)/E,this.y=(d-y)/E,this.z=(p-u)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ya extends $n{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new At(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Ya{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class da extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ka extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],m=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=y;return}if(d!==y||l!==p||c!==m||u!==v){let h=1-a;const f=l*p+c*m+u*v+d*y,E=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const U=Math.sqrt(S),R=Math.atan2(U,f*E);h=Math.sin(h*R)/U,a=Math.sin(a*R)/U}const T=a*E;if(l=l*h+p*T,c=c*h+m*T,u=u*h+v*T,d=d*h+y*T,h===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],p=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*d+l*m-c*p,e[t+1]=l*v+u*p+c*d-a*m,e[t+2]=c*v+u*m+a*p-l*d,e[t+3]=u*v-a*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),p=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=p*u*d+c*m*v,this._y=c*m*d-p*u*v,this._z=c*u*v+p*m*d,this._w=c*u*d-p*m*v;break;case"YXZ":this._x=p*u*d+c*m*v,this._y=c*m*d-p*u*v,this._z=c*u*v-p*m*d,this._w=c*u*d+p*m*v;break;case"ZXY":this._x=p*u*d-c*m*v,this._y=c*m*d+p*u*v,this._z=c*u*v+p*m*d,this._w=c*u*d-p*m*v;break;case"ZYX":this._x=p*u*d-c*m*v,this._y=c*m*d+p*u*v,this._z=c*u*v-p*m*d,this._w=c*u*d+p*m*v;break;case"YZX":this._x=p*u*d+c*m*v,this._y=c*m*d+p*u*v,this._z=c*u*v-p*m*d,this._w=c*u*d-p*m*v;break;case"XZY":this._x=p*u*d-c*m*v,this._y=c*m*d-p*u*v,this._z=c*u*v+p*m*d,this._w=c*u*d+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ss.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ss.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new F,Ss=new Rn;class Cn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kt):kt.fromBufferAttribute(s,o),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ai.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ai.copy(i.boundingBox)),Ai.applyMatrix4(e.matrixWorld),this.union(Ai)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ci),bi.subVectors(this.max,ci),Dn.subVectors(e.a,ci),Un.subVectors(e.b,ci),In.subVectors(e.c,ci),on.subVectors(Un,Dn),ln.subVectors(In,Un),gn.subVectors(Dn,In);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-gn.z,gn.y,on.z,0,-on.x,ln.z,0,-ln.x,gn.z,0,-gn.x,-on.y,on.x,0,-ln.y,ln.x,0,-gn.y,gn.x,0];return!gr(t,Dn,Un,In,bi)||(t=[1,0,0,0,1,0,0,0,1],!gr(t,Dn,Un,In,bi))?!1:(wi.crossVectors(on,ln),t=[wi.x,wi.y,wi.z],gr(t,Dn,Un,In,bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new F,new F,new F,new F,new F,new F,new F,new F],kt=new F,Ai=new Cn,Dn=new F,Un=new F,In=new F,on=new F,ln=new F,gn=new F,ci=new F,bi=new F,wi=new F,vn=new F;function gr(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vn.fromArray(n,s);const a=r.x*Math.abs(vn.x)+r.y*Math.abs(vn.y)+r.z*Math.abs(vn.z),l=e.dot(vn),c=t.dot(vn),u=i.dot(vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $a=new Cn,ui=new F,vr=new F;class Zn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$a.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ui.subVectors(e,this.center);const t=ui.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ui,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ui.copy(e.center).add(vr)),this.expandByPoint(ui.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new F,xr=new F,Ri=new F,cn=new F,Sr=new F,Ci=new F,Mr=new F;class pa{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xr.copy(e).add(t).multiplyScalar(.5),Ri.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(xr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ri),a=cn.dot(this.direction),l=-cn.dot(Ri),c=cn.lengthSq(),u=Math.abs(1-o*o);let d,p,m,v;if(u>0)if(d=o*l-a,p=o*a-l,v=s*u,d>=0)if(p>=-v)if(p<=v){const y=1/u;d*=y,p*=y,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-v?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c):p<=v?(d=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xr).addScaledVector(Ri,p),m}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const i=tn.dot(this.direction),r=tn.dot(tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,i,r,s){Sr.subVectors(t,e),Ci.subVectors(i,e),Mr.crossVectors(Sr,Ci);let o=this.direction.dot(Mr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cn.subVectors(this.origin,e);const l=a*this.direction.dot(Ci.crossVectors(cn,Ci));if(l<0)return null;const c=a*this.direction.dot(Sr.cross(cn));if(c<0||l+c>o)return null;const u=-a*cn.dot(Mr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,s,o,a,l,c,u,d,p,m,v,y,h){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,p,m,v,y,h)}set(e,t,i,r,s,o,a,l,c,u,d,p,m,v,y,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=m,f[7]=v,f[11]=y,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fn.setFromMatrixColumn(e,0).length(),s=1/Fn.setFromMatrixColumn(e,1).length(),o=1/Fn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*u,m=o*d,v=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=p-y*c,t[9]=-a*l,t[2]=y-p*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,m=l*d,v=c*u,y=c*d;t[0]=p+y*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=y+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,m=l*d,v=c*u,y=c*d;t[0]=p-y*a,t[4]=-o*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=y-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,m=o*d,v=a*u,y=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=p*c+y,t[1]=l*d,t[5]=y*c+p,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=y-p*d,t[8]=v*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=p-y*d}else if(e.order==="XZY"){const p=o*l,m=o*c,v=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+y,t[5]=o*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=y*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Za,e,ja)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),un.crossVectors(i,Lt),un.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),un.crossVectors(i,Lt)),un.normalize(),Pi.crossVectors(Lt,un),r[0]=un.x,r[4]=Pi.x,r[8]=Lt.x,r[1]=un.y,r[5]=Pi.y,r[9]=Lt.y,r[2]=un.z,r[6]=Pi.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],m=i[13],v=i[2],y=i[6],h=i[10],f=i[14],E=i[3],S=i[7],T=i[11],U=i[15],R=r[0],w=r[4],L=r[8],q=r[12],_=r[1],M=r[5],H=r[9],G=r[13],k=r[2],Q=r[6],V=r[10],re=r[14],X=r[3],me=r[7],_e=r[11],Ee=r[15];return s[0]=o*R+a*_+l*k+c*X,s[4]=o*w+a*M+l*Q+c*me,s[8]=o*L+a*H+l*V+c*_e,s[12]=o*q+a*G+l*re+c*Ee,s[1]=u*R+d*_+p*k+m*X,s[5]=u*w+d*M+p*Q+m*me,s[9]=u*L+d*H+p*V+m*_e,s[13]=u*q+d*G+p*re+m*Ee,s[2]=v*R+y*_+h*k+f*X,s[6]=v*w+y*M+h*Q+f*me,s[10]=v*L+y*H+h*V+f*_e,s[14]=v*q+y*G+h*re+f*Ee,s[3]=E*R+S*_+T*k+U*X,s[7]=E*w+S*M+T*Q+U*me,s[11]=E*L+S*H+T*V+U*_e,s[15]=E*q+S*G+T*re+U*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],v=e[3],y=e[7],h=e[11],f=e[15];return v*(+s*l*d-r*c*d-s*a*p+i*c*p+r*a*m-i*l*m)+y*(+t*l*m-t*c*p+s*o*p-r*o*m+r*c*u-s*l*u)+h*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+f*(-r*a*u-t*l*d+t*a*p+r*o*d-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],v=e[12],y=e[13],h=e[14],f=e[15],E=d*h*c-y*p*c+y*l*m-a*h*m-d*l*f+a*p*f,S=v*p*c-u*h*c-v*l*m+o*h*m+u*l*f-o*p*f,T=u*y*c-v*d*c+v*a*m-o*y*m-u*a*f+o*d*f,U=v*d*l-u*y*l-v*a*p+o*y*p+u*a*h-o*d*h,R=t*E+i*S+r*T+s*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=E*w,e[1]=(y*p*s-d*h*s-y*r*m+i*h*m+d*r*f-i*p*f)*w,e[2]=(a*h*s-y*l*s+y*r*c-i*h*c-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*p*s-d*r*c+i*p*c+a*r*m-i*l*m)*w,e[4]=S*w,e[5]=(u*h*s-v*p*s+v*r*m-t*h*m-u*r*f+t*p*f)*w,e[6]=(v*l*s-o*h*s-v*r*c+t*h*c+o*r*f-t*l*f)*w,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*m+t*l*m)*w,e[8]=T*w,e[9]=(v*d*s-u*y*s-v*i*m+t*y*m+u*i*f-t*d*f)*w,e[10]=(o*y*s-v*a*s+v*i*c-t*y*c-o*i*f+t*a*f)*w,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*m-t*a*m)*w,e[12]=U*w,e[13]=(u*y*r-v*d*r+v*i*p-t*y*p-u*i*h+t*d*h)*w,e[14]=(v*a*r-o*y*r-v*i*l+t*y*l+o*i*h-t*a*h)*w,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*p+t*a*p)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,p=s*c,m=s*u,v=s*d,y=o*u,h=o*d,f=a*d,E=l*c,S=l*u,T=l*d,U=i.x,R=i.y,w=i.z;return r[0]=(1-(y+f))*U,r[1]=(m+T)*U,r[2]=(v-S)*U,r[3]=0,r[4]=(m-T)*R,r[5]=(1-(p+f))*R,r[6]=(h+E)*R,r[7]=0,r[8]=(v+S)*w,r[9]=(h-E)*w,r[10]=(1-(p+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fn.set(r[0],r[1],r[2]).length();const o=Fn.set(r[4],r[5],r[6]).length(),a=Fn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);const c=1/s,u=1/o,d=1/a;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=2e3){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let m,v;if(a===2e3)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===2001)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=2e3){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),p=(t+e)*c,m=(i+r)*u;let v,y;if(a===2e3)v=(o+s)*d,y=-2*d;else if(a===2001)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fn=new F,Wt=new lt,Za=new F(0,0,0),ja=new F(1,1,1),un=new F,Pi=new F,Lt=new F,Ms=new lt,ys=new Rn;class Yt{constructor(e=0,t=0,i=0,r=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ms.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ms,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ys.setFromEuler(this),this.setFromQuaternion(ys,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class ma{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ja=0;const Es=new F,Nn=new Rn,nn=new lt,Li=new F,hi=new F,Qa=new F,eo=new Rn,Ts=new F(1,0,0),As=new F(0,1,0),bs=new F(0,0,1),ws={type:"added"},to={type:"removed"},Bn={type:"childadded",child:null},yr={type:"childremoved",child:null};class Pt extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ja++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new F,t=new Yt,i=new Rn,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(Ts,e)}rotateY(e){return this.rotateOnAxis(As,e)}rotateZ(e){return this.rotateOnAxis(bs,e)}translateOnAxis(e,t){return Es.copy(e).applyQuaternion(this.quaternion),this.position.add(Es.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ts,e)}translateY(e){return this.translateOnAxis(As,e)}translateZ(e){return this.translateOnAxis(bs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Li.copy(e):Li.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(hi,Li,this.up):nn.lookAt(Li,hi,this.up),this.quaternion.setFromRotationMatrix(nn),r&&(nn.extractRotation(r.matrixWorld),Nn.setFromRotationMatrix(nn),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ws),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(to),yr.child=e,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ws),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,e,Qa),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,eo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new F(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new F,rn=new F,Er=new F,sn=new F,On=new F,zn=new F,Rs=new F,Tr=new F,Ar=new F,br=new F,wr=new ft,Rr=new ft,Cr=new ft;class qt{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xt.subVectors(r,t),rn.subVectors(i,t),Er.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(rn),l=Xt.dot(Er),c=rn.dot(rn),u=rn.dot(Er),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(c*l-a*u)*p,v=(o*u-a*l)*p;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sn.x),l.addScaledVector(o,sn.y),l.addScaledVector(a,sn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return wr.setScalar(0),Rr.setScalar(0),Cr.setScalar(0),wr.fromBufferAttribute(e,t),Rr.fromBufferAttribute(e,i),Cr.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(wr,s.x),o.addScaledVector(Rr,s.y),o.addScaledVector(Cr,s.z),o}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),rn.subVectors(e,t),Xt.cross(rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Xt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;On.subVectors(r,i),zn.subVectors(s,i),Tr.subVectors(e,i);const l=On.dot(Tr),c=zn.dot(Tr);if(l<=0&&c<=0)return t.copy(i);Ar.subVectors(e,r);const u=On.dot(Ar),d=zn.dot(Ar);if(u>=0&&d<=u)return t.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(On,o);br.subVectors(e,s);const m=On.dot(br),v=zn.dot(br);if(v>=0&&m<=v)return t.copy(s);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(zn,a);const h=u*v-m*d;if(h<=0&&d-u>=0&&m-v>=0)return Rs.subVectors(s,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(Rs,a);const f=1/(h+y+p);return o=y*f,a=p*f,t.copy(i).addScaledVector(On,o).addScaledVector(zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Di={h:0,s:0,l:0};function Pr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Oa(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Pr(o,s,e+1/3),this.g=Pr(o,s,e),this.b=Pr(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=_a[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return it.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Rt(Tt.r*255,0,255))*65536+Math.round(Rt(Tt.g*255,0,255))*256+Math.round(Rt(Tt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=jt){it.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Di);const i=fr(hn.h,Di.h,t),r=fr(hn.s,Di.s,t),s=fr(hn.l,Di.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new st;st.NAMES=_a;let no=0;class gi extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:no++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ga extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new F,Ui=new nt;class Ft{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix3(e),this.setXY(t,Ui.x,Ui.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class va extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xa extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nt extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}}let io=0;const Bt=new lt,Lr=new Pt,Gn=new F,Dt=new Cn,fi=new Cn,vt=new F;class zt extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:io++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ha(e)?xa:va)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return Lr.lookAt(e),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Dt.min,fi.min),Dt.expandByPoint(vt),vt.addVectors(Dt.max,fi.max),Dt.expandByPoint(vt)):(Dt.expandByPoint(fi.min),Dt.expandByPoint(fi.max))}Dt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(Gn.fromBufferAttribute(e,c),vt.add(Gn)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new F,l[L]=new F;const c=new F,u=new F,d=new F,p=new nt,m=new nt,v=new nt,y=new F,h=new F;function f(L,q,_){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,q),d.fromBufferAttribute(i,_),p.fromBufferAttribute(s,L),m.fromBufferAttribute(s,q),v.fromBufferAttribute(s,_),u.sub(c),d.sub(c),m.sub(p),v.sub(p);const M=1/(m.x*v.y-v.x*m.y);isFinite(M)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(M),h.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(M),a[L].add(y),a[q].add(y),a[_].add(y),l[L].add(h),l[q].add(h),l[_].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,q=E.length;L<q;++L){const _=E[L],M=_.start,H=_.count;for(let G=M,k=M+H;G<k;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new F,T=new F,U=new F,R=new F;function w(L){U.fromBufferAttribute(r,L),R.copy(U);const q=a[L];S.copy(q),S.sub(U.multiplyScalar(U.dot(q))).normalize(),T.crossVectors(R,q);const M=T.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,M)}for(let L=0,q=E.length;L<q;++L){const _=E[L],M=_.start,H=_.count;for(let G=M,k=M+H;G<k;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),y=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,h),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,h),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u);let m=0,v=0;for(let y=0,h=l.length;y<h;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let f=0;f<u;f++)p[v++]=c[m++]}return new Ft(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cs=new lt,xn=new pa,Ii=new Zn,Ps=new F,Fi=new F,Ni=new F,Bi=new F,Dr=new F,Oi=new F,Ls=new F,zi=new F;class mt extends Pt{constructor(e=new zt,t=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Dr.fromBufferAttribute(d,e),o?Oi.addScaledVector(Dr,u):Oi.addScaledVector(Dr.sub(t),u))}t.add(Oi)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ii.copy(i.boundingSphere),Ii.applyMatrix4(s),xn.copy(e.ray).recast(e.near),!(Ii.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Ii,Ps)===null||xn.origin.distanceToSquared(Ps)>(e.far-e.near)**2))&&(Cs.copy(s).invert(),xn.copy(e.ray).applyMatrix4(Cs),!(i.boundingBox!==null&&xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=p.length;v<y;v++){const h=p[v],f=o[h.materialIndex],E=Math.max(h.start,m.start),S=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let T=E,U=S;T<U;T+=3){const R=a.getX(T),w=a.getX(T+1),L=a.getX(T+2);r=Gi(this,f,e,i,c,u,d,R,w,L),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let h=v,f=y;h<f;h+=3){const E=a.getX(h),S=a.getX(h+1),T=a.getX(h+2);r=Gi(this,o,e,i,c,u,d,E,S,T),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=p.length;v<y;v++){const h=p[v],f=o[h.materialIndex],E=Math.max(h.start,m.start),S=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let T=E,U=S;T<U;T+=3){const R=T,w=T+1,L=T+2;r=Gi(this,f,e,i,c,u,d,R,w,L),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let h=v,f=y;h<f;h+=3){const E=h,S=h+1,T=h+2;r=Gi(this,o,e,i,c,u,d,E,S,T),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function ro(n,e,t,i,r,s,o,a){let l;if(e.side===1?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===0,a),l===null)return null;zi.copy(a),zi.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(zi);return c<t.near||c>t.far?null:{distance:c,point:zi.clone(),object:n}}function Gi(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Fi),n.getVertexPosition(l,Ni),n.getVertexPosition(c,Bi);const u=ro(n,e,t,i,Fi,Ni,Bi,Ls);if(u){const d=new F;qt.getBarycoord(Ls,Fi,Ni,Bi,d),r&&(u.uv=qt.getInterpolatedAttribute(r,a,l,c,d,new nt)),s&&(u.uv1=qt.getInterpolatedAttribute(s,a,l,c,d,new nt)),o&&(u.normal=qt.getInterpolatedAttribute(o,a,l,c,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new F,materialIndex:0};qt.getNormal(Fi,Ni,Bi,p.normal),u.face=p,u.barycoord=d}return u}class vi extends zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let p=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(d,2));function v(y,h,f,E,S,T,U,R,w,L,q){const _=T/w,M=U/L,H=T/2,G=U/2,k=R/2,Q=w+1,V=L+1;let re=0,X=0;const me=new F;for(let _e=0;_e<V;_e++){const Ee=_e*M-G;for(let $e=0;$e<Q;$e++){const Qe=$e*_-H;me[y]=Qe*E,me[h]=Ee*S,me[f]=k,c.push(me.x,me.y,me.z),me[y]=0,me[h]=0,me[f]=R>0?1:-1,u.push(me.x,me.y,me.z),d.push($e/w),d.push(1-_e/L),re+=1}}for(let _e=0;_e<L;_e++)for(let Ee=0;Ee<w;Ee++){const $e=p+Ee+Q*_e,Qe=p+Ee+Q*(_e+1),$=p+(Ee+1)+Q*(_e+1),te=p+(Ee+1)+Q*_e;l.push($e,Qe,te),l.push(Qe,$,te),X+=6}a.addGroup(m,X,q),m+=X,p+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kn(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=Kn(n[t]);for(const r in i)e[r]=i[r]}return e}function so(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sa(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ao={clone:Kn,merge:bt};var oo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oo,this.fragmentShader=lo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kn(e.uniforms),this.uniformsGroups=so(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ma extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new F,Ds=new nt,Us=new nt;class Ot extends Ma{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,Ds,Us),t.subVectors(Us,Ds)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hn=-90,Vn=1;class co extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ot(Hn,Vn,e,t);r.layers=this.layers,this.add(r);const s=new Ot(Hn,Vn,e,t);s.layers=this.layers,this.add(s);const o=new Ot(Hn,Vn,e,t);o.layers=this.layers,this.add(o);const a=new Ot(Hn,Vn,e,t);a.layers=this.layers,this.add(a);const l=new Ot(Hn,Vn,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Hn,Vn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ya extends At{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uo extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ya(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const o=new mt(r,s),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new co(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ur=new F,ho=new F,fo=new ke;class En{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ur.subVectors(i,t).cross(ho.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ur),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fo.getNormalMatrix(e),r=this.coplanarPoint(Ur).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new Zn,Hi=new F;class Ea{constructor(e=new En,t=new En,i=new En,r=new En,s=new En,o=new En){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],m=r[8],v=r[9],y=r[10],h=r[11],f=r[12],E=r[13],S=r[14],T=r[15];if(i[0].setComponents(l-s,p-c,h-m,T-f).normalize(),i[1].setComponents(l+s,p+c,h+m,T+f).normalize(),i[2].setComponents(l+o,p+u,h+v,T+E).normalize(),i[3].setComponents(l-o,p-u,h-v,T-E).normalize(),i[4].setComponents(l-a,p-d,h-y,T-S).normalize(),t===2e3)i[5].setComponents(l+a,p+d,h+y,T+S).normalize();else if(t===2001)i[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hi.x=r.normal.x>0?e.max.x:e.min.x,Hi.y=r.normal.y>0?e.max.y:e.min.y,Hi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ta(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function po(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<d.length;m++){const v=d[p],y=d[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++p,d[p]=y)}d.length=p+1;for(let m=0,v=d.length;m<v;m++){const y=d[m];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class It extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,p=t/l,m=[],v=[],y=[],h=[];for(let f=0;f<u;f++){const E=f*p-o;for(let S=0;S<c;S++){const T=S*d-s;v.push(T,-E,0),y.push(0,0,1),h.push(S/a),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const S=E+c*f,T=E+c*(f+1),U=E+1+c*(f+1),R=E+1+c*f;m.push(S,T,R),m.push(T,U,R)}this.setIndex(m),this.setAttribute("position",new Nt(v,3)),this.setAttribute("normal",new Nt(y,3)),this.setAttribute("uv",new Nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.widthSegments,e.heightSegments)}}var mo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_o=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,go=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,So=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,To=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ao=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wo=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ro=`#ifdef USE_IRIDESCENCE
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
#endif`,Co=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Po=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Lo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Do=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Io=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,No=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bo=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oo=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,zo=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Go=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ho=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ko=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xo="gl_FragColor = linearToOutputTexel( gl_FragColor );",qo=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yo=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ko=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$o=`#ifdef USE_ENVMAP
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
#endif`,Zo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jo=`#ifdef USE_ENVMAP
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
#endif`,Jo=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qo=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,el=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nl=`#ifdef USE_GRADIENTMAP
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
}`,il=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,al=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,ol=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ll=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ul=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,pl=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ml=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_l=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gl=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vl=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xl=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sl=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ml=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,El=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tl=`#if defined( USE_POINTS_UV )
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
#endif`,Al=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ll=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Ul=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Il=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,Ol=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Wl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ql=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$l=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ql=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ec=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ic=`#ifdef USE_SKINNING
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
#endif`,rc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ac=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lc=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cc=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,hc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,fc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,dc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mc=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,_c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Mc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Ec=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ac=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bc=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wc=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rc=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Cc=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Lc=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Uc=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ic=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Fc=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Bc=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zc=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hc=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vc=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,kc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Xc=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Yc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:mo,alphahash_pars_fragment:_o,alphamap_fragment:go,alphamap_pars_fragment:vo,alphatest_fragment:xo,alphatest_pars_fragment:So,aomap_fragment:Mo,aomap_pars_fragment:yo,batching_pars_vertex:Eo,batching_vertex:To,begin_vertex:Ao,beginnormal_vertex:bo,bsdfs:wo,iridescence_fragment:Ro,bumpmap_pars_fragment:Co,clipping_planes_fragment:Po,clipping_planes_pars_fragment:Lo,clipping_planes_pars_vertex:Do,clipping_planes_vertex:Uo,color_fragment:Io,color_pars_fragment:Fo,color_pars_vertex:No,color_vertex:Bo,common:Oo,cube_uv_reflection_fragment:zo,defaultnormal_vertex:Go,displacementmap_pars_vertex:Ho,displacementmap_vertex:Vo,emissivemap_fragment:ko,emissivemap_pars_fragment:Wo,colorspace_fragment:Xo,colorspace_pars_fragment:qo,envmap_fragment:Yo,envmap_common_pars_fragment:Ko,envmap_pars_fragment:$o,envmap_pars_vertex:Zo,envmap_physical_pars_fragment:ol,envmap_vertex:jo,fog_vertex:Jo,fog_pars_vertex:Qo,fog_fragment:el,fog_pars_fragment:tl,gradientmap_pars_fragment:nl,lightmap_pars_fragment:il,lights_lambert_fragment:rl,lights_lambert_pars_fragment:sl,lights_pars_begin:al,lights_toon_fragment:ll,lights_toon_pars_fragment:cl,lights_phong_fragment:ul,lights_phong_pars_fragment:hl,lights_physical_fragment:fl,lights_physical_pars_fragment:dl,lights_fragment_begin:pl,lights_fragment_maps:ml,lights_fragment_end:_l,logdepthbuf_fragment:gl,logdepthbuf_pars_fragment:vl,logdepthbuf_pars_vertex:xl,logdepthbuf_vertex:Sl,map_fragment:Ml,map_pars_fragment:yl,map_particle_fragment:El,map_particle_pars_fragment:Tl,metalnessmap_fragment:Al,metalnessmap_pars_fragment:bl,morphinstance_vertex:wl,morphcolor_vertex:Rl,morphnormal_vertex:Cl,morphtarget_pars_vertex:Pl,morphtarget_vertex:Ll,normal_fragment_begin:Dl,normal_fragment_maps:Ul,normal_pars_fragment:Il,normal_pars_vertex:Fl,normal_vertex:Nl,normalmap_pars_fragment:Bl,clearcoat_normal_fragment_begin:Ol,clearcoat_normal_fragment_maps:zl,clearcoat_pars_fragment:Gl,iridescence_pars_fragment:Hl,opaque_fragment:Vl,packing:kl,premultiplied_alpha_fragment:Wl,project_vertex:Xl,dithering_fragment:ql,dithering_pars_fragment:Yl,roughnessmap_fragment:Kl,roughnessmap_pars_fragment:$l,shadowmap_pars_fragment:Zl,shadowmap_pars_vertex:jl,shadowmap_vertex:Jl,shadowmask_pars_fragment:Ql,skinbase_vertex:ec,skinning_pars_vertex:tc,skinning_vertex:nc,skinnormal_vertex:ic,specularmap_fragment:rc,specularmap_pars_fragment:sc,tonemapping_fragment:ac,tonemapping_pars_fragment:oc,transmission_fragment:lc,transmission_pars_fragment:cc,uv_pars_fragment:uc,uv_pars_vertex:hc,uv_vertex:fc,worldpos_vertex:dc,background_vert:pc,background_frag:mc,backgroundCube_vert:_c,backgroundCube_frag:gc,cube_vert:vc,cube_frag:xc,depth_vert:Sc,depth_frag:Mc,distanceRGBA_vert:yc,distanceRGBA_frag:Ec,equirect_vert:Tc,equirect_frag:Ac,linedashed_vert:bc,linedashed_frag:wc,meshbasic_vert:Rc,meshbasic_frag:Cc,meshlambert_vert:Pc,meshlambert_frag:Lc,meshmatcap_vert:Dc,meshmatcap_frag:Uc,meshnormal_vert:Ic,meshnormal_frag:Fc,meshphong_vert:Nc,meshphong_frag:Bc,meshphysical_vert:Oc,meshphysical_frag:zc,meshtoon_vert:Gc,meshtoon_frag:Hc,points_vert:Vc,points_frag:kc,shadow_vert:Wc,shadow_frag:Xc,sprite_vert:qc,sprite_frag:Yc},ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Jt={basic:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new st(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new st(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:bt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:bt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:bt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:bt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:bt([ce.lights,ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Jt.physical={uniforms:bt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Vi={r:0,b:0,g:0},Mn=new Yt,Kc=new lt;function $c(n,e,t,i,r,s,o){const a=new st(0);let l=s===!0?0:1,c,u,d=null,p=0,m=null;function v(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function y(E){let S=!1;const T=v(E);T===null?f(a,l):T&&T.isColor&&(f(T,1),S=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(E,S){const T=v(S);T&&(T.isCubeTexture||T.mapping===306)?(u===void 0&&(u=new mt(new vi(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Kn(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mn.copy(S.backgroundRotation),Mn.x*=-1,Mn.y*=-1,Mn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mn.y*=-1,Mn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kc.makeRotationFromEuler(Mn)),u.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,(d!==T||p!==T.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,p=T.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new mt(new It(2,2),new an({name:"BackgroundMaterial",uniforms:Kn(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,p=T.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,S){E.getRGB(Vi,Sa(n)),i.buffers.color.setClear(Vi.r,Vi.g,Vi.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:y,addToRenderList:h}}function Zc(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(_,M,H,G,k){let Q=!1;const V=d(G,H,M);s!==V&&(s=V,c(s.object)),Q=m(_,G,H,k),Q&&v(_,G,H,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,T(_,M,H,G),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,M,H){const G=H.wireframe===!0;let k=i[_.id];k===void 0&&(k={},i[_.id]=k);let Q=k[M.id];Q===void 0&&(Q={},k[M.id]=Q);let V=Q[G];return V===void 0&&(V=p(l()),Q[G]=V),V}function p(_){const M=[],H=[],G=[];for(let k=0;k<t;k++)M[k]=0,H[k]=0,G[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:H,attributeDivisors:G,object:_,attributes:{},index:null}}function m(_,M,H,G){const k=s.attributes,Q=M.attributes;let V=0;const re=H.getAttributes();for(const X in re)if(re[X].location>=0){const _e=k[X];let Ee=Q[X];if(Ee===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(Ee=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(Ee=_.instanceColor)),_e===void 0||_e.attribute!==Ee||Ee&&_e.data!==Ee.data)return!0;V++}return s.attributesNum!==V||s.index!==G}function v(_,M,H,G){const k={},Q=M.attributes;let V=0;const re=H.getAttributes();for(const X in re)if(re[X].location>=0){let _e=Q[X];_e===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor));const Ee={};Ee.attribute=_e,_e&&_e.data&&(Ee.data=_e.data),k[X]=Ee,V++}s.attributes=k,s.attributesNum=V,s.index=G}function y(){const _=s.newAttributes;for(let M=0,H=_.length;M<H;M++)_[M]=0}function h(_){f(_,0)}function f(_,M){const H=s.newAttributes,G=s.enabledAttributes,k=s.attributeDivisors;H[_]=1,G[_]===0&&(n.enableVertexAttribArray(_),G[_]=1),k[_]!==M&&(n.vertexAttribDivisor(_,M),k[_]=M)}function E(){const _=s.newAttributes,M=s.enabledAttributes;for(let H=0,G=M.length;H<G;H++)M[H]!==_[H]&&(n.disableVertexAttribArray(H),M[H]=0)}function S(_,M,H,G,k,Q,V){V===!0?n.vertexAttribIPointer(_,M,H,k,Q):n.vertexAttribPointer(_,M,H,G,k,Q)}function T(_,M,H,G){y();const k=G.attributes,Q=H.getAttributes(),V=M.defaultAttributeValues;for(const re in Q){const X=Q[re];if(X.location>=0){let me=k[re];if(me===void 0&&(re==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),re==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),me!==void 0){const _e=me.normalized,Ee=me.itemSize,$e=e.get(me);if($e===void 0)continue;const Qe=$e.buffer,$=$e.type,te=$e.bytesPerElement,Se=$===n.INT||$===n.UNSIGNED_INT||me.gpuType===1013;if(me.isInterleavedBufferAttribute){const he=me.data,ze=he.stride,be=me.offset;if(he.isInstancedInterleavedBuffer){for(let qe=0;qe<X.locationSize;qe++)f(X.location+qe,he.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let qe=0;qe<X.locationSize;qe++)h(X.location+qe);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let qe=0;qe<X.locationSize;qe++)S(X.location+qe,Ee/X.locationSize,$,_e,ze*te,(be+Ee/X.locationSize*qe)*te,Se)}else{if(me.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)f(X.location+he,me.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let he=0;he<X.locationSize;he++)h(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let he=0;he<X.locationSize;he++)S(X.location+he,Ee/X.locationSize,$,_e,Ee*te,Ee/X.locationSize*he*te,Se)}}else if(V!==void 0){const _e=V[re];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(X.location,_e);break;case 3:n.vertexAttrib3fv(X.location,_e);break;case 4:n.vertexAttrib4fv(X.location,_e);break;default:n.vertexAttrib1fv(X.location,_e)}}}}E()}function U(){L();for(const _ in i){const M=i[_];for(const H in M){const G=M[H];for(const k in G)u(G[k].object),delete G[k];delete M[H]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const M=i[_.id];for(const H in M){const G=M[H];for(const k in G)u(G[k].object),delete G[k];delete M[H]}delete i[_.id]}function w(_){for(const M in i){const H=i[M];if(H[_.id]===void 0)continue;const G=H[_.id];for(const k in G)u(G[k].object),delete G[k];delete H[_.id]}}function L(){q(),o=!0,s!==r&&(s=r,c(s.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:q,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:h,disableUnusedAttributes:E}}function jc(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,i,1)}function l(c,u,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let v=0;for(let y=0;y<d;y++)v+=u[y];for(let y=0;y<p.length;y++)t.update(v,i,p[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jc(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==1023&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==1009&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==1015&&!L)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:U,maxSamples:R}}function Qc(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new En,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){const v=d.clippingPlanes,y=d.clipIntersection,h=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!h)s?u(null):c();else{const E=s?0:i,S=E*4;let T=f.clippingState||null;l.value=T,T=u(v,p,S,m);for(let U=0;U!==S;++U)T[U]=t[U];f.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,m,v){const y=d!==null?d.length:0;let h=null;if(y!==0){if(h=l.value,v!==!0||h===null){const f=m+y*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(h===null||h.length<f)&&(h=new Float32Array(f));for(let S=0,T=m;S!==y;++S,T+=4)o.copy(d[S]).applyMatrix4(E,a),o.normal.toArray(h,T),h[T+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,h}}function eu(n){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uo(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tu extends Ma{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qn=4,Is=[.125,.215,.35,.446,.526,.582],bn=20,Ir=new tu,Fs=new st;let Fr=null,Nr=0,Br=0,Or=!1;const Tn=(1+Math.sqrt(5))/2,kn=1/Tn,Ns=[new F(-Tn,kn,0),new F(Tn,kn,0),new F(-kn,0,Tn),new F(kn,0,Tn),new F(0,Tn,-kn),new F(0,Tn,kn),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Bs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Fr=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Nr,Br),this._renderer.xr.enabled=Or,e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:pn,depthBuffer:!1},r=Os(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Os(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nu(s)),this._blurMaterial=iu(s,e,t)}return r}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,i,r){const a=new Ot(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Fs),u.toneMapping=0,u.autoClear=!1;const m=new ga({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),v=new mt(new vi,m);let y=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,y=!0):(m.color.copy(Fs),y=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const S=this._cubeSize;ki(r,E*S,f>2?S:0,S,S),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zs());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ki(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ir)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ns[(r-s-1)%Ns.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new mt(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*bn-1),y=s/v,h=isFinite(s)?1+Math.floor(u*y):bn;h>bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${bn}`);const f=[];let E=0;for(let w=0;w<bn;++w){const L=w/y,q=Math.exp(-L*L/2);f.push(q),w===0?E+=q:w<h&&(E+=2*q)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-i;const T=this._sizeLods[r],U=3*T*(r>S-qn?r-S+qn:0),R=4*(this._cubeSize-T);ki(t,U,R,3*T,2*T),l.setRenderTarget(t),l.render(d,Ir)}}function nu(n){const e=[],t=[],i=[];let r=n;const s=n-qn+1+Is.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-qn?l=Is[o-n+qn-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,y=3,h=2,f=1,E=new Float32Array(y*v*m),S=new Float32Array(h*v*m),T=new Float32Array(f*v*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,L=R>2?0:-1,q=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];E.set(q,y*v*R),S.set(p,h*v*R);const _=[R,R,R,R,R,R];T.set(_,f*v*R)}const U=new zt;U.setAttribute("position",new Ft(E,y)),U.setAttribute("uv",new Ft(S,h)),U.setAttribute("faceIndex",new Ft(T,f)),e.push(U),r>qn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Os(n,e,t){const i=new wn(n,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ki(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iu(n,e,t){const i=new Float32Array(bn),r=new F(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function zs(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gs(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zr(){return`

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
	`}function ru(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Bs(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Bs(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function su(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ji("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function au(n,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const y=p.morphAttributes[v];for(let h=0,f=y.length;h<f;h++)e.remove(y[h])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const v in p)e.update(p[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const y=m[v];for(let h=0,f=y.length;h<f;h++)e.update(y[h],n.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,v=d.attributes.position;let y=0;if(m!==null){const E=m.array;y=m.version;for(let S=0,T=E.length;S<T;S+=3){const U=E[S+0],R=E[S+1],w=E[S+2];p.push(U,R,R,w,w,U)}}else if(v!==void 0){const E=v.array;y=v.version;for(let S=0,T=E.length/3-1;S<T;S+=3){const U=S+0,R=S+1,w=S+2;p.push(U,R,R,w,w,U)}}else return;const h=new(ha(p)?xa:va)(p,1);h.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,h)}function u(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function ou(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,m){n.drawElements(i,m,s,p*o),t.update(m,i,1)}function c(p,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,p*o,v),t.update(m,i,v))}function u(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,v);let h=0;for(let f=0;f<v;f++)h+=m[f];t.update(h,i,1)}function d(p,m,v,y){if(v===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<p.length;f++)c(p[f]/o,m[f],y[f]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,y,0,v);let f=0;for(let E=0;E<v;E++)f+=m[E];for(let E=0;E<y.length;E++)t.update(f,i,y[E])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function lu(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cu(n,e,t){const i=new WeakMap,r=new ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let q=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",q)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),y===!0&&(S=3);let T=a.attributes.position.count*S,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*U*4*d),w=new da(R,T,U,d);w.type=1015,w.needsUpdate=!0;const L=S*4;for(let _=0;_<d;_++){const M=h[_],H=f[_],G=E[_],k=T*U*4*_;for(let Q=0;Q<M.count;Q++){const V=Q*L;m===!0&&(r.fromBufferAttribute(M,Q),R[k+V+0]=r.x,R[k+V+1]=r.y,R[k+V+2]=r.z,R[k+V+3]=0),v===!0&&(r.fromBufferAttribute(H,Q),R[k+V+4]=r.x,R[k+V+5]=r.y,R[k+V+6]=r.z,R[k+V+7]=0),y===!0&&(r.fromBufferAttribute(G,Q),R[k+V+8]=r.x,R[k+V+9]=r.y,R[k+V+10]=r.z,R[k+V+11]=G.itemSize===4?r.w:1)}}p={count:d,texture:w,size:new nt(T,U)},i.set(a,p),a.addEventListener("dispose",q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function uu(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Aa extends At{constructor(e,t,i,r,s,o,a,l,c,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===1026&&(i=1014),i===void 0&&u===1027&&(i=1020),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ba=new At,Hs=new Aa(1,1),wa=new da,Ra=new Ka,Ca=new ya,Vs=[],ks=[],Ws=new Float32Array(16),Xs=new Float32Array(9),qs=new Float32Array(4);function jn(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vs[r];if(s===void 0&&(s=new Float32Array(r),Vs[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sr(n,e){let t=ks[e];t===void 0&&(t=new Int32Array(e),ks[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hu(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function du(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function pu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function mu(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,i))return;qs.set(i),n.uniformMatrix2fv(this.addr,!1,qs),gt(t,i)}}function _u(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,i))return;Xs.set(i),n.uniformMatrix3fv(this.addr,!1,Xs),gt(t,i)}}function gu(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,i))return;Ws.set(i),n.uniformMatrix4fv(this.addr,!1,Ws),gt(t,i)}}function vu(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function Su(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function Mu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function yu(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Eu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function Tu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function Au(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function bu(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hs.compareFunction=515,s=Hs):s=ba,t.setTexture2D(e||s,r)}function wu(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ra,r)}function Ru(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ca,r)}function Cu(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wa,r)}function Pu(n){switch(n){case 5126:return hu;case 35664:return fu;case 35665:return du;case 35666:return pu;case 35674:return mu;case 35675:return _u;case 35676:return gu;case 5124:case 35670:return vu;case 35667:case 35671:return xu;case 35668:case 35672:return Su;case 35669:case 35673:return Mu;case 5125:return yu;case 36294:return Eu;case 36295:return Tu;case 36296:return Au;case 35678:case 36198:case 36298:case 36306:case 35682:return bu;case 35679:case 36299:case 36307:return wu;case 35680:case 36300:case 36308:case 36293:return Ru;case 36289:case 36303:case 36311:case 36292:return Cu}}function Lu(n,e){n.uniform1fv(this.addr,e)}function Du(n,e){const t=jn(e,this.size,2);n.uniform2fv(this.addr,t)}function Uu(n,e){const t=jn(e,this.size,3);n.uniform3fv(this.addr,t)}function Iu(n,e){const t=jn(e,this.size,4);n.uniform4fv(this.addr,t)}function Fu(n,e){const t=jn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nu(n,e){const t=jn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bu(n,e){const t=jn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ou(n,e){n.uniform1iv(this.addr,e)}function zu(n,e){n.uniform2iv(this.addr,e)}function Gu(n,e){n.uniform3iv(this.addr,e)}function Hu(n,e){n.uniform4iv(this.addr,e)}function Vu(n,e){n.uniform1uiv(this.addr,e)}function ku(n,e){n.uniform2uiv(this.addr,e)}function Wu(n,e){n.uniform3uiv(this.addr,e)}function Xu(n,e){n.uniform4uiv(this.addr,e)}function qu(n,e,t){const i=this.cache,r=e.length,s=sr(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ba,s[o])}function Yu(n,e,t){const i=this.cache,r=e.length,s=sr(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ra,s[o])}function Ku(n,e,t){const i=this.cache,r=e.length,s=sr(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ca,s[o])}function $u(n,e,t){const i=this.cache,r=e.length,s=sr(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wa,s[o])}function Zu(n){switch(n){case 5126:return Lu;case 35664:return Du;case 35665:return Uu;case 35666:return Iu;case 35674:return Fu;case 35675:return Nu;case 35676:return Bu;case 5124:case 35670:return Ou;case 35667:case 35671:return zu;case 35668:case 35672:return Gu;case 35669:case 35673:return Hu;case 5125:return Vu;case 36294:return ku;case 36295:return Wu;case 36296:return Xu;case 35678:case 36198:case 36298:case 36306:case 35682:return qu;case 35679:case 36299:case 36307:return Yu;case 35680:case 36300:case 36308:case 36293:return Ku;case 36289:case 36303:case 36311:case 36292:return $u}}class ju{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pu(t.type)}}class Ju{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zu(t.type)}}class Qu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function Ys(n,e){n.seq.push(e),n.map[e.id]=e}function eh(n,e,t){const i=n.name,r=i.length;for(zr.lastIndex=0;;){const s=zr.exec(i),o=zr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ys(t,c===void 0?new ju(a,n,e):new Ju(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Qu(a),Ys(t,d)),t=d}}}class Ji{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);eh(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ks(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const th=37297;let nh=0;function ih(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function rh(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===tr&&t===er?i="LinearDisplayP3ToLinearSRGB":e===er&&t===tr&&(i="LinearSRGBToLinearDisplayP3"),n){case pn:case rr:return[i,"LinearTransferOETF"];case jt:case $r:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function $s(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ih(n.getShaderSource(e),o)}else return r}function sh(n,e){const t=rh(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ah(n,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wi=new F;function oh(){it.getLuminanceCoefficients(Wi);const n=Wi.x.toFixed(4),e=Wi.y.toFixed(4),t=Wi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lh(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mi).join(`
`)}function ch(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uh(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mi(n){return n!==""}function Zs(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function js(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(n){return n.replace(hh,dh)}const fh=new Map;function dh(n,e){let t=Ve[e];if(t===void 0){const i=fh.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xr(t)}const ph=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Js(n){return n.replace(ph,mh)}function mh(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qs(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _h(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function gh(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vh(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function xh(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Sh(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Mh(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_h(t),c=gh(t),u=vh(t),d=xh(t),p=Sh(t),m=lh(t),v=ch(s),y=r.createProgram();let h,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(mi).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(mi).join(`
`),f.length>0&&(f+=`
`)):(h=[Qs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mi).join(`
`),f=[Qs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ve.tonemapping_pars_fragment:"",t.toneMapping!==0?ah("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,sh("linearToOutputTexel",t.outputColorSpace),oh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mi).join(`
`)),o=Xr(o),o=Zs(o,t),o=js(o,t),a=Xr(a),a=Zs(a,t),a=js(a,t),o=Js(o),a=Js(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",t.glslVersion===_s?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=E+h+o,T=E+f+a,U=Ks(r,r.VERTEX_SHADER,S),R=Ks(r,r.FRAGMENT_SHADER,T);r.attachShader(y,U),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(M){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(U).trim(),k=r.getShaderInfoLog(R).trim();let Q=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,U,R);else{const re=$s(r,U,"vertex"),X=$s(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+H+`
`+re+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||k==="")&&(V=!1);V&&(M.diagnostics={runnable:Q,programLog:H,vertexShader:{log:G,prefix:h},fragmentShader:{log:k,prefix:f}})}r.deleteShader(U),r.deleteShader(R),L=new Ji(r,y),q=uh(r,y)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let q;this.getAttributes=function(){return q===void 0&&w(this),q};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,th)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nh++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=R,this}let yh=0;class Eh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Th(e),t.set(e,i)),i}}class Th{constructor(e){this.id=yh++,this.code=e,this.usedTimes=0}}function Ah(n,e,t,i,r,s,o){const a=new ma,l=new Eh,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,M,H,G,k){const Q=G.fog,V=k.geometry,re=_.isMeshStandardMaterial?G.environment:null,X=(_.isMeshStandardMaterial?t:e).get(_.envMap||re),me=X&&X.mapping===306?X.image.height:null,_e=y[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const Ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$e=Ee!==void 0?Ee.length:0;let Qe=0;V.morphAttributes.position!==void 0&&(Qe=1),V.morphAttributes.normal!==void 0&&(Qe=2),V.morphAttributes.color!==void 0&&(Qe=3);let $,te,Se,he;if(_e){const St=Jt[_e];$=St.vertexShader,te=St.fragmentShader}else $=_.vertexShader,te=_.fragmentShader,l.update(_),Se=l.getVertexShaderID(_),he=l.getFragmentShaderID(_);const ze=n.getRenderTarget(),be=k.isInstancedMesh===!0,qe=k.isBatchedMesh===!0,et=!!_.map,He=!!_.matcap,C=!!X,xt=!!_.aoMap,Ye=!!_.lightMap,We=!!_.bumpMap,Le=!!_.normalMap,rt=!!_.displacementMap,Ce=!!_.emissiveMap,b=!!_.metalnessMap,g=!!_.roughnessMap,N=_.anisotropy>0,j=_.clearcoat>0,ee=_.dispersion>0,Z=_.iridescence>0,Te=_.sheen>0,oe=_.transmission>0,fe=N&&!!_.anisotropyMap,Ke=j&&!!_.clearcoatMap,ne=j&&!!_.clearcoatNormalMap,ve=j&&!!_.clearcoatRoughnessMap,De=Z&&!!_.iridescenceMap,Fe=Z&&!!_.iridescenceThicknessMap,Me=Te&&!!_.sheenColorMap,Xe=Te&&!!_.sheenRoughnessMap,Oe=!!_.specularMap,tt=!!_.specularColorMap,P=!!_.specularIntensityMap,pe=oe&&!!_.transmissionMap,W=oe&&!!_.thicknessMap,J=!!_.gradientMap,de=!!_.alphaMap,ge=_.alphaTest>0,Ze=!!_.alphaHash,ut=!!_.extensions;let pt=0;_.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(pt=n.toneMapping);const je={shaderID:_e,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:te,defines:_.defines,customVertexShaderID:Se,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:qe,batchingColor:qe&&k._colorsTexture!==null,instancing:be,instancingColor:be&&k.instanceColor!==null,instancingMorph:be&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:pn,alphaToCoverage:!!_.alphaToCoverage,map:et,matcap:He,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:me,aoMap:xt,lightMap:Ye,bumpMap:We,normalMap:Le,displacementMap:m&&rt,emissiveMap:Ce,normalMapObjectSpace:Le&&_.normalMapType===1,normalMapTangentSpace:Le&&_.normalMapType===0,metalnessMap:b,roughnessMap:g,anisotropy:N,anisotropyMap:fe,clearcoat:j,clearcoatMap:Ke,clearcoatNormalMap:ne,clearcoatRoughnessMap:ve,dispersion:ee,iridescence:Z,iridescenceMap:De,iridescenceThicknessMap:Fe,sheen:Te,sheenColorMap:Me,sheenRoughnessMap:Xe,specularMap:Oe,specularColorMap:tt,specularIntensityMap:P,transmission:oe,transmissionMap:pe,thicknessMap:W,gradientMap:J,opaque:_.transparent===!1&&_.blending===1&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:ge,alphaHash:Ze,combine:_.combine,mapUv:et&&h(_.map.channel),aoMapUv:xt&&h(_.aoMap.channel),lightMapUv:Ye&&h(_.lightMap.channel),bumpMapUv:We&&h(_.bumpMap.channel),normalMapUv:Le&&h(_.normalMap.channel),displacementMapUv:rt&&h(_.displacementMap.channel),emissiveMapUv:Ce&&h(_.emissiveMap.channel),metalnessMapUv:b&&h(_.metalnessMap.channel),roughnessMapUv:g&&h(_.roughnessMap.channel),anisotropyMapUv:fe&&h(_.anisotropyMap.channel),clearcoatMapUv:Ke&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&h(_.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&h(_.sheenRoughnessMap.channel),specularMapUv:Oe&&h(_.specularMap.channel),specularColorMapUv:tt&&h(_.specularColorMap.channel),specularIntensityMapUv:P&&h(_.specularIntensityMap.channel),transmissionMapUv:pe&&h(_.transmissionMap.channel),thicknessMapUv:W&&h(_.thicknessMap.channel),alphaMapUv:de&&h(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Le||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(et||de),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:$e,morphTextureStride:Qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:et&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===2,flipSided:_.side===1,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function E(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const H in _.defines)M.push(H),M.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(S(M,_),T(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function S(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function T(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function U(_){const M=y[_.type];let H;if(M){const G=Jt[M];H=ao.clone(G.uniforms)}else H=_.uniforms;return H}function R(_,M){let H;for(let G=0,k=u.length;G<k;G++){const Q=u[G];if(Q.cacheKey===M){H=Q,++H.usedTimes;break}}return H===void 0&&(H=new Mh(n,M,_,s),u.push(H)),H}function w(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function L(_){l.remove(_)}function q(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:U,acquireProgram:R,releaseProgram:w,releaseShaderCache:L,programs:u,dispose:q}}function bh(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ea(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ta(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,m,v,y,h){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:v,renderOrder:d.renderOrder,z:y,group:h},n[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=y,f.group=h),e++,f}function a(d,p,m,v,y,h){const f=o(d,p,m,v,y,h);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(d,p,m,v,y,h){const f=o(d,p,m,v,y,h);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||wh),i.length>1&&i.sort(p||ea),r.length>1&&r.sort(p||ea)}function u(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Rh(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ta,n.set(i,[o])):r>=s.length?(o=new ta,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ch(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new st};break;case"SpotLight":t={position:new F,direction:new F,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Ph(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lh=0;function Dh(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uh(n){const e=new Ch,t=Ph(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new lt,o=new lt;function a(c){let u=0,d=0,p=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let m=0,v=0,y=0,h=0,f=0,E=0,S=0,T=0,U=0,R=0,w=0;c.sort(Dh);for(let q=0,_=c.length;q<_;q++){const M=c[q],H=M.color,G=M.intensity,k=M.distance,Q=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=H.r*G,d+=H.g*G,p+=H.b*G;else if(M.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(M.sh.coefficients[V],G);w++}else if(M.isDirectionalLight){const V=e.get(M);if(V.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const re=M.shadow,X=t.get(M);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=M.shadow.matrix,E++}i.directional[m]=V,m++}else if(M.isSpotLight){const V=e.get(M);V.position.setFromMatrixPosition(M.matrixWorld),V.color.copy(H).multiplyScalar(G),V.distance=k,V.coneCos=Math.cos(M.angle),V.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),V.decay=M.decay,i.spot[y]=V;const re=M.shadow;if(M.map&&(i.spotLightMap[U]=M.map,U++,re.updateMatrices(M),M.castShadow&&R++),i.spotLightMatrix[y]=re.matrix,M.castShadow){const X=t.get(M);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=Q,T++}y++}else if(M.isRectAreaLight){const V=e.get(M);V.color.copy(H).multiplyScalar(G),V.halfWidth.set(M.width*.5,0,0),V.halfHeight.set(0,M.height*.5,0),i.rectArea[h]=V,h++}else if(M.isPointLight){const V=e.get(M);if(V.color.copy(M.color).multiplyScalar(M.intensity),V.distance=M.distance,V.decay=M.decay,M.castShadow){const re=M.shadow,X=t.get(M);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=M.shadow.matrix,S++}i.point[v]=V,v++}else if(M.isHemisphereLight){const V=e.get(M);V.skyColor.copy(M.color).multiplyScalar(G),V.groundColor.copy(M.groundColor).multiplyScalar(G),i.hemi[f]=V,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==m||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==h||L.hemiLength!==f||L.numDirectionalShadows!==E||L.numPointShadows!==S||L.numSpotShadows!==T||L.numSpotMaps!==U||L.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=h,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,L.directionalLength=m,L.pointLength=v,L.spotLength=y,L.rectAreaLength=h,L.hemiLength=f,L.numDirectionalShadows=E,L.numPointShadows=S,L.numSpotShadows=T,L.numSpotMaps=U,L.numLightProbes=w,i.version=Lh++)}function l(c,u){let d=0,p=0,m=0,v=0,y=0;const h=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const S=c[f];if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),d++}else if(S.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),m++}else if(S.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),o.identity(),s.copy(S.matrixWorld),s.premultiply(h),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const T=i.hemi[y];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(h),y++}}}return{setup:a,setupView:l,state:i}}function na(n){const e=new Uh(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ih(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new na(n),e.set(r,[a])):s>=o.length?(a=new na(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Fh extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nh extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oh=`uniform sampler2D shadow_pass;
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
}`;function zh(n,e,t){let i=new Ea;const r=new nt,s=new nt,o=new ft,a=new Fh({depthPacking:3201}),l=new Nh,c={},u=t.maxTextureSize,d={0:1,1:0,2:2},p=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Bh,fragmentShader:Oh}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new zt;v.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new mt(v,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(R,w,L){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||R.length===0)return;const q=n.getRenderTarget(),_=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),H=n.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=f!==3&&this.type===3,k=f===3&&this.type!==3;for(let Q=0,V=R.length;Q<V;Q++){const re=R[Q],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const me=X.getFrameExtents();if(r.multiply(me),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,X.mapSize.y=s.y)),X.map===null||G===!0||k===!0){const Ee=this.type!==3?{minFilter:1003,magFilter:1003}:{};X.map!==null&&X.map.dispose(),X.map=new wn(r.x,r.y,Ee),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const _e=X.getViewportCount();for(let Ee=0;Ee<_e;Ee++){const $e=X.getViewport(Ee);o.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),H.viewport(o),X.updateMatrices(re,Ee),i=X.getFrustum(),T(w,L,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===3&&E(X,L),X.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(q,_,M)};function E(R,w){const L=e.update(y);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wn(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,L,p,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,L,m,y,null)}function S(R,w,L,q){let _=null;const M=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)_=M;else if(_=L.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=_.uuid,G=w.uuid;let k=c[H];k===void 0&&(k={},c[H]=k);let Q=k[G];Q===void 0&&(Q=_.clone(),k[G]=Q,w.addEventListener("dispose",U)),_=Q}if(_.visible=w.visible,_.wireframe=w.wireframe,q===3?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:d[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=n.properties.get(_);H.light=L}return _}function T(R,w,L,q,_){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===3)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const G=e.update(R),k=R.material;if(Array.isArray(k)){const Q=G.groups;for(let V=0,re=Q.length;V<re;V++){const X=Q[V],me=k[X.materialIndex];if(me&&me.visible){const _e=S(R,me,q,_);R.onBeforeShadow(n,R,w,L,G,_e,X),n.renderBufferDirect(L,null,G,_e,R,X),R.onAfterShadow(n,R,w,L,G,_e,X)}}}else if(k.visible){const Q=S(R,k,q,_);R.onBeforeShadow(n,R,w,L,G,Q,null),n.renderBufferDirect(L,null,G,Q,R,null),R.onAfterShadow(n,R,w,L,G,Q,null)}}const H=R.children;for(let G=0,k=H.length;G<k;G++)T(H[G],w,L,q,_)}function U(R){R.target.removeEventListener("dispose",U);for(const L in c){const q=c[L],_=R.target.uuid;_ in q&&(q[_].dispose(),delete q[_])}}}const Gh={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Hh(n){function e(){let P=!1;const pe=new ft;let W=null;const J=new ft(0,0,0,0);return{setMask:function(de){W!==de&&!P&&(n.colorMask(de,de,de,de),W=de)},setLocked:function(de){P=de},setClear:function(de,ge,Ze,ut,pt){pt===!0&&(de*=ut,ge*=ut,Ze*=ut),pe.set(de,ge,Ze,ut),J.equals(pe)===!1&&(n.clearColor(de,ge,Ze,ut),J.copy(pe))},reset:function(){P=!1,W=null,J.set(-1,0,0,0)}}}function t(){let P=!1,pe=!1,W=null,J=null,de=null;return{setReversed:function(ge){pe=ge},setTest:function(ge){ge?Se(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ge){W!==ge&&!P&&(n.depthMask(ge),W=ge)},setFunc:function(ge){if(pe&&(ge=Gh[ge]),J!==ge){switch(ge){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ge}},setLocked:function(ge){P=ge},setClear:function(ge){de!==ge&&(n.clearDepth(ge),de=ge)},reset:function(){P=!1,W=null,J=null,de=null}}}function i(){let P=!1,pe=null,W=null,J=null,de=null,ge=null,Ze=null,ut=null,pt=null;return{setTest:function(je){P||(je?Se(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(je){pe!==je&&!P&&(n.stencilMask(je),pe=je)},setFunc:function(je,St,Gt){(W!==je||J!==St||de!==Gt)&&(n.stencilFunc(je,St,Gt),W=je,J=St,de=Gt)},setOp:function(je,St,Gt){(ge!==je||Ze!==St||ut!==Gt)&&(n.stencilOp(je,St,Gt),ge=je,Ze=St,ut=Gt)},setLocked:function(je){P=je},setClear:function(je){pt!==je&&(n.clearStencil(je),pt=je)},reset:function(){P=!1,pe=null,W=null,J=null,de=null,ge=null,Ze=null,ut=null,pt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,p=[],m=null,v=!1,y=null,h=null,f=null,E=null,S=null,T=null,U=null,R=new st(0,0,0),w=0,L=!1,q=null,_=null,M=null,H=null,G=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,V=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(re)[1]),Q=V>=1):re.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),Q=V>=2);let X=null,me={};const _e=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),$e=new ft().fromArray(_e),Qe=new ft().fromArray(Ee);function $(P,pe,W,J){const de=new Uint8Array(4),ge=n.createTexture();n.bindTexture(P,ge),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<W;Ze++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(pe+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ge}const te={};te[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),s.setFunc(3),Ye(!1),We(1),Se(n.CULL_FACE),C(0);function Se(P){c[P]!==!0&&(n.enable(P),c[P]=!0)}function he(P){c[P]!==!1&&(n.disable(P),c[P]=!1)}function ze(P,pe){return u[P]!==pe?(n.bindFramebuffer(P,pe),u[P]=pe,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(P,pe){let W=p,J=!1;if(P){W=d.get(pe),W===void 0&&(W=[],d.set(pe,W));const de=P.textures;if(W.length!==de.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ze=de.length;ge<Ze;ge++)W[ge]=n.COLOR_ATTACHMENT0+ge;W.length=de.length,J=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,J=!0);J&&n.drawBuffers(W)}function qe(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const et={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};et[103]=n.MIN,et[104]=n.MAX;const He={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function C(P,pe,W,J,de,ge,Ze,ut,pt,je){if(P===0){v===!0&&(he(n.BLEND),v=!1);return}if(v===!1&&(Se(n.BLEND),v=!0),P!==5){if(P!==y||je!==L){if((h!==100||S!==100)&&(n.blendEquation(n.FUNC_ADD),h=100,S=100),je)switch(P){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}f=null,E=null,T=null,U=null,R.set(0,0,0),w=0,y=P,L=je}return}de=de||pe,ge=ge||W,Ze=Ze||J,(pe!==h||de!==S)&&(n.blendEquationSeparate(et[pe],et[de]),h=pe,S=de),(W!==f||J!==E||ge!==T||Ze!==U)&&(n.blendFuncSeparate(He[W],He[J],He[ge],He[Ze]),f=W,E=J,T=ge,U=Ze),(ut.equals(R)===!1||pt!==w)&&(n.blendColor(ut.r,ut.g,ut.b,pt),R.copy(ut),w=pt),y=P,L=!1}function xt(P,pe){P.side===2?he(n.CULL_FACE):Se(n.CULL_FACE);let W=P.side===1;pe&&(W=!W),Ye(W),P.blending===1&&P.transparent===!1?C(0):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const J=P.stencilWrite;o.setTest(J),J&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),rt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(P){q!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),q=P)}function We(P){P!==0?(Se(n.CULL_FACE),P!==_&&(P===1?n.cullFace(n.BACK):P===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),_=P}function Le(P){P!==M&&(Q&&n.lineWidth(P),M=P)}function rt(P,pe,W){P?(Se(n.POLYGON_OFFSET_FILL),(H!==pe||G!==W)&&(n.polygonOffset(pe,W),H=pe,G=W)):he(n.POLYGON_OFFSET_FILL)}function Ce(P){P?Se(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function b(P){P===void 0&&(P=n.TEXTURE0+k-1),X!==P&&(n.activeTexture(P),X=P)}function g(P,pe,W){W===void 0&&(X===null?W=n.TEXTURE0+k-1:W=X);let J=me[W];J===void 0&&(J={type:void 0,texture:void 0},me[W]=J),(J.type!==P||J.texture!==pe)&&(X!==W&&(n.activeTexture(W),X=W),n.bindTexture(P,pe||te[P]),J.type=P,J.texture=pe)}function N(){const P=me[X];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(P){$e.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),$e.copy(P))}function Me(P){Qe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Qe.copy(P))}function Xe(P,pe){let W=l.get(pe);W===void 0&&(W=new WeakMap,l.set(pe,W));let J=W.get(P);J===void 0&&(J=n.getUniformBlockIndex(pe,P.name),W.set(P,J))}function Oe(P,pe){const J=l.get(pe).get(P);a.get(pe)!==J&&(n.uniformBlockBinding(pe,J,P.__bindingPointIndex),a.set(pe,J))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,me={},u={},d=new WeakMap,p=[],m=null,v=!1,y=null,h=null,f=null,E=null,S=null,T=null,U=null,R=new st(0,0,0),w=0,L=!1,q=null,_=null,M=null,H=null,G=null,$e.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Se,disable:he,bindFramebuffer:ze,drawBuffers:be,useProgram:qe,setBlending:C,setMaterial:xt,setFlipSided:Ye,setCullFace:We,setLineWidth:Le,setPolygonOffset:rt,setScissorTest:Ce,activeTexture:b,bindTexture:g,unbindTexture:N,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:ve,texImage3D:De,updateUBOMapping:Xe,uniformBlockBinding:Oe,texStorage2D:Ke,texStorage3D:ne,texSubImage2D:Z,texSubImage3D:Te,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Fe,viewport:Me,reset:tt}}function ia(n,e,t,i){const r=Vh(i);switch(t){case 1021:return n*e;case 1024:return n*e;case 1025:return n*e*2;case 1028:return n*e/r.components*r.byteLength;case 1029:return n*e/r.components*r.byteLength;case 1030:return n*e*2/r.components*r.byteLength;case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case 1023:return n*e*4/r.components*r.byteLength;case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vh(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kh(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,g){return m?new OffscreenCanvas(b,g):nr("canvas")}function y(b,g,N){let j=1;const ee=Ce(b);if((ee.width>N||ee.height>N)&&(j=N/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(j*ee.width),Te=Math.floor(j*ee.height);d===void 0&&(d=v(Z,Te));const oe=g?v(Z,Te):d;return oe.width=Z,oe.height=Te,oe.getContext("2d").drawImage(b,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Te+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function h(b){return b.generateMipmaps&&b.minFilter!==1003&&b.minFilter!==1006}function f(b){n.generateMipmap(b)}function E(b,g,N,j,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=g;if(g===n.RED&&(N===n.FLOAT&&(Z=n.R32F),N===n.HALF_FLOAT&&(Z=n.R16F),N===n.UNSIGNED_BYTE&&(Z=n.R8)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.R8UI),N===n.UNSIGNED_SHORT&&(Z=n.R16UI),N===n.UNSIGNED_INT&&(Z=n.R32UI),N===n.BYTE&&(Z=n.R8I),N===n.SHORT&&(Z=n.R16I),N===n.INT&&(Z=n.R32I)),g===n.RG&&(N===n.FLOAT&&(Z=n.RG32F),N===n.HALF_FLOAT&&(Z=n.RG16F),N===n.UNSIGNED_BYTE&&(Z=n.RG8)),g===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RG8UI),N===n.UNSIGNED_SHORT&&(Z=n.RG16UI),N===n.UNSIGNED_INT&&(Z=n.RG32UI),N===n.BYTE&&(Z=n.RG8I),N===n.SHORT&&(Z=n.RG16I),N===n.INT&&(Z=n.RG32I)),g===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),N===n.UNSIGNED_INT&&(Z=n.RGB32UI),N===n.BYTE&&(Z=n.RGB8I),N===n.SHORT&&(Z=n.RGB16I),N===n.INT&&(Z=n.RGB32I)),g===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),N===n.UNSIGNED_INT&&(Z=n.RGBA32UI),N===n.BYTE&&(Z=n.RGBA8I),N===n.SHORT&&(Z=n.RGBA16I),N===n.INT&&(Z=n.RGBA32I)),g===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),g===n.RGBA){const Te=ee?Qi:it.getTransfer(j);N===n.FLOAT&&(Z=n.RGBA32F),N===n.HALF_FLOAT&&(Z=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Z=Te===ct?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(b,g){let N;return b?g===null||g===1014||g===1020?N=n.DEPTH24_STENCIL8:g===1015?N=n.DEPTH32F_STENCIL8:g===1012&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===1014||g===1020?N=n.DEPTH_COMPONENT24:g===1015?N=n.DEPTH_COMPONENT32F:g===1012&&(N=n.DEPTH_COMPONENT16),N}function T(b,g){return h(b)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function U(b){const g=b.target;g.removeEventListener("dispose",U),w(g),g.isVideoTexture&&u.delete(g)}function R(b){const g=b.target;g.removeEventListener("dispose",R),q(g)}function w(b){const g=i.get(b);if(g.__webglInit===void 0)return;const N=b.source,j=p.get(N);if(j){const ee=j[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(b),Object.keys(j).length===0&&p.delete(N)}i.remove(b)}function L(b){const g=i.get(b);n.deleteTexture(g.__webglTexture);const N=b.source,j=p.get(N);delete j[g.__cacheKey],o.memory.textures--}function q(b){const g=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let ee=0;ee<g.__webglFramebuffer[j].length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[j][ee]);else n.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)n.deleteFramebuffer(g.__webglFramebuffer[j]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=b.textures;for(let j=0,ee=N.length;j<ee;j++){const Z=i.get(N[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(N[j])}i.remove(b)}let _=0;function M(){_=0}function H(){const b=_;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),_+=1,b}function G(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function k(b,g){const N=i.get(b);if(b.isVideoTexture&&Le(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(N,b,g);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function Q(b,g){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Qe(N,b,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function V(b,g){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Qe(N,b,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function re(b,g){const N=i.get(b);if(b.version>0&&N.__version!==b.version){$(N,b,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const X={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},me={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},_e={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function Ee(b,g){if(g.type===1015&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,X[g.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,X[g.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,X[g.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,me[g.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003||g.minFilter!==1005&&g.minFilter!==1008||g.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function $e(b,g){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",U));const j=g.source;let ee=p.get(j);ee===void 0&&(ee={},p.set(j,ee));const Z=G(g);if(Z!==b.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[Z].usedTimes++;const Te=ee[b.__cacheKey];Te!==void 0&&(ee[b.__cacheKey].usedTimes--,Te.usedTimes===0&&L(g)),b.__cacheKey=Z,b.__webglTexture=ee[Z].texture}return N}function Qe(b,g,N){let j=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=n.TEXTURE_3D);const ee=$e(b,g),Z=g.source;t.bindTexture(j,b.__webglTexture,n.TEXTURE0+N);const Te=i.get(Z);if(Z.version!==Te.__version||ee===!0){t.activeTexture(n.TEXTURE0+N);const oe=it.getPrimaries(it.workingColorSpace),fe=g.colorSpace===dn?null:it.getPrimaries(g.colorSpace),Ke=g.colorSpace===dn||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ne=y(g.image,!1,r.maxTextureSize);ne=rt(g,ne);const ve=s.convert(g.format,g.colorSpace),De=s.convert(g.type);let Fe=E(g.internalFormat,ve,De,g.colorSpace,g.isVideoTexture);Ee(j,g);let Me;const Xe=g.mipmaps,Oe=g.isVideoTexture!==!0,tt=Te.__version===void 0||ee===!0,P=Z.dataReady,pe=T(g,ne);if(g.isDepthTexture)Fe=S(g.format===1027,g.type),tt&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Fe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ne.width,ne.height,0,ve,De,null));else if(g.isDataTexture)if(Xe.length>0){Oe&&tt&&t.texStorage2D(n.TEXTURE_2D,pe,Fe,Xe[0].width,Xe[0].height);for(let W=0,J=Xe.length;W<J;W++)Me=Xe[W],Oe?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,ve,De,Me.data):t.texImage2D(n.TEXTURE_2D,W,Fe,Me.width,Me.height,0,ve,De,Me.data);g.generateMipmaps=!1}else Oe?(tt&&t.texStorage2D(n.TEXTURE_2D,pe,Fe,ne.width,ne.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,De,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,ne.width,ne.height,0,ve,De,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Fe,Xe[0].width,Xe[0].height,ne.depth);for(let W=0,J=Xe.length;W<J;W++)if(Me=Xe[W],g.format!==1023)if(ve!==null)if(Oe){if(P)if(g.layerUpdates.size>0){const de=ia(Me.width,Me.height,g.format,g.type);for(const ge of g.layerUpdates){const Ze=Me.data.subarray(ge*de/Me.data.BYTES_PER_ELEMENT,(ge+1)*de/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ge,Me.width,Me.height,1,ve,Ze,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Me.width,Me.height,ne.depth,ve,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Fe,Me.width,Me.height,ne.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Me.width,Me.height,ne.depth,ve,De,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Fe,Me.width,Me.height,ne.depth,0,ve,De,Me.data)}else{Oe&&tt&&t.texStorage2D(n.TEXTURE_2D,pe,Fe,Xe[0].width,Xe[0].height);for(let W=0,J=Xe.length;W<J;W++)Me=Xe[W],g.format!==1023?ve!==null?Oe?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,ve,De,Me.data):t.texImage2D(n.TEXTURE_2D,W,Fe,Me.width,Me.height,0,ve,De,Me.data)}else if(g.isDataArrayTexture)if(Oe){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Fe,ne.width,ne.height,ne.depth),P)if(g.layerUpdates.size>0){const W=ia(ne.width,ne.height,g.format,g.type);for(const J of g.layerUpdates){const de=ne.data.subarray(J*W/ne.data.BYTES_PER_ELEMENT,(J+1)*W/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ve,De,de)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,De,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ne.width,ne.height,ne.depth,0,ve,De,ne.data);else if(g.isData3DTexture)Oe?(tt&&t.texStorage3D(n.TEXTURE_3D,pe,Fe,ne.width,ne.height,ne.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,De,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ne.width,ne.height,ne.depth,0,ve,De,ne.data);else if(g.isFramebufferTexture){if(tt)if(Oe)t.texStorage2D(n.TEXTURE_2D,pe,Fe,ne.width,ne.height);else{let W=ne.width,J=ne.height;for(let de=0;de<pe;de++)t.texImage2D(n.TEXTURE_2D,de,Fe,W,J,0,ve,De,null),W>>=1,J>>=1}}else if(Xe.length>0){if(Oe&&tt){const W=Ce(Xe[0]);t.texStorage2D(n.TEXTURE_2D,pe,Fe,W.width,W.height)}for(let W=0,J=Xe.length;W<J;W++)Me=Xe[W],Oe?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ve,De,Me):t.texImage2D(n.TEXTURE_2D,W,Fe,ve,De,Me);g.generateMipmaps=!1}else if(Oe){if(tt){const W=Ce(ne);t.texStorage2D(n.TEXTURE_2D,pe,Fe,W.width,W.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,De,ne)}else t.texImage2D(n.TEXTURE_2D,0,Fe,ve,De,ne);h(g)&&f(j),Te.__version=Z.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function $(b,g,N){if(g.image.length!==6)return;const j=$e(b,g),ee=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);const Z=i.get(ee);if(ee.version!==Z.__version||j===!0){t.activeTexture(n.TEXTURE0+N);const Te=it.getPrimaries(it.workingColorSpace),oe=g.colorSpace===dn?null:it.getPrimaries(g.colorSpace),fe=g.colorSpace===dn||Te===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ke=g.isCompressedTexture||g.image[0].isCompressedTexture,ne=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Ke&&!ne?ve[J]=y(g.image[J],!0,r.maxCubemapSize):ve[J]=ne?g.image[J].image:g.image[J],ve[J]=rt(g,ve[J]);const De=ve[0],Fe=s.convert(g.format,g.colorSpace),Me=s.convert(g.type),Xe=E(g.internalFormat,Fe,Me,g.colorSpace),Oe=g.isVideoTexture!==!0,tt=Z.__version===void 0||j===!0,P=ee.dataReady;let pe=T(g,De);Ee(n.TEXTURE_CUBE_MAP,g);let W;if(Ke){Oe&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,De.width,De.height);for(let J=0;J<6;J++){W=ve[J].mipmaps;for(let de=0;de<W.length;de++){const ge=W[de];g.format!==1023?Fe!==null?Oe?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ge.width,ge.height,Fe,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Xe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ge.width,ge.height,Fe,Me,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Xe,ge.width,ge.height,0,Fe,Me,ge.data)}}}else{if(W=g.mipmaps,Oe&&tt){W.length>0&&pe++;const J=Ce(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Oe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Fe,Me,ve[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,ve[J].width,ve[J].height,0,Fe,Me,ve[J].data);for(let de=0;de<W.length;de++){const Ze=W[de].image[J].image;Oe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Ze.width,Ze.height,Fe,Me,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Xe,Ze.width,Ze.height,0,Fe,Me,Ze.data)}}else{Oe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,Me,ve[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Fe,Me,ve[J]);for(let de=0;de<W.length;de++){const ge=W[de];Oe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Fe,Me,ge.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Xe,Fe,Me,ge.image[J])}}}h(g)&&f(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function te(b,g,N,j,ee,Z){const Te=s.convert(N.format,N.colorSpace),oe=s.convert(N.type),fe=E(N.internalFormat,Te,oe,N.colorSpace);if(!i.get(g).__hasExternalTextures){const ne=Math.max(1,g.width>>Z),ve=Math.max(1,g.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,fe,ne,ve,g.depth,0,Te,oe,null):t.texImage2D(ee,Z,fe,ne,ve,0,Te,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),We(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ee,i.get(N).__webglTexture,0,Ye(g)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ee,i.get(N).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(b,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),g.depthBuffer){const j=g.depthTexture,ee=j&&j.isDepthTexture?j.type:null,Z=S(g.stencilBuffer,ee),Te=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ye(g);We(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Z,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const j=g.textures;for(let ee=0;ee<j.length;ee++){const Z=j[ee],Te=s.convert(Z.format,Z.colorSpace),oe=s.convert(Z.type),fe=E(Z.internalFormat,Te,oe,Z.colorSpace),Ke=Ye(g);N&&We(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,fe,g.width,g.height):We(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,fe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,fe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);const j=i.get(g.depthTexture).__webglTexture,ee=Ye(g);if(g.depthTexture.format===1026)We(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(g.depthTexture.format===1027)We(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ze(b){const g=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){const ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=j}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");he(g.__webglFramebuffer,b)}else if(N){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=n.createRenderbuffer(),Se(g.__webglDepthbuffer[j],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Se(g.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(b,g,N){const j=i.get(b);g!==void 0&&te(j.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ze(b)}function qe(b){const g=b.texture,N=i.get(b),j=i.get(g);b.addEventListener("dispose",R);const ee=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=g.version,o.memory.textures++),Z){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let fe=0;fe<g.mipmaps.length;fe++)N.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else N.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)N.__webglFramebuffer[oe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Te)for(let oe=0,fe=ee.length;oe<fe;oe++){const Ke=i.get(ee[oe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&We(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const fe=ee[oe];N.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const Ke=s.convert(fe.format,fe.colorSpace),ne=s.convert(fe.type),ve=E(fe.internalFormat,Ke,ne,fe.colorSpace,b.isXRRenderTarget===!0),De=Ye(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)te(N.__webglFramebuffer[oe][fe],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else te(N.__webglFramebuffer[oe],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);h(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,fe=ee.length;oe<fe;oe++){const Ke=ee[oe],ne=i.get(Ke);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Ee(n.TEXTURE_2D,Ke),te(N.__webglFramebuffer,b,Ke,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),h(Ke)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),Ee(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)te(N.__webglFramebuffer[fe],b,g,n.COLOR_ATTACHMENT0,oe,fe);else te(N.__webglFramebuffer,b,g,n.COLOR_ATTACHMENT0,oe,0);h(g)&&f(oe),t.unbindTexture()}b.depthBuffer&&ze(b)}function et(b){const g=b.textures;for(let N=0,j=g.length;N<j;N++){const ee=g[N];if(h(ee)){const Z=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(ee).__webglTexture;t.bindTexture(Z,Te),f(Z),t.unbindTexture()}}}const He=[],C=[];function xt(b){if(b.samples>0){if(We(b)===!1){const g=b.textures,N=b.width,j=b.height;let ee=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),oe=g.length>1;if(oe)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[fe]);const Ke=i.get(g[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,N,j,0,0,N,j,ee,n.NEAREST),l===!0&&(He.length=0,C.length=0,He.push(n.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(He.push(Z),C.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[fe]);const Ke=i.get(g[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const g=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Ye(b){return Math.min(r.maxSamples,b.samples)}function We(b){const g=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Le(b){const g=o.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function rt(b,g){const N=b.colorSpace,j=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==pn&&N!==dn&&(it.getTransfer(N)===ct?(j!==1023||ee!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function Ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=M,this.setTexture2D=k,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=re,this.rebindTextures=be,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=te,this.useMultisampledRTT=We}function Wh(n,e){function t(i,r=dn){let s;const o=it.getTransfer(r);if(i===1009)return n.UNSIGNED_BYTE;if(i===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return n.BYTE;if(i===1011)return n.SHORT;if(i===1012)return n.UNSIGNED_SHORT;if(i===1013)return n.INT;if(i===1014)return n.UNSIGNED_INT;if(i===1015)return n.FLOAT;if(i===1016)return n.HALF_FLOAT;if(i===1021)return n.ALPHA;if(i===1022)return n.RGB;if(i===1023)return n.RGBA;if(i===1024)return n.LUMINANCE;if(i===1025)return n.LUMINANCE_ALPHA;if(i===1026)return n.DEPTH_COMPONENT;if(i===1027)return n.DEPTH_STENCIL;if(i===1028)return n.RED;if(i===1029)return n.RED_INTEGER;if(i===1030)return n.RG;if(i===1031)return n.RG_INTEGER;if(i===1033)return n.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Xh extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xi extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qh={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const h=t.getJointPose(y,i),f=this._getHandJoint(c,y);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Yh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $h{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new At,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new an({vertexShader:Yh,fragmentShader:Kh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new It(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zh extends $n{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,v=null;const y=new $h,h=t.getContextAttributes();let f=null,E=null;const S=[],T=[],U=new nt;let R=null;const w=new Ot;w.layers.enable(1),w.viewport=new ft;const L=new Ot;L.layers.enable(2),L.viewport=new ft;const q=[w,L],_=new Xh;_.layers.enable(1),_.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=S[$];return te===void 0&&(te=new Gr,S[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=S[$];return te===void 0&&(te=new Gr,S[$]=te),te.getGripSpace()},this.getHand=function($){let te=S[$];return te===void 0&&(te=new Gr,S[$]=te),te.getHandSpace()};function G($){const te=T.indexOf($.inputSource);if(te===-1)return;const Se=S[te];Se!==void 0&&(Se.update($.inputSource,$.frame,c||o),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Q);for(let $=0;$<S.length;$++){const te=T[$];te!==null&&(T[$]=null,S[$].disconnect(te))}M=null,H=null,y.reset(),e.setRenderTarget(f),m=null,p=null,d=null,r=null,E=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Q),h.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const te={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new wn(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let te=null,Se=null,he=null;h.depth&&(he=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=h.stencil?1027:1026,Se=h.stencil?1020:1014);const ze={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(ze),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new wn(p.textureWidth,p.textureHeight,{format:1023,type:1009,depthTexture:new Aa(p.textureWidth,p.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q($){for(let te=0;te<$.removed.length;te++){const Se=$.removed[te],he=T.indexOf(Se);he>=0&&(T[he]=null,S[he].disconnect(Se))}for(let te=0;te<$.added.length;te++){const Se=$.added[te];let he=T.indexOf(Se);if(he===-1){for(let be=0;be<S.length;be++)if(be>=T.length){T.push(Se),he=be;break}else if(T[be]===null){T[be]=Se,he=be;break}if(he===-1)break}const ze=S[he];ze&&ze.connect(Se)}}const V=new F,re=new F;function X($,te,Se){V.setFromMatrixPosition(te.matrixWorld),re.setFromMatrixPosition(Se.matrixWorld);const he=V.distanceTo(re),ze=te.projectionMatrix.elements,be=Se.projectionMatrix.elements,qe=ze[14]/(ze[10]-1),et=ze[14]/(ze[10]+1),He=(ze[9]+1)/ze[5],C=(ze[9]-1)/ze[5],xt=(ze[8]-1)/ze[0],Ye=(be[8]+1)/be[0],We=qe*xt,Le=qe*Ye,rt=he/(-xt+Ye),Ce=rt*-xt;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ce),$.translateZ(rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ze[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const b=qe+rt,g=et+rt,N=We-Ce,j=Le+(he-Ce),ee=He*et/g*b,Z=C*et/g*b;$.projectionMatrix.makePerspective(N,j,ee,Z,b,g),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let te=$.near,Se=$.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),_.near=L.near=w.near=te,_.far=L.far=w.far=Se,(M!==_.near||H!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,H=_.far);const he=$.parent,ze=_.cameras;me(_,he);for(let be=0;be<ze.length;be++)me(ze[be],he);ze.length===2?X(_,w,L):_.projectionMatrix.copy(w.projectionMatrix),_e($,_,he)};function _e($,te,Se){Se===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let Ee=null;function $e($,te){if(u=te.getViewerPose(c||o),v=te,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let he=!1;Se.length!==_.cameras.length&&(_.cameras.length=0,he=!0);for(let be=0;be<Se.length;be++){const qe=Se[be];let et=null;if(m!==null)et=m.getViewport(qe);else{const C=d.getViewSubImage(p,qe);et=C.viewport,be===0&&(e.setRenderTargetTextures(E,C.colorTexture,p.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(E))}let He=q[be];He===void 0&&(He=new Ot,He.layers.enable(be),He.viewport=new ft,q[be]=He),He.matrix.fromArray(qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(et.x,et.y,et.width,et.height),be===0&&(_.matrix.copy(He.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),he===!0&&_.cameras.push(He)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const be=d.getDepthInformation(Se[0]);be&&be.isValid&&be.texture&&y.init(e,be,r.renderState)}}for(let Se=0;Se<S.length;Se++){const he=T[Se],ze=S[Se];he!==null&&ze!==void 0&&ze.update(he,te,c||o)}Ee&&Ee($,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const Qe=new Ta;Qe.setAnimationLoop($e),this.setAnimationLoop=function($){Ee=$},this.dispose=function(){}}}const yn=new Yt,jh=new lt;function Jh(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,Sa(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,E,S,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(h,f):f.isMeshToonMaterial?(s(h,f),d(h,f)):f.isMeshPhongMaterial?(s(h,f),u(h,f)):f.isMeshStandardMaterial?(s(h,f),p(h,f),f.isMeshPhysicalMaterial&&m(h,f,T)):f.isMeshMatcapMaterial?(s(h,f),v(h,f)):f.isMeshDepthMaterial?s(h,f):f.isMeshDistanceMaterial?(s(h,f),y(h,f)):f.isMeshNormalMaterial?s(h,f):f.isLineBasicMaterial?(o(h,f),f.isLineDashedMaterial&&a(h,f)):f.isPointsMaterial?l(h,f,E,S):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===1&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===1&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const E=e.get(f),S=E.envMap,T=E.envMapRotation;S&&(h.envMap.value=S,yn.copy(T),yn.x*=-1,yn.y*=-1,yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),h.envMapRotation.value.setFromMatrix4(jh.makeRotationFromEuler(yn)),h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function o(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function a(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,E,S){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*E,h.scale.value=S*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function d(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function m(h,f,E){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=E.texture,h.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,f){f.matcap&&(h.matcap.value=f.matcap)}function y(h,f){const E=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),h.nearDistance.value=E.shadow.camera.near,h.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qh(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const T=S.program;i.uniformBlockBinding(E,T)}function c(E,S){let T=r[E.id];T===void 0&&(v(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",h));const U=S.program;i.updateUBOMapping(E,U);const R=e.render.frame;s[E.id]!==R&&(p(E),s[E.id]=R)}function u(E){const S=d();E.__bindingPointIndex=S;const T=n.createBuffer(),U=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const S=r[E.id],T=E.uniforms,U=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,w=T.length;R<w;R++){const L=Array.isArray(T[R])?T[R]:[T[R]];for(let q=0,_=L.length;q<_;q++){const M=L[q];if(m(M,R,q,U)===!0){const H=M.__offset,G=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let Q=0;Q<G.length;Q++){const V=G[Q],re=y(V);typeof V=="number"||typeof V=="boolean"?(M.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,H+k,M.__data)):V.isMatrix3?(M.__data[0]=V.elements[0],M.__data[1]=V.elements[1],M.__data[2]=V.elements[2],M.__data[3]=0,M.__data[4]=V.elements[3],M.__data[5]=V.elements[4],M.__data[6]=V.elements[5],M.__data[7]=0,M.__data[8]=V.elements[6],M.__data[9]=V.elements[7],M.__data[10]=V.elements[8],M.__data[11]=0):(V.toArray(M.__data,k),k+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,S,T,U){const R=E.value,w=S+"_"+T;if(U[w]===void 0)return typeof R=="number"||typeof R=="boolean"?U[w]=R:U[w]=R.clone(),!0;{const L=U[w];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return U[w]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function v(E){const S=E.uniforms;let T=0;const U=16;for(let w=0,L=S.length;w<L;w++){const q=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,M=q.length;_<M;_++){const H=q[_],G=Array.isArray(H.value)?H.value:[H.value];for(let k=0,Q=G.length;k<Q;k++){const V=G[k],re=y(V),X=T%U,me=X%re.boundary,_e=X+me;T+=me,_e!==0&&U-_e<re.storage&&(T+=U-_e),H.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=re.storage}}}const R=T%U;return R>0&&(T+=U-R),E.__size=T,E.__cache={},this}function y(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function h(E){const S=E.target;S.removeEventListener("dispose",h);const T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class ef{constructor(e={}){const{canvas:t=za(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,h=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=0,this.toneMappingExposure=1;const S=this;let T=!1,U=0,R=0,w=null,L=-1,q=null;const _=new ft,M=new ft;let H=null;const G=new st(0);let k=0,Q=t.width,V=t.height,re=1,X=null,me=null;const _e=new ft(0,0,Q,V),Ee=new ft(0,0,Q,V);let $e=!1;const Qe=new Ea;let $=!1,te=!1;const Se=new lt,he=new lt,ze=new F,be=new ft,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function He(){return w===null?re:1}let C=i;function xt(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kr}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ge,!1),C===null){const D="webgl2";if(C=xt(D,x),C===null)throw xt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ye,We,Le,rt,Ce,b,g,N,j,ee,Z,Te,oe,fe,Ke,ne,ve,De,Fe,Me,Xe,Oe,tt,P;function pe(){Ye=new su(C),Ye.init(),Oe=new Wh(C,Ye),We=new Jc(C,Ye,e,Oe),Le=new Hh(C),We.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),rt=new lu(C),Ce=new bh,b=new kh(C,Ye,Le,Ce,We,Oe,rt),g=new eu(S),N=new ru(S),j=new po(C),tt=new Zc(C,j),ee=new au(C,j,rt,tt),Z=new uu(C,ee,j,rt),Fe=new cu(C,We,b),ne=new Qc(Ce),Te=new Ah(S,g,N,Ye,We,tt,ne),oe=new Jh(S,Ce),fe=new Rh,Ke=new Ih(Ye),De=new $c(S,g,N,Le,Z,p,l),ve=new zh(S,Z,We),P=new Qh(C,rt,We,Le),Me=new jc(C,Ye,rt),Xe=new ou(C,Ye,rt),rt.programs=Te.programs,S.capabilities=We,S.extensions=Ye,S.properties=Ce,S.renderLists=fe,S.shadowMap=ve,S.state=Le,S.info=rt}pe();const W=new Zh(S,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=Ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(x){x!==void 0&&(re=x,this.setSize(Q,V,!1))},this.getSize=function(x){return x.set(Q,V)},this.setSize=function(x,D,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=x,V=D,t.width=Math.floor(x*re),t.height=Math.floor(D*re),O===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Q*re,V*re).floor()},this.setDrawingBufferSize=function(x,D,O){Q=x,V=D,re=O,t.width=Math.floor(x*O),t.height=Math.floor(D*O),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(_e)},this.setViewport=function(x,D,O,z){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,D,O,z),Le.viewport(_.copy(_e).multiplyScalar(re).round())},this.getScissor=function(x){return x.copy(Ee)},this.setScissor=function(x,D,O,z){x.isVector4?Ee.set(x.x,x.y,x.z,x.w):Ee.set(x,D,O,z),Le.scissor(M.copy(Ee).multiplyScalar(re).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(x){Le.setScissorTest($e=x)},this.setOpaqueSort=function(x){X=x},this.setTransparentSort=function(x){me=x},this.getClearColor=function(x){return x.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(x=!0,D=!0,O=!0){let z=0;if(x){let I=!1;if(w!==null){const se=w.texture.format;I=se===1033||se===1031||se===1029}if(I){const se=w.texture.type,ue=se===1009||se===1014||se===1012||se===1020||se===1017||se===1018,xe=De.getClearColor(),ye=De.getClearAlpha(),Ie=xe.r,Ue=xe.g,A=xe.b;ue?(m[0]=Ie,m[1]=Ue,m[2]=A,m[3]=ye,C.clearBufferuiv(C.COLOR,0,m)):(v[0]=Ie,v[1]=Ue,v[2]=A,v[3]=ye,C.clearBufferiv(C.COLOR,0,v))}else z|=C.COLOR_BUFFER_BIT}D&&(z|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),fe.dispose(),Ke.dispose(),Ce.dispose(),g.dispose(),N.dispose(),Z.dispose(),tt.dispose(),P.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",Jn),W.removeEventListener("sessionend",Qn),Kt.stop()};function J(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=rt.autoReset,D=ve.enabled,O=ve.autoUpdate,z=ve.needsUpdate,I=ve.type;pe(),rt.autoReset=x,ve.enabled=D,ve.autoUpdate=O,ve.needsUpdate=z,ve.type=I}function ge(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ze(x){const D=x.target;D.removeEventListener("dispose",Ze),ut(D)}function ut(x){pt(x),Ce.remove(x)}function pt(x){const D=Ce.get(x).programs;D!==void 0&&(D.forEach(function(O){Te.releaseProgram(O)}),x.isShaderMaterial&&Te.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,O,z,I,se){D===null&&(D=qe);const ue=I.isMesh&&I.matrixWorld.determinant()<0,xe=Si(x,D,O,z,I);Le.setMaterial(z,ue);let ye=O.index,Ie=1;if(z.wireframe===!0){if(ye=ee.getWireframeAttribute(O),ye===void 0)return;Ie=2}const Ue=O.drawRange,A=O.attributes.position;let Y=Ue.start*Ie,B=(Ue.start+Ue.count)*Ie;se!==null&&(Y=Math.max(Y,se.start*Ie),B=Math.min(B,(se.start+se.count)*Ie)),ye!==null?(Y=Math.max(Y,0),B=Math.min(B,ye.count)):A!=null&&(Y=Math.max(Y,0),B=Math.min(B,A.count));const ae=B-Y;if(ae<0||ae===1/0)return;tt.setup(I,z,xe,O,ye);let Re,le=Me;if(ye!==null&&(Re=j.get(ye),le=Xe,le.setIndex(Re)),I.isMesh)z.wireframe===!0?(Le.setLineWidth(z.wireframeLinewidth*He()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if(I.isLine){let ie=z.linewidth;ie===void 0&&(ie=1),Le.setLineWidth(ie*He()),I.isLineSegments?le.setMode(C.LINES):I.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else I.isPoints?le.setMode(C.POINTS):I.isSprite&&le.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)le.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))le.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ie=I._multiDrawStarts,Je=I._multiDrawCounts,Ne=I._multiDrawCount,K=ye?j.get(ye).bytesPerElement:1,we=Ce.get(z).currentProgram.getUniforms();for(let Pe=0;Pe<Ne;Pe++)we.setValue(C,"_gl_DrawID",Pe),le.render(ie[Pe]/K,Je[Pe])}else if(I.isInstancedMesh)le.renderInstances(Y,ae,I.count);else if(O.isInstancedBufferGeometry){const ie=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Je=Math.min(O.instanceCount,ie);le.renderInstances(Y,ae,Je)}else le.render(Y,ae)};function je(x,D,O){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,mn(x,D,O),x.side=0,x.needsUpdate=!0,mn(x,D,O),x.side=2):mn(x,D,O)}this.compile=function(x,D,O=null){O===null&&(O=x),h=Ke.get(O),h.init(D),E.push(h),O.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),x!==O&&x.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const z=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const se=I.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){const xe=se[ue];je(xe,O,I),z.add(xe)}else je(se,O,I),z.add(se)}),E.pop(),h=null,z},this.compileAsync=function(x,D,O=null){const z=this.compile(x,D,O);return new Promise(I=>{function se(){if(z.forEach(function(ue){Ce.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){I(x);return}setTimeout(se,10)}Ye.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let St=null;function Gt(x){St&&St(x)}function Jn(){Kt.stop()}function Qn(){Kt.start()}const Kt=new Ta;Kt.setAnimationLoop(Gt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(x){St=x,W.setAnimationLoop(x),x===null?Kt.stop():Kt.start()},W.addEventListener("sessionstart",Jn),W.addEventListener("sessionend",Qn),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,w),h=Ke.get(x,E.length),h.init(D),E.push(h),he.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Qe.setFromProjectionMatrix(he),te=this.localClippingEnabled,$=ne.init(this.clippingPlanes,te),y=fe.get(x,f.length),y.init(),f.push(y),W.enabled===!0&&W.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&ei(se,D,-1/0,S.sortObjects)}ei(x,D,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(X,me),et=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,et&&De.addToRenderList(y,x),this.info.render.frame++,$===!0&&ne.beginShadows();const O=h.state.shadowsArray;ve.render(O,x,D),$===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,I=y.transmissive;if(h.setupLights(),D.isArrayCamera){const se=D.cameras;if(I.length>0)for(let ue=0,xe=se.length;ue<xe;ue++){const ye=se[ue];ti(z,I,x,ye)}et&&De.render(x);for(let ue=0,xe=se.length;ue<xe;ue++){const ye=se[ue];xi(y,x,ye,ye.viewport)}}else I.length>0&&ti(z,I,x,D),et&&De.render(x),xi(y,x,D);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(S,x,D),tt.resetDefaultState(),L=-1,q=null,E.pop(),E.length>0?(h=E[E.length-1],$===!0&&ne.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ei(x,D,O,z){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Qe.intersectsSprite(x)){z&&be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(he);const ue=Z.update(x),xe=x.material;xe.visible&&y.push(x,ue,xe,O,be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Qe.intersectsObject(x))){const ue=Z.update(x),xe=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),be.copy(x.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),be.copy(ue.boundingSphere.center)),be.applyMatrix4(x.matrixWorld).applyMatrix4(he)),Array.isArray(xe)){const ye=ue.groups;for(let Ie=0,Ue=ye.length;Ie<Ue;Ie++){const A=ye[Ie],Y=xe[A.materialIndex];Y&&Y.visible&&y.push(x,ue,Y,O,be.z,A)}}else xe.visible&&y.push(x,ue,xe,O,be.z,null)}}const se=x.children;for(let ue=0,xe=se.length;ue<xe;ue++)ei(se[ue],D,O,z)}function xi(x,D,O,z){const I=x.opaque,se=x.transmissive,ue=x.transparent;h.setupLightsView(O),$===!0&&ne.setGlobalState(S.clippingPlanes,O),z&&Le.viewport(_.copy(z)),I.length>0&&Pn(I,D,O),se.length>0&&Pn(se,D,O),ue.length>0&&Pn(ue,D,O),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ti(x,D,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new wn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const se=h.state.transmissionRenderTarget[z.id],ue=z.viewport||_;se.setSize(ue.z,ue.w);const xe=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(G),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear(),et&&De.render(O);const ye=S.toneMapping;S.toneMapping=0;const Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),$===!0&&ne.setGlobalState(S.clippingPlanes,z),Pn(x,O,z),b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let A=0,Y=D.length;A<Y;A++){const B=D[A],ae=B.object,Re=B.geometry,le=B.material,ie=B.group;if(le.side===2&&ae.layers.test(z.layers)){const Je=le.side;le.side=1,le.needsUpdate=!0,ni(ae,O,z,Re,le,ie),le.side=Je,le.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se))}S.setRenderTarget(xe),S.setClearColor(G,k),Ie!==void 0&&(z.viewport=Ie),S.toneMapping=ye}function Pn(x,D,O){const z=D.isScene===!0?D.overrideMaterial:null;for(let I=0,se=x.length;I<se;I++){const ue=x[I],xe=ue.object,ye=ue.geometry,Ie=z===null?ue.material:z,Ue=ue.group;xe.layers.test(O.layers)&&ni(xe,D,O,ye,Ie,Ue)}}function ni(x,D,O,z,I,se){x.onBeforeRender(S,D,O,z,I,se),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(S,D,O,z,x,se),I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,S.renderBufferDirect(O,D,z,I,x,se),I.side=0,I.needsUpdate=!0,S.renderBufferDirect(O,D,z,I,x,se),I.side=2):S.renderBufferDirect(O,D,z,I,x,se),x.onAfterRender(S,D,O,z,I,se)}function mn(x,D,O){D.isScene!==!0&&(D=qe);const z=Ce.get(x),I=h.state.lights,se=h.state.shadowsArray,ue=I.state.version,xe=Te.getParameters(x,I.state,se,D,O),ye=Te.getProgramCacheKey(xe);let Ie=z.programs;z.environment=x.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(x.isMeshStandardMaterial?N:g).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ie===void 0&&(x.addEventListener("dispose",Ze),Ie=new Map,z.programs=Ie);let Ue=Ie.get(ye);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===ue)return ii(x,xe),Ue}else xe.uniforms=Te.getUniforms(x),x.onBeforeCompile(xe,S),Ue=Te.acquireProgram(xe,ye),Ie.set(ye,Ue),z.uniforms=xe.uniforms;const A=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(A.clippingPlanes=ne.uniform),ii(x,xe),z.needsLights=ri(x),z.lightsStateVersion=ue,z.needsLights&&(A.ambientLightColor.value=I.state.ambient,A.lightProbe.value=I.state.probe,A.directionalLights.value=I.state.directional,A.directionalLightShadows.value=I.state.directionalShadow,A.spotLights.value=I.state.spot,A.spotLightShadows.value=I.state.spotShadow,A.rectAreaLights.value=I.state.rectArea,A.ltc_1.value=I.state.rectAreaLTC1,A.ltc_2.value=I.state.rectAreaLTC2,A.pointLights.value=I.state.point,A.pointLightShadows.value=I.state.pointShadow,A.hemisphereLights.value=I.state.hemi,A.directionalShadowMap.value=I.state.directionalShadowMap,A.directionalShadowMatrix.value=I.state.directionalShadowMatrix,A.spotShadowMap.value=I.state.spotShadowMap,A.spotLightMatrix.value=I.state.spotLightMatrix,A.spotLightMap.value=I.state.spotLightMap,A.pointShadowMap.value=I.state.pointShadowMap,A.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function _n(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Ji.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function ii(x,D){const O=Ce.get(x);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Si(x,D,O,z,I){D.isScene!==!0&&(D=qe),b.resetTextureUnits();const se=D.fog,ue=z.isMeshStandardMaterial?D.environment:null,xe=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:pn,ye=(z.isMeshStandardMaterial?N:g).get(z.envMap||ue),Ie=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),A=!!O.morphAttributes.position,Y=!!O.morphAttributes.normal,B=!!O.morphAttributes.color;let ae=0;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ae=S.toneMapping);const Re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=Re!==void 0?Re.length:0,ie=Ce.get(z),Je=h.state.lights;if($===!0&&(te===!0||x!==q)){const ot=x===q&&z.id===L;ne.setState(z,x,ot)}let Ne=!1;z.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Je.state.version||ie.outputColorSpace!==xe||I.isBatchedMesh&&ie.batching===!1||!I.isBatchedMesh&&ie.batching===!0||I.isBatchedMesh&&ie.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ie.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ie.instancing===!1||!I.isInstancedMesh&&ie.instancing===!0||I.isSkinnedMesh&&ie.skinning===!1||!I.isSkinnedMesh&&ie.skinning===!0||I.isInstancedMesh&&ie.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ie.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ie.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ie.instancingMorph===!1&&I.morphTexture!==null||ie.envMap!==ye||z.fog===!0&&ie.fog!==se||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==ne.numPlanes||ie.numIntersection!==ne.numIntersection)||ie.vertexAlphas!==Ie||ie.vertexTangents!==Ue||ie.morphTargets!==A||ie.morphNormals!==Y||ie.morphColors!==B||ie.toneMapping!==ae||ie.morphTargetsCount!==le)&&(Ne=!0):(Ne=!0,ie.__version=z.version);let K=ie.currentProgram;Ne===!0&&(K=mn(z,D,I));let we=!1,Pe=!1,Ge=!1;const Ae=K.getUniforms(),at=ie.uniforms;if(Le.useProgram(K.program)&&(we=!0,Pe=!0,Ge=!0),z.id!==L&&(L=z.id,Pe=!0),we||q!==x){We.reverseDepthBuffer?(Se.copy(x.projectionMatrix),Ha(Se),Va(Se),Ae.setValue(C,"projectionMatrix",Se)):Ae.setValue(C,"projectionMatrix",x.projectionMatrix),Ae.setValue(C,"viewMatrix",x.matrixWorldInverse);const ot=Ae.map.cameraPosition;ot!==void 0&&ot.setValue(C,ze.setFromMatrixPosition(x.matrixWorld)),We.logarithmicDepthBuffer&&Ae.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ae.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),q!==x&&(q=x,Pe=!0,Ge=!0)}if(I.isSkinnedMesh){Ae.setOptional(C,I,"bindMatrix"),Ae.setOptional(C,I,"bindMatrixInverse");const ot=I.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),Ae.setValue(C,"boneTexture",ot.boneTexture,b))}I.isBatchedMesh&&(Ae.setOptional(C,I,"batchingTexture"),Ae.setValue(C,"batchingTexture",I._matricesTexture,b),Ae.setOptional(C,I,"batchingIdTexture"),Ae.setValue(C,"batchingIdTexture",I._indirectTexture,b),Ae.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&Ae.setValue(C,"batchingColorTexture",I._colorsTexture,b));const yt=O.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&Fe.update(I,O,K),(Pe||ie.receiveShadow!==I.receiveShadow)&&(ie.receiveShadow=I.receiveShadow,Ae.setValue(C,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(at.envMap.value=ye,at.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(at.envMapIntensity.value=D.environmentIntensity),Pe&&(Ae.setValue(C,"toneMappingExposure",S.toneMappingExposure),ie.needsLights&&Ht(at,Ge),se&&z.fog===!0&&oe.refreshFogUniforms(at,se),oe.refreshMaterialUniforms(at,z,re,V,h.state.transmissionRenderTarget[x.id]),Ji.upload(C,_n(ie),at,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ji.upload(C,_n(ie),at,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ae.setValue(C,"center",I.center),Ae.setValue(C,"modelViewMatrix",I.modelViewMatrix),Ae.setValue(C,"normalMatrix",I.normalMatrix),Ae.setValue(C,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ot=z.uniformsGroups;for(let $t=0,ar=ot.length;$t<ar;$t++){const si=ot[$t];P.update(si,K),P.bind(si,K)}}return K}function Ht(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function ri(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,D,O){Ce.get(x.texture).__webglTexture=D,Ce.get(x.depthTexture).__webglTexture=O;const z=Ce.get(x);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const O=Ce.get(x);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,O=0){w=x,U=D,R=O;let z=!0,I=null,se=!1,ue=!1;if(x){const ye=Ce.get(x);if(ye.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(ye.__hasExternalTextures)b.rebindTextures(x,Ce.get(x.texture).__webglTexture,Ce.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const A=x.depthTexture;if(ye.__boundDepthTexture!==A){if(A!==null&&Ce.has(A)&&(x.width!==A.image.width||x.height!==A.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}const Ie=x.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const Ue=Ce.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[D])?I=Ue[D][O]:I=Ue[D],se=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?I=Ce.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?I=Ue[O]:I=Ue,_.copy(x.viewport),M.copy(x.scissor),H=x.scissorTest}else _.copy(_e).multiplyScalar(re).floor(),M.copy(Ee).multiplyScalar(re).floor(),H=$e;if(Le.bindFramebuffer(C.FRAMEBUFFER,I)&&z&&Le.drawBuffers(x,I),Le.viewport(_),Le.scissor(M),Le.setScissorTest(H),se){const ye=Ce.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,O)}else if(ue){const ye=Ce.get(x.texture),Ie=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,Ie)}L=-1},this.readRenderTargetPixels=function(x,D,O,z,I,se,ue){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Le.bindFramebuffer(C.FRAMEBUFFER,xe);try{const ye=x.texture,Ie=ye.format,Ue=ye.type;if(!We.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-z&&O>=0&&O<=x.height-I&&C.readPixels(D,O,z,I,Oe.convert(Ie),Oe.convert(Ue),se)}finally{const ye=w!==null?Ce.get(w).__webglFramebuffer:null;Le.bindFramebuffer(C.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(x,D,O,z,I,se,ue){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){const ye=x.texture,Ie=ye.format,Ue=ye.type;if(!We.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-z&&O>=0&&O<=x.height-I){Le.bindFramebuffer(C.FRAMEBUFFER,xe);const A=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,A),C.bufferData(C.PIXEL_PACK_BUFFER,se.byteLength,C.STREAM_READ),C.readPixels(D,O,z,I,Oe.convert(Ie),Oe.convert(Ue),0);const Y=w!==null?Ce.get(w).__webglFramebuffer:null;Le.bindFramebuffer(C.FRAMEBUFFER,Y);const B=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ga(C,B,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,A),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,se),C.deleteBuffer(A),C.deleteSync(B),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,O=0){x.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const z=Math.pow(2,-O),I=Math.floor(x.image.width*z),se=Math.floor(x.image.height*z),ue=D!==null?D.x:0,xe=D!==null?D.y:0;b.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,ue,xe,I,se),Le.unbindTexture()},this.copyTextureToTexture=function(x,D,O=null,z=null,I=0){x.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,x=arguments[1],D=arguments[2],I=arguments[3]||0,O=null);let se,ue,xe,ye,Ie,Ue;O!==null?(se=O.max.x-O.min.x,ue=O.max.y-O.min.y,xe=O.min.x,ye=O.min.y):(se=x.image.width,ue=x.image.height,xe=0,ye=0),z!==null?(Ie=z.x,Ue=z.y):(Ie=0,Ue=0);const A=Oe.convert(D.format),Y=Oe.convert(D.type);b.setTexture2D(D,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const B=C.getParameter(C.UNPACK_ROW_LENGTH),ae=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Re=C.getParameter(C.UNPACK_SKIP_PIXELS),le=C.getParameter(C.UNPACK_SKIP_ROWS),ie=C.getParameter(C.UNPACK_SKIP_IMAGES),Je=x.isCompressedTexture?x.mipmaps[I]:x.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Je.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Je.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ye),x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,I,Ie,Ue,se,ue,A,Y,Je.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,I,Ie,Ue,Je.width,Je.height,A,Je.data):C.texSubImage2D(C.TEXTURE_2D,I,Ie,Ue,se,ue,A,Y,Je),C.pixelStorei(C.UNPACK_ROW_LENGTH,B),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ie),I===0&&D.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(x,D,O=null,z=null,I=0){x.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,x=arguments[2],D=arguments[3],I=arguments[4]||0);let se,ue,xe,ye,Ie,Ue,A,Y,B;const ae=x.isCompressedTexture?x.mipmaps[I]:x.image;O!==null?(se=O.max.x-O.min.x,ue=O.max.y-O.min.y,xe=O.max.z-O.min.z,ye=O.min.x,Ie=O.min.y,Ue=O.min.z):(se=ae.width,ue=ae.height,xe=ae.depth,ye=0,Ie=0,Ue=0),z!==null?(A=z.x,Y=z.y,B=z.z):(A=0,Y=0,B=0);const Re=Oe.convert(D.format),le=Oe.convert(D.type);let ie;if(D.isData3DTexture)b.setTexture3D(D,0),ie=C.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)b.setTexture2DArray(D,0),ie=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const Je=C.getParameter(C.UNPACK_ROW_LENGTH),Ne=C.getParameter(C.UNPACK_IMAGE_HEIGHT),K=C.getParameter(C.UNPACK_SKIP_PIXELS),we=C.getParameter(C.UNPACK_SKIP_ROWS),Pe=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ie),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ue),x.isDataTexture||x.isData3DTexture?C.texSubImage3D(ie,I,A,Y,B,se,ue,xe,Re,le,ae.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(ie,I,A,Y,B,se,ue,xe,Re,ae.data):C.texSubImage3D(ie,I,A,Y,B,se,ue,xe,Re,le,ae),C.pixelStorei(C.UNPACK_ROW_LENGTH,Je),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ne),C.pixelStorei(C.UNPACK_SKIP_PIXELS,K),C.pixelStorei(C.UNPACK_SKIP_ROWS,we),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pe),I===0&&D.generateMipmaps&&C.generateMipmap(ie),Le.unbindTexture()},this.initRenderTarget=function(x){Ce.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),Le.unbindTexture()},this.resetState=function(){U=0,R=0,w=null,Le.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$r?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===rr?"display-p3":"srgb"}}class tf extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nf extends At{constructor(e=null,t=1,i=1,r,s,o,a,l,c=1003,u=1003,d,p){super(null,o,a,l,c,u,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ut extends Ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wn=new lt,ra=new lt,qi=[],sa=new Cn,rf=new lt,di=new mt,pi=new Zn;class Yi extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ut(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,rf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wn),sa.copy(e.boundingBox).applyMatrix4(Wn),this.boundingBox.union(sa)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wn),pi.copy(e.boundingSphere).applyMatrix4(Wn),this.boundingSphere.union(pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(di.geometry=this.geometry,di.material=this.material,di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pi.copy(this.boundingSphere),pi.applyMatrix4(i),e.ray.intersectsSphere(pi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wn),ra.multiplyMatrices(i,Wn),di.matrixWorld=ra,di.raycast(e,qi);for(let o=0,a=qi.length;o<a;o++){const l=qi[o];l.instanceId=s,l.object=this,t.push(l)}qi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ut(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new nf(new Float32Array(r*this.count),r,this.count,1028,1015));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sf extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const aa=new lt,qr=new pa,Ki=new Zn,$i=new F;class af extends Pt{constructor(e=new zt,t=new sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ki.copy(i.boundingSphere),Ki.applyMatrix4(r),Ki.radius+=s,e.ray.intersectsSphere(Ki)===!1)return;aa.copy(r).invert(),qr.copy(e.ray).applyMatrix4(aa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=p,y=m;v<y;v++){const h=c.getX(v);$i.fromBufferAttribute(d,h),oa($i,h,l,r,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=p,y=m;v<y;v++)$i.fromBufferAttribute(d,v),oa($i,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function oa(n,e,t,i,r,s,o){const a=qr.distanceSqToPoint(n);if(a<t){const l=new F;qr.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class of extends At{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jr extends zt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],p=[],m=[];let v=0;const y=[],h=i/2;let f=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(p,3)),this.setAttribute("uv",new Nt(m,2));function E(){const T=new F,U=new F;let R=0;const w=(t-e)/i;for(let L=0;L<=s;L++){const q=[],_=L/s,M=_*(t-e)+e;for(let H=0;H<=r;H++){const G=H/r,k=G*l+a,Q=Math.sin(k),V=Math.cos(k);U.x=M*Q,U.y=-_*i+h,U.z=M*V,d.push(U.x,U.y,U.z),T.set(Q,w,V).normalize(),p.push(T.x,T.y,T.z),m.push(G,1-_),q.push(v++)}y.push(q)}for(let L=0;L<r;L++)for(let q=0;q<s;q++){const _=y[q][L],M=y[q+1][L],H=y[q+1][L+1],G=y[q][L+1];e>0&&(u.push(_,M,G),R+=3),t>0&&(u.push(M,H,G),R+=3)}c.addGroup(f,R,0),f+=R}function S(T){const U=v,R=new nt,w=new F;let L=0;const q=T===!0?e:t,_=T===!0?1:-1;for(let H=1;H<=r;H++)d.push(0,h*_,0),p.push(0,_,0),m.push(.5,.5),v++;const M=v;for(let H=0;H<=r;H++){const k=H/r*l+a,Q=Math.cos(k),V=Math.sin(k);w.x=q*V,w.y=h*_,w.z=q*Q,d.push(w.x,w.y,w.z),p.push(0,_,0),R.x=Q*.5+.5,R.y=V*.5*_+.5,m.push(R.x,R.y),v++}for(let H=0;H<r;H++){const G=U+H,k=M+H;T===!0?u.push(k,k+1,G):u.push(k+1,k,G),L+=3}c.addGroup(f,L,T===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jr extends zt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(s.slice(),3)),this.setAttribute("uv",new Nt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new F,T=new F,U=new F;for(let R=0;R<t.length;R+=3)m(t[R+0],S),m(t[R+1],T),m(t[R+2],U),l(S,T,U,E)}function l(E,S,T,U){const R=U+1,w=[];for(let L=0;L<=R;L++){w[L]=[];const q=E.clone().lerp(T,L/R),_=S.clone().lerp(T,L/R),M=R-L;for(let H=0;H<=M;H++)H===0&&L===R?w[L][H]=q:w[L][H]=q.clone().lerp(_,H/M)}for(let L=0;L<R;L++)for(let q=0;q<2*(R-L)-1;q++){const _=Math.floor(q/2);q%2===0?(p(w[L][_+1]),p(w[L+1][_]),p(w[L][_])):(p(w[L][_+1]),p(w[L+1][_+1]),p(w[L+1][_]))}}function c(E){const S=new F;for(let T=0;T<s.length;T+=3)S.x=s[T+0],S.y=s[T+1],S.z=s[T+2],S.normalize().multiplyScalar(E),s[T+0]=S.x,s[T+1]=S.y,s[T+2]=S.z}function u(){const E=new F;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const T=h(E)/2/Math.PI+.5,U=f(E)/Math.PI+.5;o.push(T,1-U)}v(),d()}function d(){for(let E=0;E<o.length;E+=6){const S=o[E+0],T=o[E+2],U=o[E+4],R=Math.max(S,T,U),w=Math.min(S,T,U);R>.9&&w<.1&&(S<.2&&(o[E+0]+=1),T<.2&&(o[E+2]+=1),U<.2&&(o[E+4]+=1))}}function p(E){s.push(E.x,E.y,E.z)}function m(E,S){const T=E*3;S.x=e[T+0],S.y=e[T+1],S.z=e[T+2]}function v(){const E=new F,S=new F,T=new F,U=new F,R=new nt,w=new nt,L=new nt;for(let q=0,_=0;q<s.length;q+=9,_+=6){E.set(s[q+0],s[q+1],s[q+2]),S.set(s[q+3],s[q+4],s[q+5]),T.set(s[q+6],s[q+7],s[q+8]),R.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),L.set(o[_+4],o[_+5]),U.copy(E).add(S).add(T).divideScalar(3);const M=h(U);y(R,_+0,E,M),y(w,_+2,S,M),y(L,_+4,T,M)}}function y(E,S,T,U){U<0&&E.x===1&&(o[S]=E.x-1),T.x===0&&T.z===0&&(o[S]=U/2/Math.PI+.5)}function h(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.vertices,e.indices,e.radius,e.details)}}class ir extends Jr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ir(e.radius,e.detail)}}class Hr extends zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);const Yr=10,Pa=45,La=Math.tan(Pa/2*Math.PI/180),ht=30,la=`
  uniform float uTime;
  uniform float uCamY;
  uniform float uCaus;     // 1 = каустика включена, 0 = выключена адаптивным качеством
  uniform float uAspect;

  float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
  vec2 hash2(vec2 p){ p = vec2(dot(p, vec2(127.1,311.7)), dot(p, vec2(269.5,183.3))); return fract(sin(p)*43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i), b = hash(i+vec2(1.,0.)), c = hash(i+vec2(0.,1.)), d = hash(i+vec2(1.,1.));
    vec2 u = f*f*(3.-2.*f);
    return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
  }

  // Цвет толщи по мировой глубине: светлая аква у поверхности → бирюза → глубокий сине-зелёный.
  vec3 waterCol(float y){
    float d = clamp(-y, 0.0, 40.0);
    vec3 c = mix(vec3(0.60,0.88,0.89), vec3(0.40,0.77,0.82), smoothstep(0.0, 3.0, d));
    c = mix(c, vec3(0.20,0.60,0.68), smoothstep(3.0, 10.0, d));
    c = mix(c, vec3(0.10,0.43,0.51), smoothstep(10.0, 17.0, d));
    c = mix(c, vec3(0.05,0.30,0.37), smoothstep(17.0, 24.0, d));
    c = mix(c, vec3(0.03,0.21,0.27), smoothstep(24.0, 31.0, d));
    return c;
  }

  // Каустика: края анимированных ячеек Вороного, два слоя с разной скоростью дают
  // характерную световую сетку. Своя реализация, не копия чужого шейдера.
  float causticLayer(vec2 q, float t){
    q += 0.35*vec2(sin(q.y*1.3 + t*0.7), cos(q.x*1.1 - t*0.6));
    vec2 i = floor(q), f = fract(q);
    float f1 = 8.0, f2 = 8.0;
    for (int y=-1; y<=1; y++) for (int x=-1; x<=1; x++){
      vec2 g = vec2(float(x), float(y));
      vec2 o = hash2(i+g);
      o = 0.5 + 0.42*sin(t*0.8 + 6.2831*o);
      float d = length(g + o - f);
      if (d < f1){ f2 = f1; f1 = d; } else if (d < f2){ f2 = d; }
    }
    return pow(1.0 - smoothstep(0.0, 0.3, f2 - f1), 2.6);
  }
  float caustic(vec2 p, float t){
    return causticLayer(p + vec2(t*0.05, -t*0.03), t)*0.65
         + causticLayer(p*1.7 + vec2(-t*0.07, t*0.04) + 3.1, t*1.2)*0.45;
  }

  // Поглощение толщей: дальнее и глубокое уходит в цвет воды вокруг камеры.
  vec3 underwater(vec3 c, vec3 w, float density){
    float dist = length(w - cameraPosition);
    float f = 1.0 - exp(-max(dist - 4.0, 0.0)*density);
    float depthTint = smoothstep(0.0, 30.0, -w.y);
    c *= mix(vec3(1.0), vec3(0.62,0.82,0.86), depthTint);
    return mix(c, waterCol(mix(w.y, cameraPosition.y, 0.5)), f);
  }
`,ca=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy*2.0, 0.0, 1.0); }
`,ua=`
  varying vec3 vW; varying vec2 vUv;
  void main(){
    vec4 w = modelMatrix*vec4(position, 1.0);
    vW = w.xyz; vUv = uv;
    gl_Position = projectionMatrix*viewMatrix*w;
  }
`,lf=`
  varying vec2 vUv;
  uniform float uHalfFar;
  void main(){
    vec2 ndc = vUv*2.0 - 1.0;
    float t = uTime;
    float wy = uCamY + ndc.y*uHalfFar;
    float wx = ndc.x*uHalfFar*uAspect;
    float hz = 0.75 + 0.28*sin(wx*0.16 + t*0.16) + 0.12*sin(wx*0.45 - t*0.3) + 0.04*sin(wx*1.3 + t*0.7);
    vec3 col;
    float edgeW = uHalfFar*0.012;
    if (wy > hz - edgeW){
      float k = clamp((wy - hz)/(uHalfFar*1.1), 0.0, 1.0);
      col = mix(vec3(0.90,0.958,0.975), vec3(0.80,0.905,0.945), smoothstep(0.0, 0.8, k));
      // мягкое солнце справа сверху
      vec2 sp = vec2(wx - uHalfFar*uAspect*0.55, wy - hz - uHalfFar*0.95);
      col += vec3(1.0,0.97,0.88)*0.03*exp(-length(sp)*0.22);
      // лёгкая дымка у горизонта
      col = mix(col, vec3(0.80,0.93,0.95), exp(-max(wy-hz, 0.0)*1.6)*0.6);
      // мягкий переход к дальней воде вместо жёсткой линии
      col = mix(col, waterCol(-0.2)*1.05, smoothstep(edgeW, -edgeW, wy - hz));
    } else {
      float d = hz - wy;
      col = waterCol(wy);
      // изнанка поверхности: переливы света прямо под водой
      float sh = smoothstep(3.0, 0.0, d);
      float ns = noise(vec2(wx*1.4 - t*0.25, d*5.0 + t*0.2)) * noise(vec2(wx*0.6 + t*0.1, d*2.0));
      col += sh*smoothstep(0.25, 0.7, ns)*0.45*vec3(0.92,1.0,1.0);
      // лучи сверху, наклонные, гаснут с глубиной
      float a = wx + wy*0.32;
      float r = pow(noise(vec2(a*0.5 + t*0.035, 0.5)), 3.0)*1.3
              + pow(noise(vec2(a*1.25 - t*0.05, 3.7)), 4.0)*0.9;
      col += r*vec3(0.78,0.96,0.93)*0.26*exp(-d*0.075)*smoothstep(0.2, 2.0, d);
      if (uCaus > 0.5) col += caustic(vec2(wx, wy)*0.3, t)*0.025*exp(-d*0.07)*vec3(0.8,1.0,0.95);
      float v = smoothstep(1.7, 0.3, length(ndc*vec2(0.8, 1.0)));
      col *= mix(0.84, 1.0, v);
    }
    col += (hash(gl_FragCoord.xy + t) - 0.5)/255.0;   // дизеринг от полос градиента
    gl_FragColor = vec4(col, 1.0);
  }
`,cf=`
  varying vec3 vW; varying vec2 vUv;
  uniform float uY, uSeed, uAlpha, uFill, uHalfW;
  uniform vec3 uAmp, uFreq, uSpd, uTint;
  uniform vec4 uRip[4];

  // волновой пакет; рябь собрана нечётно (слева вверх, справа вниз) — без излома в точке клика
  float pk(float u){ return exp(-u*u*1.6)*sin(u*6.0); }
  float waveH(float x, float t){
    float h = uAmp.x*sin(x*uFreq.x + t*uSpd.x + uSeed)
            + uAmp.y*sin(x*uFreq.y - t*uSpd.y + uSeed*1.7)
            + uAmp.z*sin(x*uFreq.z + t*uSpd.z + uSeed*3.1)
            + 0.035*sin(x*3.3 + t*1.4 + uSeed*0.7)
            + 0.012*sin(x*7.9 - t*2.3 + uSeed*2.1);          // капиллярная мелочь
    for (int i=0; i<4; i++){
      float age = t - uRip[i].y;
      if (age > 0.0 && age < 4.5){
        float d = x - uRip[i].x*uHalfW;
        float r = age*1.5;
        float env = uRip[i].z*0.2*exp(-age*0.85)*smoothstep(0.0, 0.45, age);
        h += env*(pk(-d - r) - pk(d - r));
      }
    }
    return uY + h;
  }

  void main(){
    float t = uTime, x = vW.x, y = vW.y;
    float h = waveH(x, t);
    float slope = (waveH(x + 0.02, t) - h)/0.02;
    float d = y - h;                         // > 0 — над гребнем
    float aa = fwidth(d)*1.2 + 0.002;
    float inside = 1.0 - smoothstep(-aa, aa, d);
    if (inside <= 0.0) discard;
    float u = max(-d, 0.0);                  // глубина под гребнем

    vec3 col = mix(vec3(0.70,0.92,1.0), uTint, smoothstep(0.0, 0.18, u));
    col *= 0.95 + 0.1*noise(vec2(x*0.35 + uSeed*3.0, t*0.05));          // неоднородность толщи
    col = mix(col, uTint*0.72, exp(-pow((u - 0.05)*36.0, 2.0))*0.45);   // тёмная линза под кромкой
    col = mix(col, waterCol(y)*1.02, smoothstep(0.35, uFill, u));
    float a = mix(0.9, 0.0, smoothstep(0.08, uFill, u));

    // светлая кромка по гребню и тонкие контуры ниже, повторяющие форму гребня
    float edge = exp(-u*120.0) + exp(-u*28.0)*0.18;
    float off = 0.11 + 0.05*sin(x*1.6 + t*0.55 + uSeed);
    float rim = exp(-pow((u - off)*60.0, 2.0))*0.7;
    float off2 = 0.27 + 0.07*sin(x*1.1 - t*0.4 + uSeed*2.0);
    float rim2 = exp(-pow((u - off2)*75.0, 2.0))*0.35*(0.6 + 0.4*sin(x*0.8 + uSeed));
    // глянцевые вытянутые блики внутри ленты (как на референсе)
    float st = noise(vec2(x*0.55 - t*0.12 + uSeed, u*13.0));
    float streak = smoothstep(0.7, 0.86, st)*smoothstep(0.03, 0.12, u)*(1.0 - smoothstep(0.45, 0.95, u));
    // зеркальный блик там, где наклон гребня смотрит на свет
    vec2 n = normalize(vec2(-slope, 1.0));
    float spec = pow(max(dot(n, normalize(vec2(-0.55, 1.0))), 0.0), 26.0)*exp(-u*7.0);
    // солнечные искры на гребне
    float g = noise(vec2(x*8.0 - t*0.9 + uSeed*5.0, t*1.7 + uSeed));
    float glint = pow(g, 14.0)*exp(-u*14.0)*2.2;
    // круги от клика расходятся в толще под поверхностью
    float ring = 0.0;
    for (int i=0; i<4; i++){
      float age = t - uRip[i].y;
      if (age > 0.0 && age < 4.5){
        float rr = length(vec2(x - uRip[i].x*uHalfW, u*2.2)) - age*1.5;
        ring += exp(-rr*rr*30.0)*exp(-age*1.0)*smoothstep(0.0, 0.45, age)*uRip[i].z;
      }
    }
    float hi = clamp(edge*0.95 + rim + rim2 + streak*0.7 + spec*0.6 + ring*0.4 + glint, 0.0, 1.0);
    col = mix(col, vec3(1.0), hi);
    a = max(a, hi*0.95);
    gl_FragColor = vec4(col, a*inside*uAlpha);
  }
`,uf=`
  attribute vec4 aB;  // x, z, size, speed
  attribute vec4 aC;  // phase, yStart, yRange, kind (0 поверхность, 1 дно)
  uniform float uSurfVis, uBotVis;
  varying vec2 vUv; varying float vA; varying vec3 vW; varying float vOb;
  void main(){
    float t = uTime;
    float k = fract(t*aB.w/aC.z + aC.x);
    float y = aC.y + k*aC.z;
    // зигзаг всплытия: крупные раскачиваются сильнее
    float x = aB.x + sin(t*(1.4 + aB.z*4.0) + aC.x*40.0)*0.05*(0.4 + aB.z*3.0);
    float s = aB.z;
    vOb = clamp((aB.z - 0.1)*1.4, 0.0, 0.22)*(0.7 + 0.3*sin(t*7.0 + aC.x*30.0));
    vec3 w = vec3(x, y, aB.y) + vec3(position.x*s*(1.0 + vOb*0.5), position.y*s*(1.0 - vOb), 0.0);
    vW = w; vUv = uv;
    float vis = aC.w < 0.5 ? uSurfVis : uBotVis;
    vA = smoothstep(0.0, 0.08, k)*(1.0 - smoothstep(0.86, 1.0, k))*vis;
    gl_Position = projectionMatrix*viewMatrix*vec4(w, 1.0);
  }
`,hf=`
  varying vec2 vUv; varying float vA; varying vec3 vW; varying float vOb;
  void main(){
    vec2 p = vUv - 0.5;
    float r = length(p)*2.0;
    if (r > 1.0 || vA < 0.01) discard;
    float rim = smoothstep(0.70, 0.96, r)*(1.0 - smoothstep(0.96, 1.0, r));
    float outline = smoothstep(0.93, 0.985, r)*(1.0 - smoothstep(0.985, 1.0, r));
    // внутри почти прозрачно; снизу светлее — отражение светлой поверхности
    float inner = 0.05 + 0.12*smoothstep(0.0, -0.45, p.y)*smoothstep(0.25, 0.9, r);
    float spot = smoothstep(0.2, 0.0, length((p - vec2(-0.15, 0.2))*vec2(1.0, 1.7)));
    float spot2 = smoothstep(0.08, 0.0, length(p - vec2(0.19, -0.2)))*0.6;
    vec3 c = mix(vec3(0.70,0.92,0.97), vec3(1.0), clamp(rim*0.7 + spot, 0.0, 1.0));
    c = mix(c, vec3(0.20,0.42,0.52), outline*0.55);
    c = underwater(c, vW, 0.02);
    float a = clamp(rim*0.8 + inner + spot*0.95 + spot2 + outline*0.45, 0.0, 1.0);
    gl_FragColor = vec4(c, a*vA);
  }
`,ff=`
  attribute vec4 aP;
  uniform float uPR;
  varying float vA;
  void main(){
    float R = 9.0;
    float y = uCamY + mod(aP.y*2.0*R - uCamY + R + uTime*0.06*(0.4 + aP.w), 2.0*R) - R;
    float z = aP.z;
    float halfW = (${Yr.toFixed(1)} - z)*${La.toFixed(5)}*uAspect;
    float x = (aP.x*2.0 - 1.0)*halfW*1.1 + sin(uTime*0.25 + aP.w*20.0)*0.18;
    vec4 mv = viewMatrix*vec4(x, y, z, 1.0);
    gl_Position = projectionMatrix*mv;
    gl_PointSize = (1.4 + aP.w*2.6)*uPR*9.0/(-mv.z);
    vA = smoothstep(-0.6, -2.2, y)*(0.22 + 0.4*aP.w)*smoothstep(-${ht.toFixed(1)}, -${(ht-1.5).toFixed(1)}, y);
  }
`,df=`
  varying float vA;
  void main(){
    float r = length(gl_PointCoord - 0.5);
    if (r > 0.5) discard;
    gl_FragColor = vec4(vec3(0.86,0.98,0.96), vA*smoothstep(0.5, 0.1, r));
  }
`,pf=`
  attribute vec4 aFish;   // species, phase, beatAmp, alpha
  attribute float aFace;  // -1..1, разворот
  varying vec2 vUv; varying float vSp; varying float vA; varying vec3 vW; varying float vPh;
  void main(){
    vec3 p = position;                 // x: -0.5 хвост .. 0.5 нос
    float along = 0.5 - p.x;           // 0 нос .. 1 хвост
    float ph = aFish.y;
    float w = along*along;
    p.y += sin(ph - along*4.2)*0.08*w*aFish.z;            // мягкая волна по телу, к хвосту сильнее
    float tail = smoothstep(0.74, 1.0, along);
    p.x += tail*(1.0 - abs(cos(ph)))*0.07*aFish.z;         // удар хвоста: ракурс укорачивает плавник
    p.y *= 1.0/3.2;
    p.x *= aFace;
    vec4 w4 = modelMatrix*instanceMatrix*vec4(p, 1.0);
    vW = w4.xyz;
    vUv = uv;
    vSp = aFish.x; vA = aFish.w; vPh = ph;
    gl_Position = projectionMatrix*viewMatrix*w4;
  }
`,mf=`
  uniform sampler2D uAtlas;
  varying vec2 vUv; varying float vSp; varying float vA; varying vec3 vW; varying float vPh;
  void main(){
    if (vA < 0.01) discard;
    vec2 uv = vec2(vUv.x, (vUv.y + (2.0 - vSp))/3.0);
    vec4 tx = texture2D(uAtlas, uv);
    if (tx.a < 0.04) discard;
    vec3 c = tx.rgb;
    float top = smoothstep(0.42, 0.8, vUv.y);
    c *= mix(0.8, 1.05, smoothstep(0.25, 0.75, vUv.y));                              // свет сверху
    float sheen = exp(-pow((vUv.y - 0.6)*9.0, 2.0))*(0.5 + 0.5*sin(vPh - vUv.x*6.0));
    c += sheen*0.1*vec3(0.9,1.0,0.95);                                               // блик чешуи
    if (uCaus > 0.5) c += caustic(vW.xy*0.9 + vW.z*0.3, uTime)*0.22*top*vec3(0.9,1.0,0.95);
    c = underwater(c, vW, 0.075);
    gl_FragColor = vec4(c, tx.a*vA);
  }
`,Da=`
  float floorH(vec2 p){
    return 0.45*sin(p.x*0.21 + p.y*0.13) + 0.28*sin(p.x*0.53 - p.y*0.37 + 1.3)
         + 0.12*sin(p.x*1.3 + p.y*0.9) + max(0.0, -p.y - 18.0)*0.06;
  }
`;function Zt(n,e){return .45*Math.sin(n*.21+e*.13)+.28*Math.sin(n*.53-e*.37+1.3)+.12*Math.sin(n*1.3+e*.9)+Math.max(0,-e-18)*.06}const _f=`
  ${Da}
  varying vec3 vW; varying float vH;
  void main(){
    vec4 w = modelMatrix*vec4(position, 1.0);
    vH = floorH(w.xz);
    w.y += vH;
    vW = w.xyz;
    gl_Position = projectionMatrix*viewMatrix*w;
  }
`,gf=`
  varying vec3 vW; varying float vH;
  uniform vec4 uSh[18];   // тени рыб: x, z, высота над дном, длина
  uniform float uShN;
  void main(){
    vec2 xz = vW.xz;
    float warp = noise(xz*0.6)*5.0;
    float ph = dot(xz, vec2(1.0, 0.38))*5.2 + warp;
    float rip = sin(ph);
    float ripD = cos(ph);                                    // склон ряби: освещённый/теневой
    float rip2 = sin(dot(xz, vec2(0.7, -0.5))*11.0 + warp*1.7)*0.35;
    float n = noise(xz*3.0)*0.5 + noise(xz*12.0)*0.3;
    vec3 sand = mix(vec3(0.60,0.54,0.42), vec3(0.82,0.75,0.60), clamp(0.5 + rip*0.25 + rip2*0.15 + (n - 0.4)*0.5, 0.0, 1.0));
    // пятна ила
    float silt = smoothstep(0.5, 0.78, noise(xz*0.17 + 7.0));
    sand = mix(sand, sand*vec3(0.74,0.73,0.66), silt*0.7);
    // гравий: россыпь мелких камешков разных цветов
    float grav = smoothstep(0.5, 0.78, noise(xz*0.21 - 3.0));
    vec2 gc = xz*9.0; vec2 gi = floor(gc); vec2 go = hash2(gi);
    vec2 lp = fract(gc) - (0.25 + go*0.5);
    float pr = 0.18 + 0.14*hash(gi + 1.7);
    float peb = smoothstep(pr, pr*0.7, length(lp*vec2(1.0, 1.4)))*grav*step(0.35, hash(gi + 9.3));
    vec3 pcol = mix(mix(vec3(0.45,0.44,0.42), vec3(0.58,0.46,0.36), hash(gi + 4.0)), vec3(0.32,0.30,0.28), step(0.75, hash(gi + 2.0)));
    pcol *= 0.85 + 0.35*smoothstep(-0.1, 0.12, lp.y);         // камешек освещён сверху
    sand = mix(sand, pcol, peb);
    // песчинки
    vec2 gc2 = xz*26.0; vec2 gi2 = floor(gc2); vec2 go2 = hash2(gi2);
    float grain = smoothstep(0.22, 0.05, length(fract(gc2) - go2*0.6 - 0.2))*step(0.7, hash(gi2 + 3.1));
    sand *= 1.0 + (go2.x - 0.5)*0.35*grain;
    float light = 0.56 + vH*0.12 + rip*0.05 + ripD*0.09*(1.0 - peb);
    if (uCaus > 0.5) light += caustic(xz*0.75, uTime)*0.5;
    // мягкие тени рыб (свет сверху)
    float shade = 0.0;
    for (int i=0; i<18; i++){
      if (float(i) >= uShN) break;
      vec4 s = uSh[i];
      vec2 q = (xz - s.xy)/vec2(s.w*0.42 + s.z*0.1, s.w*0.12 + s.z*0.1);
      shade += (1.0 - smoothstep(0.25, 1.0, length(q)))*0.5*exp(-s.z*0.2);
    }
    light *= 1.0 - clamp(shade, 0.0, 0.6);
    vec3 c = sand*light;
    c = underwater(c, vW, 0.05);
    gl_FragColor = vec4(c, 1.0);
  }
`,vf=`
  attribute vec3 aCol;
  varying vec3 vN; varying vec3 vW; varying vec3 vC;
  void main(){
    mat4 m = modelMatrix*instanceMatrix;
    vec4 w = m*vec4(position, 1.0);
    vW = w.xyz; vN = normalize(mat3(m)*normal); vC = aCol;
    gl_Position = projectionMatrix*viewMatrix*w;
  }
`,xf=`
  ${Da}
  varying vec3 vN; varying vec3 vW; varying vec3 vC;
  void main(){
    vec3 n = normalize(vN);
    float l = 0.32 + 0.7*max(dot(n, normalize(vec3(0.3, 1.0, 0.35))), 0.0);
    vec3 c = vC*(0.82 + 0.3*noise(vW.xy*5.0 + vW.z*3.0));
    vec3 q = vW*30.0; vec3 qi = floor(q);
    float sp = hash(qi.xy + qi.z*17.13);
    float dotm = smoothstep(0.42, 0.22, length(fract(q) - 0.5));            // круглая крапина в 3D-ячейке
    c *= 1.0 + dotm*(smoothstep(0.8, 0.95, sp)*0.22 - smoothstep(0.12, 0.02, sp)*0.2);
    c *= mix(0.5, 1.0, smoothstep(0.0, 0.4, vW.y - (-${ht.toFixed(1)} + floorH(vW.xz))));  // тень у песка
    c = mix(c, vec3(0.24,0.36,0.20), smoothstep(0.55, 0.9, n.y)*0.45*noise(vW.xz*3.0));  // мох сверху
    c *= l;
    if (uCaus > 0.5) c += caustic(vW.xz*0.8, uTime)*0.3*max(n.y, 0.0)*vec3(0.85,1.0,0.95);
    c = underwater(c, vW, 0.05);
    gl_FragColor = vec4(c, 1.0);
  }
`,Sf=`
  attribute vec4 aS;   // x, y, z, size
  attribute vec4 aK;   // kind, tilt, hue, _
  varying vec2 vUv; varying vec3 vW; varying vec4 vK;
  void main(){
    float c = cos(aK.y), s = sin(aK.y);
    vec2 p = position.xy*aS.w;
    p = vec2(p.x*c - p.y*s, p.x*s + p.y*c);
    vec3 w = vec3(aS.x + p.x, aS.y + p.y + aS.w*0.42, aS.z);
    vW = w; vUv = uv; vK = aK;
    gl_Position = projectionMatrix*viewMatrix*vec4(w, 1.0);
  }
`,Mf=`
  varying vec2 vUv; varying vec3 vW; varying vec4 vK;
  vec2 rot(vec2 p, float a){ float c = cos(a), s = sin(a); return vec2(p.x*c - p.y*s, p.x*s + p.y*c); }
  void main(){
    vec3 c = vec3(0.0); float inside = 0.0;
    if (vK.x < 0.5){
      // гребешок: веер с рёбрами и «ушками» у замка
      vec2 p = vUv - vec2(0.5, 0.12);
      float a = atan(p.x, p.y);
      float r = length(p);
      float R = 0.8*(1.0 + 0.035*cos(a*15.0));
      float fan = step(abs(a), 1.05)*step(r, R*0.95);
      float ears = step(abs(p.x), 0.2)*step(p.y, 0.1)*step(-0.03, p.y);
      inside = max(fan, ears);
      vec3 base = mix(vec3(0.90,0.82,0.70), vec3(0.88,0.68,0.60), vK.z);
      c = base*(0.8 + 0.2*cos(a*15.0))*(0.75 + 0.35*smoothstep(0.0, 0.7, r));
      c *= 0.9 + 0.1*sin(r*60.0);
      c = mix(c, base*0.55, smoothstep(R*0.88, R*0.95, r)*fan);
    } else if (vK.x < 1.5){
      // перловица: вытянутая оливково-бурая створка с кольцами нарастания и перламутром
      vec2 p = rot(vUv - 0.5, 0.35);
      float e = length(p/vec2(0.47, 0.2));
      inside = step(e, 1.0);
      float rr = length((p - vec2(-0.27, 0.07))/vec2(1.0, 0.5));
      c = mix(vec3(0.27,0.25,0.14), vec3(0.42,0.37,0.20), vK.z);
      c *= 0.82 + 0.18*sin(rr*75.0);
      c = mix(c, c*0.55, smoothstep(0.78, 1.0, e));
      c += vec3(0.30,0.32,0.34)*smoothstep(0.32, 0.0, length(p - vec2(-0.05, 0.07)))*0.3;
    } else if (vK.x < 2.5){
      // прудовик: высокий завиток с оборотами и тёмным устьем
      vec2 p = vUv - vec2(0.5, 0.45);
      float body = step(length((p - vec2(0.0, -0.08))/vec2(0.25, 0.30)), 1.0);
      float sy = clamp(p.y/0.52, 0.0, 1.0);
      float spire = step(0.0, p.y)*step(p.y, 0.52)*step(abs(p.x + sy*0.05), 0.24*pow(1.0 - sy, 0.9));
      inside = max(body, spire);
      float sv = p.y + abs(p.x)*0.35;
      c = mix(vec3(0.52,0.40,0.24), vec3(0.66,0.54,0.34), vK.z);
      c *= 0.85 + 0.15*sin(sv*55.0);
      c = mix(c, c*0.5, smoothstep(0.1, 0.0, abs(fract(sv*6.0) - 0.5) - 0.38)*step(-0.05, p.y));
      float mouth = step(length((p - vec2(0.07, -0.17))/vec2(0.11, 0.15)), 1.0);
      c = mix(c, vec3(0.10,0.08,0.06), mouth*0.85);
      c += vec3(0.25)*smoothstep(0.12, 0.0, length(p - vec2(-0.08, 0.02)))*0.4;
    } else if (vK.x < 3.5){
      // катушка: плоская спираль
      vec2 p = vUv - 0.5;
      float r = length(p)/0.42;
      inside = step(r, 1.0);
      float ang = atan(p.y, p.x)/6.2831;
      float sp = fract(r*3.3 - ang);
      c = mix(vec3(0.44,0.27,0.17), vec3(0.58,0.40,0.26), vK.z);
      c *= 0.75 + 0.25*smoothstep(0.0, 0.25, sp)*smoothstep(1.0, 0.7, sp);
      c *= 0.8 + 0.25*smoothstep(1.0, 0.3, r);
    } else {
      // дрейссена: округлый треугольник с зигзагом
      vec2 p = vUv - vec2(0.5, 0.42);
      inside = step(-0.24, p.y)*step(p.y, 0.32)*step(abs(p.x), (0.34 - p.y)*0.72);
      float z = sin(p.y*42.0 + abs(sin(p.x*22.0))*3.0);
      c = mix(vec3(0.20,0.16,0.10), vec3(0.78,0.72,0.56), smoothstep(-0.2, 0.2, z));
      c *= 0.8 + 0.2*smoothstep(0.3, -0.2, p.y);
    }
    if (inside < 0.5) discard;
    float l = 0.62;
    if (uCaus > 0.5) l += caustic(vW.xz*0.75, uTime)*0.35;
    c = underwater(c*l, vW, 0.05);
    gl_FragColor = vec4(c, 1.0);
  }
`,yf=`
  attribute vec4 aW;   // x, yBase, z, height
  attribute vec4 aS;   // phase, freq, amp, width
  attribute vec4 aK;   // kind (0 лента, 1 травинка кустика, 2 перистая), tilt, hue, _
  varying vec2 vUv; varying vec3 vW; varying vec4 vK; varying float vTw;
  void main(){
    float v = position.y, px = position.x, t = uTime;
    float sway = sin(t*aS.y + aS.x - v*1.8)*aS.z + sin(t*aS.y*2.3 + aS.x*1.7 - v*3.6)*aS.z*0.35;
    float ang = aK.y + sway*v;
    vec2 spine = vec2(sin(ang), cos(ang))*v*aW.w;
    float tip = pow(max(1.0 - pow(v, 3.0), 0.0), 0.55);          // острый кончик
    float wdt;
    if (aK.x < 0.5) wdt = aS.w*(0.8 + 0.2*sin(v*9.0 + aS.x))*(1.0 - 0.2*v)*tip;
    else if (aK.x < 1.5) wdt = aS.w*pow(max(1.0 - v, 0.0), 0.8);
    else wdt = aS.w*pow(sin(3.1416*min(v*1.05 + 0.04, 1.0)), 0.6)*tip;
    float tw = aK.x < 0.5 ? (0.3 + 0.7*abs(cos(t*0.8 + aS.x + v*3.0))) : 1.0;
    vec2 side = vec2(cos(ang), -sin(ang))*px*wdt*tw;
    vec3 w = vec3(aW.x + spine.x + side.x, aW.y + spine.y + side.y, aW.z);
    vW = w; vUv = vec2(px + 0.5, v); vK = aK; vTw = tw;
    gl_Position = projectionMatrix*viewMatrix*vec4(w, 1.0);
  }
`,Ef=`
  varying vec2 vUv; varying vec3 vW; varying vec4 vK; varying float vTw;
  void main(){
    float e = abs(vUv.x - 0.5)*2.0;
    if (vK.x > 1.5){
      // перистые листочки, направленные вверх, вокруг стебля
      float stem = step(e, 0.1);
      float leaf = step(fract(vUv.y*18.0 - e*1.6), 0.5);
      if (stem < 0.5 && leaf < 0.5) discard;
    }
    float h = vK.z;
    vec3 lo = mix(mix(vec3(0.06,0.20,0.10), vec3(0.16,0.20,0.07), smoothstep(0.3, 0.5, h)), vec3(0.24,0.15,0.08), smoothstep(0.7, 0.9, h));
    vec3 hi = mix(mix(vec3(0.34,0.58,0.22), vec3(0.52,0.54,0.20), smoothstep(0.3, 0.5, h)), vec3(0.52,0.36,0.18), smoothstep(0.7, 0.9, h));
    vec3 c = mix(lo, hi, smoothstep(0.0, 1.0, vUv.y));
    c *= 0.78 + 0.22*(1.0 - e*e);                    // объём ленты
    c *= mix(0.65, 1.0, vTw);                        // разворот ленты ребром — темнее
    c = mix(c, c*0.6, smoothstep(0.08, 0.0, abs(vUv.x - 0.5))*step(vK.x, 0.5)*0.6);  // жилка
    c = mix(c, c*1.35, smoothstep(0.75, 1.0, e)*0.5);                                // светлая кромка
    c *= 0.9 + 0.1*noise(vec2(vUv.y*30.0, vK.w*10.0 + vUv.x*4.0));                  // неоднородность
    if (uCaus > 0.5) c += caustic(vW.xy*0.9 + vW.z, uTime)*0.15*vUv.y;
    c = underwater(c, vW, 0.05);
    gl_FragColor = vec4(c, 1.0);
  }
`,Tf=`
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  void main(){
    mat4 m = modelMatrix*instanceMatrix;
    vec4 w = m*vec4(position, 1.0);
    vW = w.xyz; vN = normalize(mat3(m)*normal); vUv = uv;
    gl_Position = projectionMatrix*viewMatrix*w;
  }
`,Af=`
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  void main(){
    vec3 n = normalize(vN);
    float l = 0.3 + 0.7*max(dot(n, normalize(vec3(0.3, 1.0, 0.35))), 0.0);
    float groove = sin(vUv.x*70.0 + noise(vec2(vUv.y*6.0, vUv.x*8.0))*4.0);
    vec3 c = mix(vec3(0.16,0.11,0.07), vec3(0.34,0.25,0.16), 0.5 + 0.5*groove);
    c *= 0.85 + 0.3*noise(vUv*vec2(20.0, 4.0));
    c = mix(c, vec3(0.20,0.30,0.14), smoothstep(0.5, 0.9, n.y)*0.55*noise(vW.xz*4.0));
    c *= l;
    if (uCaus > 0.5) c += caustic(vW.xz*0.8, uTime)*0.25*max(n.y, 0.0)*vec3(0.85,1.0,0.95);
    c = underwater(c, vW, 0.05);
    gl_FragColor = vec4(c, 1.0);
  }
`,bf=`
  varying vec2 vUv;
  uniform float uHalfMid;
  void main(){
    vec2 ndc = vUv*2.0 - 1.0;
    float wy = uCamY + ndc.y*uHalfMid;
    if (wy > -0.4) discard;
    float wx = ndc.x*uHalfMid*uAspect;
    float d = -wy;
    float a = wx + wy*0.32;
    float r = pow(noise(vec2(a*0.5 + uTime*0.035, 0.5)), 3.0)*1.3 + pow(noise(vec2(a*1.25 - uTime*0.05, 3.7)), 4.0)*0.9;
    float k = r*0.09*exp(-d*0.055)*smoothstep(0.4, 2.5, d);
    gl_FragColor = vec4(vec3(0.78,0.96,0.93)*k, 1.0);
  }
`,wf=`
  varying vec3 vW; varying vec2 vUv;
  void main(){
    vec2 xz = vW.xz;
    float t = uTime;
    float n1 = noise(xz*0.7 + vec2(t*0.25, -t*0.18));
    float n2 = noise(xz*1.9 - vec2(t*0.35, t*0.22));
    vec3 c = mix(vec3(0.62,0.90,0.92), vec3(0.88,0.98,0.98), n1*0.6 + n2*0.4);
    c += caustic(xz*0.45, t*1.2)*0.35*vec3(0.95,1.0,1.0);         // бегущие блики волн сверху
    c += pow(n2, 6.0)*0.6;                                         // искры солнца сквозь поверхность
    // дымка того же цвета, что фон по этому лучу (фон — плоскость на 26 ед.), и растворение вдаль:
    // без шва между плоскостью и фоном
    vec3 rd = vW - cameraPosition;
    float dist = length(rd);
    float yFar = cameraPosition.y + rd.y*(26.0/max(-rd.z, 0.05));
    float f = 1.0 - exp(-max(dist - 4.0, 0.0)*0.06);
    c = mix(c, waterCol(yFar), f);
    gl_FragColor = vec4(c, 1.0 - smoothstep(22.0, 48.0, dist));
  }
`;function Rf(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let o=0;const a=Object.keys(n.attributes),l={},c={},u=[],d=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let E=0,S=a.length;E<S;E++){const T=a[E],U=n.attributes[T];l[T]=new U.constructor(new U.array.constructor(U.count*U.itemSize),U.itemSize,U.normalized);const R=n.morphAttributes[T];R&&(c[T]||(c[T]=[]),R.forEach((w,L)=>{const q=new w.array.constructor(w.count*w.itemSize);c[T][L]=new w.constructor(q,w.itemSize,w.normalized)}))}const m=e*.5,v=Math.log10(1/e),y=Math.pow(10,v),h=m*y;for(let E=0;E<s;E++){const S=i?i.getX(E):E;let T="";for(let U=0,R=a.length;U<R;U++){const w=a[U],L=n.getAttribute(w),q=L.itemSize;for(let _=0;_<q;_++)T+=`${~~(L[d[_]](S)*y+h)},`}if(T in t)u.push(t[T]);else{for(let U=0,R=a.length;U<R;U++){const w=a[U],L=n.getAttribute(w),q=n.morphAttributes[w],_=L.itemSize,M=l[w],H=c[w];for(let G=0;G<_;G++){const k=d[G],Q=p[G];if(M[Q](o,L[k](S)),q)for(let V=0,re=q.length;V<re;V++)H[V][Q](o,q[V][k](S))}}t[T]=o,u.push(o),o++}}const f=n.clone();for(const E in n.attributes){const S=l[E];if(f.setAttribute(E,new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)),E in c)for(let T=0;T<c[E].length;T++){const U=c[E][T];f.morphAttributes[E][T]=new U.constructor(U.array.slice(0,o*U.itemSize),U.itemSize,U.normalized)}}return f.setIndex(u),f}const Ua=1024,Vr=320;function Cf(n){const e=document.createElement("canvas");e.width=Ua,e.height=Vr*3;const t=e.getContext("2d");return Pf(t,0,n),Lf(t,Vr,n),Df(t,Vr*2,n),e}function Ct(n,e,t,i,r=9,s="rgba(30,36,20,0.35)"){n.save(),n.beginPath(),e(),n.closePath(),n.fillStyle=t,n.fill(),n.clip(),n.strokeStyle=s,n.lineWidth=1.6;for(let o=0;o<=r;o++){const a=o/r*Math.PI*2;n.beginPath(),n.moveTo(i[0],i[1]),n.lineTo(i[0]+Math.cos(a)*400,i[1]+Math.sin(a)*400),n.stroke()}n.restore()}function Qr(n,e,t,i,r){n.fillStyle=r,n.beginPath(),n.arc(e,t,i,0,7),n.fill(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=1.5,n.stroke(),n.fillStyle="#0b0d0a",n.beginPath(),n.arc(e+i*.08,t,i*.58,0,7),n.fill(),n.fillStyle="rgba(255,255,255,0.95)",n.beginPath(),n.arc(e-i*.25,t-i*.28,i*.24,0,7),n.fill(),n.fillStyle="rgba(255,255,255,0.5)",n.beginPath(),n.arc(e+i*.3,t+i*.25,i*.12,0,7),n.fill()}function es(n,e,t,i,r,s,o,a){n.save(),n.beginPath(),e(),n.closePath(),n.clip();const l=n.createLinearGradient(0,t,0,i);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.28,"rgba(255,255,255,0.22)"),l.addColorStop(.42,"rgba(255,255,255,0)"),l.addColorStop(.85,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.22)"),n.fillStyle=l,n.fillRect(0,t-10,Ua,i-t+20);for(let c=0;c<1400;c++)n.fillStyle=a()<.5?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.07)",n.fillRect(r+a()*(s-r),t+a()*(i-t),2,2);n.lineWidth=1.2;for(let c=t+4,u=0;c<i;c+=9,u++)for(let d=r+10+u%2*6;d<s-150;d+=12)n.strokeStyle=u%3?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)",n.beginPath(),n.arc(d,c,7,Math.PI*.6,Math.PI*1.4),n.stroke();n.strokeStyle="rgba(255,255,255,0.28)",n.lineWidth=2,n.beginPath(),n.moveTo(r,o+4),n.quadraticCurveTo((r+s)/2,o-14,s-150,o-8),n.stroke(),n.restore(),n.beginPath(),e(),n.closePath(),n.strokeStyle="rgba(16,24,10,0.4)",n.lineWidth=2,n.stroke()}function Pf(n,e,t){n.save(),n.translate(0,e);const i="rgba(122,98,52,0.88)";Ct(n,()=>{n.moveTo(332,126),n.quadraticCurveTo(300,66,252,70),n.quadraticCurveTo(226,92,212,136)},i,[300,140]),Ct(n,()=>{n.moveTo(310,194),n.quadraticCurveTo(290,246,240,246),n.quadraticCurveTo(214,226,204,184)},i,[290,184]),Ct(n,()=>{n.moveTo(172,146),n.quadraticCurveTo(110,118,36,88),n.quadraticCurveTo(70,146,86,164),n.quadraticCurveTo(70,182,36,238),n.quadraticCurveTo(110,208,172,184)},"rgba(96,104,52,0.92)",[176,165],14),Ct(n,()=>{n.moveTo(530,206),n.quadraticCurveTo(510,246,470,244),n.quadraticCurveTo(472,220,488,206)},i,[520,200]);const r=()=>{n.moveTo(940,170),n.bezierCurveTo(902,156,862,146,800,134),n.bezierCurveTo(700,116,560,110,420,116),n.bezierCurveTo(320,122,232,136,170,146),n.lineTo(170,184),n.bezierCurveTo(240,192,330,206,450,212),n.bezierCurveTo(600,216,722,208,800,194),n.bezierCurveTo(862,184,906,180,940,174)},s=n.createLinearGradient(0,112,0,216);s.addColorStop(0,"#2b4423"),s.addColorStop(.35,"#4e6b33"),s.addColorStop(.6,"#7f9550"),s.addColorStop(.8,"#cbcd9a"),s.addColorStop(1,"#eeedd4"),n.beginPath(),r(),n.closePath(),n.fillStyle=s,n.fill(),n.save(),n.beginPath(),r(),n.closePath(),n.clip();for(let o=0;o<80;o++){const a=200+t()*560,l=124+t()*72;n.fillStyle=`rgba(226,232,176,${.45+t()*.35})`,n.beginPath(),n.ellipse(a,l,8+t()*8,3.5+t()*3,(t()-.5)*.6,0,7),n.fill()}n.restore(),es(n,r,112,216,170,940,160,t),n.strokeStyle="rgba(18,28,10,0.45)",n.lineWidth=3,n.beginPath(),n.moveTo(764,128),n.quadraticCurveTo(732,170,768,204),n.stroke(),n.lineWidth=2.5,n.beginPath(),n.moveTo(938,172),n.quadraticCurveTo(880,181,834,178),n.stroke(),Ct(n,()=>{n.moveTo(772,190),n.quadraticCurveTo(730,222,700,214),n.quadraticCurveTo(716,194,744,186)},"rgba(150,120,64,0.75)",[770,188],6),Qr(n,842,150,11,"#d7b84a"),n.restore()}function Lf(n,e,t){n.save(),n.translate(0,e),n.save(),n.beginPath(),n.moveTo(706,104);const i=12;for(let c=0;c<=i;c++){const u=700-c*18,d=66-c*2.6;n.lineTo(u-3,96-d),n.lineTo(u-13,96-d*.62)}n.lineTo(478,104),n.closePath();const r=n.createLinearGradient(0,30,0,104);r.addColorStop(0,"rgba(92,98,70,0.8)"),r.addColorStop(1,"rgba(60,74,40,0.95)"),n.fillStyle=r,n.fill(),n.clip(),n.fillStyle="#121810",n.beginPath(),n.ellipse(516,66,18,26,.2,0,7),n.fill(),n.strokeStyle="rgba(20,24,14,0.7)",n.lineWidth=2.2;for(let c=0;c<=i;c++){const u=700-c*18,d=66-c*2.6;n.beginPath(),n.moveTo(u,104),n.lineTo(u-3,96-d),n.stroke()}n.restore(),Ct(n,()=>{n.moveTo(474,100),n.quadraticCurveTo(440,40,388,50),n.quadraticCurveTo(358,70,350,114)},"rgba(96,112,58,0.88)",[430,120],10);const s=n.createLinearGradient(0,84,0,258);s.addColorStop(0,"rgba(92,106,52,0.92)"),s.addColorStop(.5,"rgba(150,110,52,0.92)"),s.addColorStop(1,"rgba(214,86,40,0.95)"),Ct(n,()=>{n.moveTo(244,150),n.quadraticCurveTo(190,118,106,82),n.quadraticCurveTo(140,150,150,172),n.quadraticCurveTo(140,196,106,262),n.quadraticCurveTo(190,226,244,196)},s,[248,173],14),Ct(n,()=>{n.moveTo(384,230),n.quadraticCurveTo(362,290,318,284),n.quadraticCurveTo(312,256,330,220)},"rgba(226,86,42,0.95)",[380,226],8),Ct(n,()=>{n.moveTo(646,246),n.quadraticCurveTo(624,302,578,298),n.quadraticCurveTo(584,266,600,244)},"rgba(234,96,46,0.95)",[640,242],8);const o=()=>{n.moveTo(884,196),n.bezierCurveTo(866,168,824,138,764,110),n.bezierCurveTo(722,92,642,84,560,88),n.bezierCurveTo(460,94,330,120,242,150),n.lineTo(242,196),n.bezierCurveTo(330,224,460,252,580,254),n.bezierCurveTo(700,256,800,238,852,218),n.bezierCurveTo(872,210,884,204,884,196)},a=n.createLinearGradient(0,84,0,256);a.addColorStop(0,"#243e1a"),a.addColorStop(.3,"#557a2b"),a.addColorStop(.55,"#9dac44"),a.addColorStop(.76,"#d4ce78"),a.addColorStop(1,"#f3edd2"),n.beginPath(),o(),n.closePath(),n.fillStyle=a,n.fill(),n.save(),n.beginPath(),o(),n.closePath(),n.clip(),[[712,34],[636,34],[558,32],[478,30],[398,26],[318,22]].forEach(([c,u],d)=>{n.fillStyle="rgba(20,34,12,0.58)",n.beginPath(),n.moveTo(c-u/2,70),n.lineTo(c+u/2,70),n.quadraticCurveTo(c+u*.25,170,c+2,220-d*4),n.quadraticCurveTo(c-u*.3,170,c-u/2,70),n.fill(),d%2===1&&(n.beginPath(),n.moveTo(c-6,150),n.quadraticCurveTo(c-26,180,c-30,206),n.lineTo(c-22,206),n.quadraticCurveTo(c-16,182,c,156),n.fill())}),n.restore(),es(n,o,84,256,242,884,168,t),n.strokeStyle="rgba(16,26,10,0.55)",n.lineWidth=3,n.beginPath(),n.moveTo(772,116),n.quadraticCurveTo(740,180,770,236),n.stroke(),n.lineWidth=2.5,n.beginPath(),n.moveTo(882,198),n.quadraticCurveTo(856,208,828,202),n.stroke(),Ct(n,()=>{n.moveTo(740,196),n.quadraticCurveTo(690,232,664,222),n.quadraticCurveTo(680,198,716,186)},"rgba(206,150,70,0.7)",[740,192],6),Qr(n,814,152,15,"#e3a234"),n.restore()}function Df(n,e,t){n.save(),n.translate(0,e);const i="rgba(92,102,84,0.36)";n.save(),n.beginPath(),n.moveTo(736,120);for(let a=0;a<=12;a++){const l=730-a*16,c=46-a*1.6;n.lineTo(l-3,114-c),n.lineTo(l-11,114-c*.72)}n.lineTo(530,118),n.closePath(),n.fillStyle=i,n.fill(),n.clip();for(let a=0;a<=12;a++){const l=730-a*16,c=46-a*1.6;for(let u=1;u<=3;u++)n.fillStyle="rgba(34,38,28,0.45)",n.beginPath(),n.arc(l-2-u*.6,114-c*(u/4),2.2,0,7),n.fill()}n.strokeStyle="rgba(40,44,34,0.6)",n.lineWidth=2;for(let a=0;a<=12;a++){const l=730-a*16,c=46-a*1.6;n.beginPath(),n.moveTo(l,120),n.lineTo(l-3,114-c),n.stroke()}n.restore();const r=(a,l,c)=>{Ct(n,a,i,l,c,"rgba(60,64,50,0.4)"),n.save(),n.beginPath(),a(),n.closePath(),n.clip();for(let u=0;u<10;u++)n.fillStyle="rgba(40,44,34,0.5)",n.beginPath(),n.ellipse(l[0]-160+t()*320,l[1]-110+t()*220,8,5.5,t(),0,7),n.fill();n.restore()};r(()=>{n.moveTo(520,112),n.quadraticCurveTo(470,54,404,62),n.quadraticCurveTo(376,84,366,124)},[460,130],10),r(()=>{n.moveTo(194,150),n.quadraticCurveTo(130,120,56,94),n.quadraticCurveTo(90,150,102,168),n.quadraticCurveTo(90,186,56,244),n.quadraticCurveTo(130,214,194,188)},[198,169],14),Ct(n,()=>{n.moveTo(384,206),n.quadraticCurveTo(352,254,312,246),n.quadraticCurveTo(312,222,330,202)},"rgba(214,214,198,0.85)",[380,200],8),Ct(n,()=>{n.moveTo(644,212),n.quadraticCurveTo(622,256,588,250),n.quadraticCurveTo(592,226,604,210)},"rgba(220,220,204,0.85)",[640,208],8);const s=()=>{n.moveTo(946,176),n.bezierCurveTo(922,160,882,146,822,132),n.bezierCurveTo(742,114,622,106,522,108),n.bezierCurveTo(402,112,292,132,192,150),n.lineTo(192,188),n.bezierCurveTo(292,202,402,216,542,218),n.bezierCurveTo(682,220,792,210,862,198),n.bezierCurveTo(902,192,932,186,946,180)},o=n.createLinearGradient(0,106,0,220);o.addColorStop(0,"#53604c"),o.addColorStop(.3,"#86927c"),o.addColorStop(.55,"#bcc3b2"),o.addColorStop(.8,"#e2e6da"),o.addColorStop(1,"#f5f6f0"),n.beginPath(),s(),n.closePath(),n.fillStyle=o,n.fill(),n.save(),n.beginPath(),s(),n.closePath(),n.clip();for(let a=0;a<9;a++){const l=770-a*62,c=140,u=n.createRadialGradient(l,c,2,l,c,46);u.addColorStop(0,"rgba(44,54,40,0.42)"),u.addColorStop(1,"rgba(44,54,40,0)"),n.fillStyle=u,n.save(),n.translate(l,c),n.scale(.55,1.15),n.translate(-l,-c),n.fillRect(l-50,c-50,100,100),n.restore()}for(let a=0;a<26;a++)n.fillStyle="rgba(40,46,36,0.3)",n.beginPath(),n.ellipse(230+t()*600,116+t()*40,5+t()*4,3.5,t(),0,7),n.fill();n.restore(),es(n,s,106,220,192,946,162,t),n.strokeStyle="rgba(30,36,26,0.45)",n.lineWidth=3,n.beginPath(),n.moveTo(806,128),n.quadraticCurveTo(778,170,800,206),n.stroke(),n.lineWidth=2.5,n.beginPath(),n.moveTo(944,178),n.quadraticCurveTo(900,191,852,188),n.stroke(),Ct(n,()=>{n.moveTo(790,196),n.quadraticCurveTo(744,226,716,218),n.quadraticCurveTo(734,196,764,188)},"rgba(210,212,196,0.75)",[790,192],6),Qr(n,856,152,17,"#d6ded6"),n.restore()}const Uf=[2.5,1.45,2.1],Xn=18;function Zi(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const An=(n,e,t)=>Math.min(Math.max(n,e),t),Be=(n,e,t)=>n+(e-n)*t,kr=(n,e,t)=>{const i=An((t-n)/(e-n),0,1);return i*i*(3-2*i)};function If({host:n,snap:e}){const t=document.documentElement,i=Zi(20261004),r=matchMedia("(pointer: coarse)").matches,s=Math.min(innerWidth,innerHeight)<768,a=(navigator.hardwareConcurrency||8)<=2||(navigator.deviceMemory||8)<=2?"weak":r||s?"phone":"desktop",l={desktop:{fish:15,dpr:2,dust:360,bubbles:110,ribbons:46,bushes:24,feathers:12,stones:26,pebbles:70,shells:26,logs:3},phone:{fish:7,dpr:1.5,dust:160,bubbles:60,ribbons:28,bushes:13,feathers:7,stones:16,pebbles:36,shells:15,logs:2},weak:{fish:3,dpr:1,dust:80,bubbles:30,ribbons:14,bushes:6,feathers:3,stones:8,pebbles:16,shells:7,logs:1}}[a],c=new ef({antialias:a==="desktop",alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e});c.setClearColor(806492,1);let u=1,d=l.fish;const p=()=>e?1:Math.min(window.devicePixelRatio||1,l.dpr)*u;c.setPixelRatio(p()),c.setSize(innerWidth,innerHeight);const m=c.domElement;m.setAttribute("aria-hidden","true"),m.style.opacity=e?"1":"0",m.style.transition="opacity 700ms ease",n.appendChild(m);const v=new tf,y=new Ot(Pa,innerWidth/innerHeight,.1,140);y.position.set(0,0,Yr);const h={uTime:{value:e?8:0},uCamY:{value:0},uCaus:{value:1},uAspect:{value:innerWidth/innerHeight}},f=A=>new an({...A,uniforms:{...h,...A.uniforms||{}},vertexShader:la+A.vertexShader,fragmentShader:la+A.fragmentShader}),E=A=>(Yr-A)*La,S=A=>E(A)*h.uAspect.value,T=new mt(new It(1,1),f({depthTest:!1,depthWrite:!1,uniforms:{uHalfFar:{value:E(-16)}},vertexShader:ca,fragmentShader:lf}));T.frustumCulled=!1,T.renderOrder=0,v.add(T);const U=new It(140,80);U.rotateX(Math.PI/2);const R=new mt(U,f({transparent:!0,depthWrite:!1,vertexShader:ua,fragmentShader:wf}));R.position.set(0,-.05,-30),R.renderOrder=1,R.frustumCulled=!1,v.add(R);const w=Array.from({length:4},()=>new ft(0,-99,0,0)),L=[{z:-9,y:.55,amp:[.3,.16,.07],freq:[.3,.74,1.6],spd:[.22,.36,.6],tint:[.36,.72,.86],alpha:.62,fill:1.9,order:5},{z:-4.5,y:.25,amp:[.36,.18,.08],freq:[.36,.86,1.8],spd:[.3,.44,.7],tint:[.22,.62,.82],alpha:.74,fill:1.7,order:6},{z:0,y:-.05,amp:[.42,.2,.09],freq:[.42,.95,2.1],spd:[.38,.52,.8],tint:[.13,.53,.76],alpha:.84,fill:1.6,order:20},{z:3,y:-.45,amp:[.46,.22,.1],freq:[.5,1.1,2.4],spd:[.48,.6,.9],tint:[.09,.45,.7],alpha:.9,fill:1.4,order:21}],q=L.map((A,Y)=>{const B=new mt(new It(1,1),f({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uY:{value:A.y},uSeed:{value:Y*2.31+.7},uAlpha:{value:A.alpha},uFill:{value:A.fill},uHalfW:{value:1},uAmp:{value:new F(...A.amp)},uFreq:{value:new F(...A.freq)},uSpd:{value:new F(...A.spd)},uTint:{value:new F(...A.tint)},uRip:{value:w}},vertexShader:ua,fragmentShader:cf}));return B.position.z=A.z,B.renderOrder=A.order,B.frustumCulled=!1,v.add(B),B});function _(){q.forEach((A,Y)=>{const B=L[Y],ae=S(B.z);A.scale.set(ae*2.3,.8+B.fill+2.4,1),A.position.y=B.y+.8-A.scale.y/2,A.material.uniforms.uHalfW.value=ae})}const M=l.bubbles,H=Math.round(l.bubbles/6),G=M+H,k=new Hr().copy(new It(1,1)),Q=new Float32Array(G*4),V=new Float32Array(G*4);function re(){const A=Zi(77),Y=[-.72,-.31,.12,.46,.83];for(let B=0;B<G;B++){const ae=B>=M,Re=ae?Be(-8,2,A()):Be(-5,2.6,A()),le=A()<.16,ie=!ae&&A()<.55,Je=le?Be(.14,.3,A()):Be(.035,.12,A()),Ne=!ae&&!ie&&A()<.6,K=Ne?Y[Math.floor(A()*Y.length)]*S(Re):(A()*2-1)*S(Re)*1.05;if(Q.set([K+(Ne?(A()-.5)*.25:0),Re,Je,ae?.2+Je*1.8:ie?Be(.05,.12,A()):.3+Je*4],B*4),ie){V.set([A(),-2.4+A()*.5,Be(.8,1.1,A()),0],B*4);continue}if(ae){const we=Q[B*4];V.set([A(),-ht+Zt(we,Re)+.1,Be(3.5,7,A()),1],B*4)}else V.set([A(),-6.6+A()*1,Be(5,5.9,A()),0],B*4)}k.attributes.aB.needsUpdate=!0,k.attributes.aC.needsUpdate=!0}k.setAttribute("aB",new Ut(Q,4)),k.setAttribute("aC",new Ut(V,4)),k.instanceCount=G;const X=new mt(k,f({transparent:!0,depthWrite:!1,uniforms:{uSurfVis:{value:1},uBotVis:{value:1}},vertexShader:uf,fragmentShader:hf}));X.frustumCulled=!1,X.renderOrder=12,v.add(X);const me=new zt,_e=l.dust,Ee=new Float32Array(_e*4);for(let A=0;A<_e;A++)Ee.set([i(),i(),Be(-7,4,i()),i()],A*4);me.setAttribute("position",new Ft(new Float32Array(_e*3),3)),me.setAttribute("aP",new Ft(Ee,4));const $e=new af(me,f({transparent:!0,depthWrite:!1,uniforms:{uPR:{value:p()}},vertexShader:ff,fragmentShader:df}));$e.frustumCulled=!1,$e.renderOrder=10,v.add($e);const Qe=new of(Cf(Zi(5)));Qe.anisotropy=4;const $=new It(1,1,24,1),te=new Ut(new Float32Array(Xn*4),4),Se=new Ut(new Float32Array(Xn),1);te.setUsage(35048),Se.setUsage(35048),$.setAttribute("aFish",te),$.setAttribute("aFace",Se);const he=new Yi($,f({transparent:!0,depthWrite:!1,side:2,uniforms:{uAtlas:{value:Qe}},vertexShader:pf,fragmentShader:mf}),Xn);he.instanceMatrix.setUsage(35048),he.frustumCulled=!1,he.renderOrder=11,v.add(he);const be=[0,1,2,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0].map((A,Y)=>({sp:A,x:0,y:-8,z:Be(-4,1.5,i()),vx:(i()<.5?-1:1)*.5,vy:0,vz:0,face:1,phase:i()*6.28,L:Uf[A]*Be(.74,1.24,i())*(innerHeight>innerWidth?.5:1),alpha:0,zHome:Be(-4.5,1.2,i()),wander:i()*6.28,boost:0,seed:Y,pitch:0,hidden:!1}));let qe=new Set(Array.isArray(window.__fishFocus)?window.__fishFocus:[]);window.addEventListener("fishfocus",A=>{qe=new Set(A.detail||[])});const et=new It(110,54,a==="desktop"?140:90,a==="desktop"?70:45);et.rotateX(-Math.PI/2);const He=new mt(et,f({vertexShader:_f,fragmentShader:gf}));He.position.set(0,-ht,-20),He.renderOrder=1,He.frustumCulled=!1,v.add(He);let C=new ir(1,4);C.deleteAttribute("normal"),C.deleteAttribute("uv"),C=Rf(C);{const A=C.attributes.position;for(let Y=0;Y<A.count;Y++){const B=new F().fromBufferAttribute(A,Y),ae=1+.12*Math.sin(B.x*3.1+B.y*2.3)+.08*Math.sin(B.z*4.7-B.x*1.9)+.03*Math.sin(B.x*9+B.z*7);B.multiplyScalar(ae),B.y*=.62,A.setXYZ(Y,B.x,B.y,B.z)}C.computeVertexNormals()}const xt=new Ut(new Float32Array(l.stones*3),3);C.setAttribute("aCol",xt);const Ye=f({vertexShader:vf,fragmentShader:xf}),We=new Yi(C,Ye,l.stones);We.renderOrder=2,We.frustumCulled=!1,v.add(We);const Le=new ir(1,1);{const A=Le.attributes.position;for(let Y=0;Y<A.count;Y++){const B=new F().fromBufferAttribute(A,Y);B.multiplyScalar(1+.1*Math.sin(B.x*4+B.z*3)),B.y*=.55,A.setXYZ(Y,B.x,B.y,B.z)}Le.computeVertexNormals()}const rt=new Ut(new Float32Array(l.pebbles*3),3);Le.setAttribute("aCol",rt);const Ce=new Yi(Le,Ye,l.pebbles);Ce.renderOrder=2,Ce.frustumCulled=!1,v.add(Ce);const b=new jr(.07,.17,1,10,14,!1);{const A=b.attributes.position;for(let Y=0;Y<A.count;Y++){const B=new F().fromBufferAttribute(A,Y);B.x+=.12*Math.sin(B.y*3.2)+.03*Math.sin(B.y*11),B.z+=.05*Math.cos(B.y*4.1),A.setXYZ(Y,B.x,B.y,B.z)}b.computeVertexNormals()}const g=new Yi(b,f({vertexShader:Tf,fragmentShader:Af}),l.logs*2);g.renderOrder=2,g.frustumCulled=!1,v.add(g);const N=new Hr().copy(new It(1,1)),j=new Float32Array(l.shells*4),ee=new Float32Array(l.shells*4);N.setAttribute("aS",new Ut(j,4)),N.setAttribute("aK",new Ut(ee,4)),N.instanceCount=l.shells;const Z=new mt(N,f({vertexShader:Sf,fragmentShader:Mf}));Z.renderOrder=3,Z.frustumCulled=!1,v.add(Z);const Te=a==="desktop"?7:6,oe=l.ribbons+l.bushes*Te+l.feathers,fe=new Hr().copy(new It(1,1,1,22).translate(0,.5,0)),Ke=new Float32Array(oe*4),ne=new Float32Array(oe*4),ve=new Float32Array(oe*4);fe.setAttribute("aW",new Ut(Ke,4)),fe.setAttribute("aS",new Ut(ne,4)),fe.setAttribute("aK",new Ut(ve,4)),fe.instanceCount=oe;const De=new mt(fe,f({side:2,vertexShader:yf,fragmentShader:Ef}));De.renderOrder=4,De.frustumCulled=!1,v.add(De);const Fe=[[.46,.47,.48],[.56,.44,.39],[.62,.56,.45],[.25,.26,.28],[.5,.44,.36],[.4,.42,.37],[.58,.52,.48]];function Me(){const A=Zi(311),Y=we=>S(we)*1.08,B=new lt,ae=new Rn,Re=new Yt,le=(we,Pe,Ge)=>{const Ae=Fe[Math.floor(A()*Fe.length)];we.setXYZ(Pe,Ae[0]*Ge*Be(.9,1.08,A()),Ae[1]*Ge*Be(.92,1.06,A()),Ae[2]*Ge*Be(.92,1.08,A()))},ie=[],Je=(we,Pe,Ge=1)=>{for(let at=0;at<12;at++){const yt=Be(we,Pe,A()),ot=(A()*2-1)*Y(yt)*Ge;if(!ie.some($t=>Math.hypot(ot-$t[0],(yt-$t[1])*1.2)<$t[2]))return[ot,yt]}const Ae=Be(we,Pe,A());return[(A()*2-1)*Y(Ae)*Ge,Ae]};for(let we=0;we<l.stones;we++){const Pe=Be(-15,3,A()),Ge=(A()*2-1)*Y(Pe),Ae=A(),at=Be(.3,1,A())*(Pe<-6?1.6:1)*(Ae<.2?1.5:1),yt=Ae<.2?.9:Ae<.5?.42:.7;Re.set(A()*.4,A()*6.28,A()*.3),ae.setFromEuler(Re),B.compose(new F(Ge,-ht+Zt(Ge,Pe)+at*yt*.22,Pe),ae,new F(at*Be(.9,1.6,A()),at*yt,at*Be(.8,1.3,A()))),We.setMatrixAt(we,B),ie.push([Ge,Pe,at*1.35]),le(xt,we,1)}We.instanceMatrix.needsUpdate=!0,xt.needsUpdate=!0;for(let we=0;we<l.pebbles;we++){const Pe=Be(-8,3.6,A()),Ge=(A()*2-1)*Y(Pe),Ae=Be(.05,.17,A());Re.set(0,A()*6.28,0),ae.setFromEuler(Re),B.compose(new F(Ge,-ht+Zt(Ge,Pe)+Ae*.2,Pe),ae,new F(Ae*Be(1,1.6,A()),Ae,Ae)),Ce.setMatrixAt(we,B),le(rt,we,1.1)}Ce.instanceMatrix.needsUpdate=!0,rt.needsUpdate=!0;for(let we=0;we<l.logs;we++){const Pe=Be(-9,.5,A()),Ge=(A()*2-1)*Y(Pe)*.8,Ae=Be(2.4,4.2,A()),at=Be(-.5,.5,A());Re.set(0,at,Math.PI/2+Be(-.12,.12,A())),ae.setFromEuler(Re),B.compose(new F(Ge,-ht+Zt(Ge,Pe)+.1,Pe),ae,new F(1.4,Ae,1.4)),g.setMatrixAt(we*2,B),Re.set(0,at+Be(-.6,.6,A()),Math.PI/2-Be(.6,1,A())*(A()<.5?-1:1)),ae.setFromEuler(Re),B.compose(new F(Ge+Be(-.6,.6,A()),-ht+Zt(Ge,Pe)+.35,Pe+.05),ae,new F(.6,Ae*.35,.6)),g.setMatrixAt(we*2+1,B)}g.instanceMatrix.needsUpdate=!0;const Ne=[1,1,1,2,2,4,4,3,0];for(let we=0;we<l.shells;we++){const[Pe,Ge]=Je(-4,3.6,.92),Ae=Ne[Math.floor(A()*Ne.length)];j.set([Pe,-ht+Zt(Pe,Ge)-.05,Ge,Be(.3,.55,A())*(Ae===3?.75:1)],we*4),ee.set([Ae,(A()-.5)*.8,A(),0],we*4)}N.attributes.aS.needsUpdate=!0,N.attributes.aK.needsUpdate=!0;let K=0;for(let we=0;we<l.ribbons;we++,K++){const[Pe,Ge]=Je(-15,3.4),Ae=Ge<-6?Be(2.4,4.8,A()):Be(1.2,3.2,A());Ke.set([Pe,-ht+Zt(Pe,Ge)-.05,Ge,Ae],K*4),ne.set([A()*6.28,Be(.5,1.2,A()),Be(.16,.4,A()),Be(.18,.34,A())],K*4),ve.set([0,(A()-.5)*.3,A()<.65?A()*.3:A(),A()],K*4)}for(let we=0;we<l.bushes;we++){const[Pe,Ge]=Je(-9,3.6),Ae=-ht+Zt(Pe,Ge)-.03,at=A()<.7?A()*.4:A();for(let yt=0;yt<Te;yt++,K++){const ot=yt/(Te-1)-.5;Ke.set([Pe+ot*.16,Ae,Ge+(A()-.5)*.1,Be(.55,1.5,A())],K*4),ne.set([A()*6.28,Be(.8,1.6,A()),Be(.12,.3,A()),Be(.07,.12,A())],K*4),ve.set([1,ot*1.1+(A()-.5)*.2,at,A()],K*4)}}for(let we=0;we<l.feathers;we++,K++){const[Pe,Ge]=Je(-10,3);Ke.set([Pe,-ht+Zt(Pe,Ge)-.05,Ge,Be(1,2.4,A())],K*4),ne.set([A()*6.28,Be(.6,1.1,A()),Be(.1,.25,A()),Be(.4,.65,A())],K*4),ve.set([2,(A()-.5)*.25,A()*.45,A()],K*4)}["aW","aS","aK"].forEach(we=>{fe.attributes[we].needsUpdate=!0})}const Xe=new mt(new It(1,1),f({transparent:!0,depthTest:!1,depthWrite:!1,blending:2,uniforms:{uHalfMid:{value:E(-3)}},vertexShader:ca,fragmentShader:bf}));Xe.frustumCulled=!1,Xe.renderOrder=15,v.add(Xe);const Oe=Array.from({length:Xn},()=>new ft);He.material.uniforms.uSh={value:Oe},He.material.uniforms.uShN={value:0};const tt=E(0);let P=null;function pe(){const A=K=>document.querySelector(`[data-section="${K}"]`),Y=K=>K.getBoundingClientRect().top+scrollY,B=A("поверхность"),ae=A("каталог"),Re=A("контакты"),le=innerHeight,ie=Math.max(document.documentElement.scrollHeight-le,1),Ne=innerHeight>innerWidth?.66:.62;P={vh:le,maxS:ie,camTop:-(1-2*Ne)*tt,heroH:B?B.offsetHeight:le,colEnd:ae?Y(ae)+ae.offsetHeight-le*.35:ie*.6,end:Re?Math.min(Y(Re)+Re.offsetHeight/2-le/2,ie):ie}}function W(A){const Y=2*tt/P.vh,B=P.camTop-P.heroH*Y,ae=-ht+8.5,Re=-ht+1.6;if(A<=P.heroH)return P.camTop-A*Y;const le=Math.max(P.colEnd,P.heroH+1);if(A<=le)return Be(B,Math.min(ae,B-.5),(A-P.heroH)/(le-P.heroH));const ie=Math.max(P.end,le+1);return A<=ie?Be(Math.min(ae,B-.5),Re,(A-le)/(ie-le)):Math.max(Re-(A-ie)*Y*.15,-ht+1.15)}let J=-99;const de=3.4;function ge(A){h.uTime.value-J<de||(J=h.uTime.value,w[0].set(A,h.uTime.value,1,0))}function Ze(A,Y,B,ae){const Re=h.uCamY.value;for(let le=0;le<d;le++){const ie=be[le],Je=E(ie.z),Ne=Je*h.uAspect.value,K=ie.x/Ne,we=(ie.y-Re)/Je,Pe=K-A,Ge=we-Y,Ae=Math.hypot(Pe*h.uAspect.value,Ge);if(Ae<B){const at=ae*(1-Ae/B);ie.vx+=Pe/(Ae+.001)*at*ie.L*2.6,ie.vy+=Ge/(Ae+.001)*at*ie.L*.25,ie.boost=Math.max(ie.boost,at)}}}function ut(A){const Y=A.clientX/innerWidth*2-1,B=1-A.clientY/innerHeight*2,ae=(L[2].y-h.uCamY.value)/tt;(Math.abs(B-ae)<.32||B<ae&&B>ae-.9)&&ge(Y),Ze(Y,B,.45,1)}if(!e){let A=null;window.addEventListener("pointerdown",Y=>{Y.pointerType==="mouse"?ut(Y):A={x:Y.clientX,y:Y.clientY,t:performance.now()}},{passive:!0}),window.addEventListener("pointerup",Y=>{!A||Y.pointerType==="mouse"||(Math.hypot(Y.clientX-A.x,Y.clientY-A.y)<10&&performance.now()-A.t<450&&ut(Y),A=null)},{passive:!0}),window.addEventListener("pointercancel",()=>{A=null},{passive:!0})}let pt=[],je=[],St=-1e9;function Gt(A){A-St>800&&(je=[...document.querySelectorAll(".card, .step, .order, .contact-card, .section-head")],St=A),pt=[];const Y=innerWidth,B=innerHeight;for(const ae of je){const Re=ae.getBoundingClientRect();Re.bottom<-40||Re.top>B+40||Re.width===0||pt.push([Re.left/Y*2-1,Re.right/Y*2-1,1-Re.bottom/B*2,1-Re.top/B*2])}}const Jn=new lt,Qn=new Rn,Kt=new Yt,ei=new F,xi=new F;function ti(A){for(let Y=0;Y<Xn;Y++){const B=be[Y],ae=E(B.z),Re=ae*h.uAspect.value;B.x=(i()*2-1)*Re*.9,B.y=An(A+(i()*2-1)*ae*.8,-ht+1.2,-2.2),B.vx=(i()<.5?-1:1)*B.L*.5,B.face=Math.sign(B.vx)}}function Pn(){const A=pt.filter(le=>le[1]-le[0]>.15).map(le=>[le[2],le[3]]).sort((le,ie)=>le[0]-ie[0]),Y=[];for(const le of A){const ie=Y[Y.length-1];ie&&le[0]<=ie[1]?ie[1]=Math.max(ie[1],le[1]):Y.push([le[0],le[1]])}const B=[];let ae=-.86;for(const le of Y)le[0]>ae&&B.push([ae,Math.min(le[0],.8)]),ae=Math.max(ae,le[1]);ae<.8&&B.push([ae,.8]);const Re=B.filter(le=>le[1]-le[0]>.035);return Re.length?Re:[[-.86,.8]]}function ni(A){const Y=h.uCamY.value,B=h.uAspect.value,ae=h.uTime.value,Re=qe.size>0,le=Pn(),ie=le.reduce((Ne,K)=>Ne+(K[1]-K[0])+.05,0),Je=new Map;for(let Ne=0;Ne<d;Ne++){const K=be[Ne],we=Re&&qe.has(["pike","perch","zander"][K.sp]),Pe=Re?we?2.2:-8.5:K.zHome,Ge=E(K.z),Ae=Ge*B,at=(K.y-Y)/Ge,yt=Math.abs(at)>1.35;let ot=0,$t=0,ar=0,si=0,Mi=0;for(let Mt=0;Mt<d;Mt++){if(Mt===Ne)continue;const Vt=be[Mt],lr=K.x-Vt.x,ds=K.y-Vt.y,ps=K.z-Vt.z,cr=lr*lr+ds*ds+ps*ps*.3,ur=(K.L+Vt.L)*.5;if(cr<ur*ur){const ms=Math.sqrt(cr)+.001;ot+=lr/ms*(ur-ms)*1.6}Vt.sp===K.sp&&cr<9&&($t+=Vt.x,ar+=Vt.y,si+=Vt.vx,Mi++)}Mi&&(ot+=($t/Mi-K.x)*.25+(si/Mi-K.vx)*.3),K.wander+=(i()-.5)*A*1.2,ot+=Math.cos(K.wander)*.18*K.L;let ts=(K.seed*.618+.13)%1*ie,Qt=le[0];for(const Mt of le){const Vt=Mt[1]-Mt[0]+.05;if(ts<=Vt){Qt=Mt;break}ts-=Vt}const ns=(Je.get(Qt)||0)+1;Je.set(Qt,ns),K.crowded=ns>Math.max(2,Math.round((Qt[1]-Qt[0])*9));let is=(Qt[0]+Qt[1])/2+(K.seed*.37%1-.5)*(Qt[1]-Qt[0])*.7+.04*Math.sin(ae*(.15+K.seed%5*.04)+K.seed);Re&&!we&&(is-=.25);const rs=An(Y+is*Ge,-ht+1.3,-2.2);yt&&(K.y=rs,K.vy=0,K.x=(i()*2-1)*Ae*.85,K.alpha=0),we&&(ot+=(0-K.x)*.08);const ss=Ae*(we?.75:.95);Math.abs(K.x)>ss&&(ot-=Math.sign(K.x)*(Math.abs(K.x)-ss)*2.5);const yi=K.x/Ae,Ei=(K.y-Y)/Ge,as=.02,os=.03,ls=K.L*.5/Ae;K.hidden=!1;let cs=!1;for(const Mt of pt)yi>Mt[0]-as&&yi<Mt[1]+as&&Ei>Mt[2]-os&&Ei<Mt[3]+os&&(cs=!0),yi+ls>Mt[0]&&yi-ls<Mt[1]&&Ei>Mt[2]+.015&&Ei<Mt[3]-.015&&(K.hidden=!0);const us=K.L*(.18+K.boost*.5),Ia=An((rs-K.y)*(cs?1.2:.6),-us,us);K.vy+=(Ia-K.vy)*Math.min(A*1.4,1);const hs=K.L*(.9+K.boost*2);ot=An(ot,-hs,hs),K.vx+=ot*A,K.vz+=((Pe-K.z)*.8-K.vz*1.5)*A;const fs=K.L*(we?.6:.36+K.seed%4*.05),Ti=K.L*(.7+K.boost*1.6);let ai=Math.hypot(K.vx,K.vy);ai>Ti&&(K.vx*=Ti/ai,K.vy*=Ti/ai,ai=Ti),Math.abs(K.vx)<fs*.6&&(K.vx+=Math.sign(K.vx||K.face)*fs*A*1.2),K.boost=Math.max(0,K.boost-A*.6),K.x+=K.vx*A,K.y+=K.vy*A,K.z+=K.vz*A;const or=Math.abs(K.vx)>.05?Math.sign(K.vx):K.face>=0?1:-1;K.face=An(K.face+Math.sign(or-K.face)*A*2.2,-1,1),Math.abs(or-K.face)<A*2.2&&(K.face=or),K.phase+=A*(3.2+ai/K.L*3);const Fa=An(Math.atan2(K.vy,Math.abs(K.vx)+.3*K.L)*.5,-.18,.18);K.pitch+=(Fa-K.pitch)*Math.min(A*1.8,1);const Na=kr(-1.6,-2.8,K.y),Ba=(Re&&!we?.5:1)*Na*(K.hidden||K.crowded?0:1);K.alpha+=(Ba-K.alpha)*Math.min(A*(K.hidden?5:2.2),1)}}function mn(){for(let Y=0;Y<Xn;Y++){const B=be[Y],ae=(B.pitch+.035*Math.sin(h.uTime.value*.4+B.seed*1.7))*Math.sign(B.face||1);Kt.set(0,0,ae),Qn.setFromEuler(Kt),Jn.compose(ei.set(B.x,B.y,B.z),Qn,xi.set(B.L,B.L,B.L)),he.setMatrixAt(Y,Jn),te.setXYZW(Y,B.sp,B.phase,.8+B.boost*.4,Y<d?B.alpha:0),Se.setX(Y,Math.abs(B.face)<.06?.06*Math.sign(B.face||1):B.face)}he.count=d,he.instanceMatrix.needsUpdate=!0,te.needsUpdate=!0,Se.needsUpdate=!0;let A=0;for(let Y=0;Y<d;Y++){const B=be[Y],ae=B.y-(-ht+Zt(B.x,B.z));B.alpha>.05&&ae<9&&Oe[A++].set(B.x,B.z,Math.max(ae,0),B.L*B.alpha)}He.material.uniforms.uShN.value=A}let _n=0;function ii(){innerHeight>4e3&&_n||(c.setPixelRatio(p()),c.setSize(innerWidth,innerHeight),y.aspect=innerWidth/innerHeight,y.updateProjectionMatrix(),h.uAspect.value=y.aspect,$e.material.uniforms.uPR.value=p(),_(),(!_n||Math.abs(y.aspect/_n-1)>.2)&&(Me(),re(),_n=y.aspect),pe())}if(ii(),window.addEventListener("resize",ii,{passive:!0}),"ResizeObserver"in window){const A=document.querySelector("main");A&&new ResizeObserver(()=>pe()).observe(A)}function Si(A){const Y=A>-tt*2.6;q.forEach(ae=>{ae.visible=Y});const B=A<-ht+15;He.visible=B,We.visible=B,Z.visible=B,De.visible=B,Ce.visible=B,g.visible=B,Xe.visible=A<1.5,R.visible=A<-.4,X.material.uniforms.uSurfVis.value=Y?1:0,X.material.uniforms.uBotVis.value=kr(-ht+12,-ht+6,A),he.visible=A<-.5}if(e){const A=e==="surface"?P.camTop:e==="column"?-11.5:-ht+1.6;h.uCamY.value=A,y.position.y=A,d=l.fish,ti(A);for(let Y=0;Y<240;Y++)h.uTime.value+=1/60,ni(1/60);be.forEach(Y=>{Y.alpha=kr(-1.6,-2.8,Y.y)}),h.uTime.value=8,mn(),Si(A),c.render(v,y),window.__snapReady=!0;return}let Ht=W(scrollY);h.uCamY.value=Ht,y.position.y=Ht,ti(Ht);let ri=performance.now(),x=0,D=!0,O=!1,z=0,I=0,se=0,ue=0,xe=0;const ye=window.__scene={tier:a,fps:0,fish:d,dpr:p(),caustics:!0,step:0};Object.defineProperty(ye,"fishAt",{enumerable:!1,value:()=>be.slice(0,d).map(A=>[+(A.x/S(A.z)).toFixed(2),+((A.y-Ht)/E(A.z)).toFixed(2),+A.z.toFixed(1),+A.alpha.toFixed(2),!!A.hidden])});function Ie(){xe++,xe===1?(h.uCaus.value=0,u=.8):xe===2?(d=Math.max(3,Math.ceil(d*.6)),u=.65,me.setDrawRange(0,Math.floor(_e/2))):(d=3,u=.5),c.setPixelRatio(p()),c.setSize(innerWidth,innerHeight),Object.assign(ye,{fish:d,dpr:p(),caustics:h.uCaus.value>.5,step:xe})}function Ue(A){if(!D)return;const Y=Math.min((A-ri)/1e3,.05);ri=A,h.uTime.value+=Y;const B=W(scrollY);if(Ht+=(B-Ht)*(1-Math.exp(-Y*14)),h.uCamY.value=Ht,y.position.y=Ht,Si(Ht),Gt(A),ni(Y),mn(),c.render(v,y),O||(O=!0,m.style.opacity="1",t.classList.add("scene-live")),z+=Y,I++,z>=1){const ae=I/z;ye.fps=Math.round(ae),se++,se>1&&ae<45&&xe<3?(ue++,ue>=2&&(Ie(),ue=0)):ue=0,z=0,I=0}x=requestAnimationFrame(Ue)}x=requestAnimationFrame(Ue),document.addEventListener("visibilitychange",()=>{document.hidden?(D=!1,cancelAnimationFrame(x)):D||(D=!0,ri=performance.now(),z=0,I=0,x=requestAnimationFrame(Ue))})}export{If as boot};
