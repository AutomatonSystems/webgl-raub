declare module "webgl-raub" {
	
	namespace webgl {
		type TActiveInfo = Readonly<{
			size: number;
			type: number;
			name: string;
		}>;
		
		type TResourceId = number;
		
		type TSize = Readonly<{ width: number; height: number }>;
		
		type TImage = TSize & Readonly<{
			data: Buffer;
			noflip?: boolean;
		}>;
		
		type TShaderArray = number[] | Float32Array;
		
		class TGLObject {
			constructor(_: TResourceId);
			_: TResourceId;
		};
		
		class TGLActiveInfo {
			constructor(_: TActiveInfo);
			_: TActiveInfo;
			size: number;
			type: number;
			name: string;
		};
		
		class WebGLRenderingContext extends TGLObject {};
		class WebGLProgram extends TGLObject {};
		class WebGLShader extends TGLObject {};
		class WebGLBuffer extends TGLObject {};
		class WebGLVertexArray extends TGLObject {};
		class WebGLFramebuffer extends TGLObject {};
		class WebGLRenderbuffer extends TGLObject {};
		class WebGLTexture extends TGLObject {};
		class WebGLUniformLocation extends TGLObject {};
		class WebGLActiveInfo extends TGLActiveInfo {};
		class WebGLTransformFeedback extends TGLObject {};
		
		const init: () => void;
		const bindAttribLocation: (program: WebGLProgram, index: number, name: string) => void;
		const disableVertexAttribArray: (index: number) => void;
		const enableVertexAttribArray: (id: number) => void;
		const getActiveAttrib: (program: WebGLProgram, index: number) => TActiveInfo;
		const getAttribLocation: (program: WebGLProgram, name: string) => number;
		const getVertexAttrib: (index: number, name: number) => (boolean | number | number[]);
		const getVertexAttribOffset: (index: number, name: number) => number;
		const vertexAttrib1f: (location: number, x: number) => void;
		const vertexAttrib1fv: (location: number, v: TShaderArray) => void;
		const vertexAttrib2f: (location: number, x: number, y: number) => void;
		const vertexAttrib2fv: (location: number, v: TShaderArray) => void;
		const vertexAttrib3f: (location: number, x: number, y: number, z: number) => void;
		const vertexAttrib3fv: (location: number, v: TShaderArray) => void;
		const vertexAttrib4f: (location: number, x: number, y: number, z: number, w: number) => void;
		const vertexAttrib4fv: (location: number, v: TShaderArray) => void;
		const vertexAttribPointer: (index: number, name: number) => number;
		const vertexAttribIPointer: (
			indx: number,
			size: number,
			type: number,
			stride: number,
			offset: number,
		) => void;
		const blendColor: (
			red: number,
			green: number,
			blue: number,
			alpha: number,
		) => void;
		const blendEquation: (mode: number) => void;
		const blendEquationSeparate: (modeRGB: number, modeAlpha: number) => void;
		const blendFunc: (sfactor: number, dfactor: number) => void;
		const blendFuncSeparate: (
			srcRGB: number,
			dstRGB: number,
			srcAlpha: number,
			dstAlpha: number,
		) => void;
		const createBuffer: () => WebGLBuffer;
		const deleteBuffer: (buffer: WebGLBuffer) => void;
		const isBuffer: (buffer: WebGLBuffer) => boolean;
		const bindBuffer: (target: number, buffer: WebGLBuffer) => void;
		const bindBufferBase: (
			target: number,
			index: number,
			buffer: WebGLBuffer,
		) => void;
		const bindBufferRange: (
			target: number,
			index: number,
			buffer: WebGLBuffer,
			offset: number,
			size: number,
		) => void;
		const bufferData: (
			target: number,
			value: number | number[] | Float32Array,
			usage: number,
		) => void;
		const bufferSubData: (
			target: number,
			offset: number,
			arr: Float32Array,
		) => void;
		const copyBufferSubData: (
			readTarget: number,
			writeTarget: number,
			readOffset: number,
			writeOffset: number,
			size: number,
		) => void;
		const getBufferSubData: (
			readTarget: number,
			sourceByteOffset: number,
			dest: Float32Array,
			destByteOffset: number,
			length: number,
		) => void;
		const getBufferParameter: (target: number, name: number) => number;
		const createFramebuffer: () => WebGLFramebuffer;
		const deleteFramebuffer: (frameBuffer: WebGLFramebuffer) => void;
		const isFramebuffer: (frameBuffer: WebGLFramebuffer) => boolean;
		const bindFramebuffer: (target: number, buffer: WebGLFramebuffer) => void;
		const blitFrameBuffer: (
			srcX0: number,
			srcY0: number,
			srcX1: number,
			srcY1: number,
			dstX0: number,
			dstY0: number,
			dstX1: number,
			dstY1: number,
			mask: number,
			filter: number,
		) => void;
		const checkFramebufferStatus: (target: number) => number;
		const framebufferRenderbuffer: (
			target: number,
			attachment: number,
			renderbuffertarget: number,
			renderbuffer: WebGLRenderbuffer,
		) => void;
		const framebufferTexture2D: (
			target: number,
			attachment: number,
			textarget: number,
			texture: WebGLTexture,
			level: number,
		) => void;
		const getFramebufferAttachmentParameter: (
			target: number,
			attachment: number,
			name: number,
		) => number;
		const createProgram: () => WebGLProgram;
		const deleteProgram: (program: WebGLProgram) => void;
		const isProgram: (program: WebGLProgram) => boolean;
		const getProgramInfoLog: (program: WebGLProgram) => string;
		const getProgramParameter: (program: WebGLProgram, name: number) => (boolean | number);
		const linkProgram: (program: WebGLProgram) => void;
		const useProgram: (program: WebGLProgram) => void;
		const validateProgram: (program: WebGLProgram) => void;
		const createRenderbuffer: () => WebGLRenderbuffer;
		const deleteRenderbuffer: (renderBuffer: WebGLRenderbuffer) => void;
		const isRenderbuffer: (renderBuffer: WebGLRenderbuffer) => boolean;
		const bindRenderbuffer: (target: number, renderBuffer: WebGLRenderbuffer) => void;
		const getRenderbufferParameter: (target: number, name: number) => number;
		const renderbufferStorage: (
			target: number,
			internalformat: number,
			width: number,
			height: number,
		) => void;
		const createShader: () => WebGLShader;
		const deleteShader: (shader: WebGLShader) => void;
		const isShader: (shader: WebGLShader) => boolean;
		const attachShader: (program: WebGLProgram, shader: WebGLShader) => void;
		const compileShader: (shader: WebGLShader) => void;
		const detachShader: (program: WebGLProgram, shader: WebGLShader) => void;
		const getAttachedShaders: (program: WebGLProgram) => (number[]);
		const getShaderInfoLog: (shader: WebGLShader) => string;
		const getShaderParameter: (shader: WebGLShader, pname: number) => (number | boolean);
		const getShaderSource: (shader: WebGLShader) => string;
		const shaderSource: (shader: WebGLShader, code: string) => void;
		const clearStencil: (index: number) => void;
		const stencilFunc: (
			func: number,
			ref: number,
			mask: number,
		) => void;
		const stencilFuncSeparate: (
			face: number,
			func: number,
			ref: number,
			mask: number,
		) => void;
		const stencilMask: (mask: number) => void;
		const stencilMaskSeparate: (face: number, mask: number) => void;
		const stencilOp: (
			fail: number,
			zfail: number,
			zpass: number,
		) => void;
		const stencilOpSeparate: (
			face: number,
			fail: number,
			zfail: number,
			zpass: number,
		) => void;
		const createTexture: () => WebGLTexture;
		const deleteTexture: (texture: WebGLTexture) => void;
		const isTexture: (texture: WebGLTexture) => boolean;
		const bindTexture: (target: WebGLTexture, texture: number) => void;
		const activeTexture: (textureUnit: number) => void;
		const copyTexImage2D: (
			target: number,
			level: number,
			internalformat: number,
			x: number,
			y: number,
			width: number,
			height: number,
			border: number,
		) => void;
		const copyTexSubImage2D: (
			target: number,
			level: number,
			xoffset: number,
			yoffset: number,
			x: number,
			y: number,
			width: number,
			height: number,
		) => void;
		const generateMipmap: (target: number) => void;
		const getTexParameter: (target: number, name: number) => number;
		const texImage2D: (
			target: number,
			level: number,
			internalformat: number,
			width: number,
			height: number,
			border: number,
			format: number,
			type: number,
			ptr?: TImage | number,
		) => void;
		const texParameterf: (
			target: number,
			name: number,
			param: number,
		) => void;
		const texParameteri: (
			target: number,
			name: number,
			param: number,
		) => void;
		const texSubImage2D: (
			target: number,
			level: number,
			xoffset: number,
			yoffset: number,
			width: number,
			height: number,
			format: number,
			type: number,
			image?: TImage,
		) => void;
		const getActiveUniform: (program: WebGLProgram, index: number) => TActiveInfo;
		const getUniform: (program: WebGLProgram, location: WebGLUniformLocation) => (undefined | number[]);
		const getUniformLocation: (program: WebGLProgram, name: string) => number;
		const uniform1f: (location: WebGLUniformLocation, x: number) => void;
		const uniform1fv: (location: WebGLUniformLocation, values: TShaderArray) => void;
		const uniform1i: (location: WebGLUniformLocation, x: number) => void;
		const uniform1iv: (location: WebGLUniformLocation, values: TShaderArray) => void;
		const uniform2f: (location: WebGLUniformLocation, x: number, y: number) => void;
		const uniform2fv: (location: WebGLUniformLocation, values: TShaderArray) => void;
		const uniform2i: (location: WebGLUniformLocation, x: number, y: number) => void;
		const uniform2iv: (location: WebGLUniformLocation, values: TShaderArray) => void;
		const uniform3f: (location: WebGLUniformLocation, x: number, y: number, z: number) => void;
		const uniform3fv: (location: WebGLUniformLocation, values: TShaderArray) => void;
		const uniform3i: (location: WebGLUniformLocation, x: number, y: number, z: number) => void;
		const uniform3iv: (location: WebGLUniformLocation, values: TShaderArray) => void;
		const uniform4f: (location: WebGLUniformLocation, x: number, y: number, z: number, w: number) => void;
		const uniform4fv: (location: WebGLUniformLocation, values: TShaderArray) => void;
		const uniform4i: (location: WebGLUniformLocation, x: number, y: number, z: number, w: number) => void;
		const uniform4iv: (location: WebGLUniformLocation, values: TShaderArray) => void;
		const uniformMatrix2fv: (location: WebGLUniformLocation, transpose: boolean, values: TShaderArray) => void;
		const uniformMatrix3fv: (location: WebGLUniformLocation, transpose: boolean, values: TShaderArray) => void;
		const uniformMatrix4fv: (location: WebGLUniformLocation, transpose: boolean, values: TShaderArray) => void;
		const createVertexArray: () => WebGLVertexArray;
		const deleteVertexArray: (vertexArray: WebGLVertexArray) => void;
		const isVertexArray: (vertexArray: WebGLVertexArray) => boolean;
		const bindVertexArray: (vertexarray: WebGLVertexArray) => void;
		const drawArraysInstanced: (
			mode: number,
			first: number,
			count: number,
			primcount: number,
		) => void;
		const drawElementsInstanced: (
			mode: number,
			count: number,
			type: number,
			ptr: number,
			primcount: number,
		) => void;
		const vertexAttribDivisor: (index: number, divisor: number) => void;
		const createTransformFeedback: () => WebGLTransformFeedback;
		const deleteTransformFeedback: (transformFeedback: WebGLTransformFeedback) => void;
		const isTransformFeedback: (transformFeedback: WebGLTransformFeedback) => boolean;
		const bindTransformFeedback: (target: number, transformFeedback: WebGLTransformFeedback) => void;
		const beginTransformFeedback: (mode: number) => void;
		const endTransformFeedback: () => void;
		const pauseTransformFeedback: () => void;
		const resumeTransformFeedback: () => void;
		const transformFeedbackVaryings: (
			program: WebGLProgram,
			jsVaryings: string[],
			bufferMode: number,
		) => void;
		const getTransformFeedbackVarying: (program: WebGLProgram, index: number) => TActiveInfo;
		const clear: (target: number) => void;
		const clearColor: (
			red: number,
			green: number,
			blue: number,
			alpha: number,
		) => void;
		const clearDepth: (depth: number) => void;
		const colorMask: (
			red: boolean,
			green: boolean,
			blue: boolean,
			alpha: boolean,
		) => void;
		const cullFace: (mode: number) => void;
		const depthFunc: (id: number) => void;
		const depthMask: (flag: boolean) => void;
		const depthRange: (zNear: number, zFar: number) => void;
		const disable: (id: number) => void;
		const drawArrays: (
			mode: number,
			first: number,
			count: number,
		) => void;
		const drawElements: (
			mode: number,
			count: number,
			type: number,
			ptr: number,
		) => void;
		const enable: (id: number) => void;
		const finish: () => void;
		const flush: () => void;
		const frontFace: (id: number) => void;
		const getError: () => number;
		const getParameter: (name: number) => (number | boolean | number[] | string | boolean[]);
		const getRenderTarget: (
			width: number,
			height: number,
			samples: number,
		) => (number[] | null);
		const getSupportedExtensions: () => (string[]);
		const getExtension: (name: string) => unknown;
		const hint: (target: number, mode: number) => void;
		const isEnabled: (capability: number) => boolean;
		const lineWidth: (width: number) => void;
		const pixelStorei: (name: number, param: number) => void;
		const polygonOffset: (factor: number, units: number) => void;
		const readPixels: (
			x: number,
			y: number,
			width: number,
			height: number,
			format: number,
			type: number,
			image: TImage,
		) => void;
		const sampleCoverage: (value: number, invert: boolean) => void;
		const scissor: (
			x: number,
			y: number,
			width: number,
			height: number,
		) => void;
		const viewport: (
			x: number,
			y: number,
			w: number,
			h: number,
		) => void;
		
		const drawingBufferWidth: number;
		const drawingBufferHeight: number;
		
		const DEPTH_BUFFER_BIT: number;
		const STENCIL_BUFFER_BIT: number;
		const COLOR_BUFFER_BIT: number;
		const FALSE: number;
		const TRUE: number;
		const POINTS: number;
		const LINES: number;
		const LINE_LOOP: number;
		const LINE_STRIP: number;
		const TRIANGLES: number;
		const TRIANGLE_STRIP: number;
		const TRIANGLE_FAN: number;
		const ZERO: number;
		const ONE: number;
		const SRC_COLOR: number;
		const ONE_MINUS_SRC_COLOR: number;
		const SRC_ALPHA: number;
		const ONE_MINUS_SRC_ALPHA: number;
		const DST_ALPHA: number;
		const ONE_MINUS_DST_ALPHA: number;
		const DST_COLOR: number;
		const ONE_MINUS_DST_COLOR: number;
		const SRC_ALPHA_SATURATE: number;
		const FUNC_ADD: number;
		const BLEND_EQUATION: number;
		const BLEND_EQUATION_RGB: number;
		const BLEND_EQUATION_ALPHA: number;
		const FUNC_SUBTRACT: number;
		const FUNC_REVERSE_SUBTRACT: number;
		const BLEND_DST_RGB: number;
		const BLEND_SRC_RGB: number;
		const BLEND_DST_ALPHA: number;
		const BLEND_SRC_ALPHA: number;
		const CONSTANT_COLOR: number;
		const ONE_MINUS_CONSTANT_COLOR: number;
		const CONSTANT_ALPHA: number;
		const ONE_MINUS_CONSTANT_ALPHA: number;
		const BLEND_COLOR: number;
		const ARRAY_BUFFER: number;
		const ELEMENT_ARRAY_BUFFER: number;
		const ARRAY_BUFFER_BINDING: number;
		const ELEMENT_ARRAY_BUFFER_BINDING: number;
		const STREAM_DRAW: number;
		const STATIC_DRAW: number;
		const DYNAMIC_DRAW: number;
		const BUFFER_SIZE: number;
		const BUFFER_USAGE: number;
		const CURRENT_VERTEX_ATTRIB: number;
		const FRONT: number;
		const BACK: number;
		const FRONT_AND_BACK: number;
		const TEXTURE_2D: number;
		const CULL_FACE: number;
		const BLEND: number;
		const DITHER: number;
		const STENCIL_TEST: number;
		const DEPTH_TEST: number;
		const SCISSOR_TEST: number;
		const POLYGON_OFFSET_FILL: number;
		const SAMPLE_ALPHA_TO_COVERAGE: number;
		const SAMPLE_COVERAGE: number;
		const NO_ERROR: number;
		const INVALID_ENUM: number;
		const INVALID_VALUE: number;
		const INVALID_OPERATION: number;
		const OUT_OF_MEMORY: number;
		const CW: number;
		const CCW: number;
		const LINE_WIDTH: number;
		const ALIASED_POINT_SIZE_RANGE: number;
		const ALIASED_LINE_WIDTH_RANGE: number;
		const CULL_FACE_MODE: number;
		const FRONT_FACE: number;
		const DEPTH_RANGE: number;
		const DEPTH_WRITEMASK: number;
		const DEPTH_CLEAR_VALUE: number;
		const DEPTH_FUNC: number;
		const STENCIL_CLEAR_VALUE: number;
		const STENCIL_FUNC: number;
		const STENCIL_FAIL: number;
		const STENCIL_PASS_DEPTH_FAIL: number;
		const STENCIL_PASS_DEPTH_PASS: number;
		const STENCIL_REF: number;
		const STENCIL_VALUE_MASK: number;
		const STENCIL_WRITEMASK: number;
		const STENCIL_BACK_FUNC: number;
		const STENCIL_BACK_FAIL: number;
		const STENCIL_BACK_PASS_DEPTH_FAIL: number;
		const STENCIL_BACK_PASS_DEPTH_PASS: number;
		const STENCIL_BACK_REF: number;
		const STENCIL_BACK_VALUE_MASK: number;
		const STENCIL_BACK_WRITEMASK: number;
		const VIEWPORT: number;
		const SCISSOR_BOX: number;
		const COLOR_CLEAR_VALUE: number;
		const COLOR_WRITEMASK: number;
		const UNPACK_ALIGNMENT: number;
		const PACK_ALIGNMENT: number;
		const MAX_TEXTURE_SIZE: number;
		const MAX_VIEWPORT_DIMS: number;
		const SUBPIXEL_BITS: number;
		const RED_BITS: number;
		const GREEN_BITS: number;
		const BLUE_BITS: number;
		const ALPHA_BITS: number;
		const DEPTH_BITS: number;
		const STENCIL_BITS: number;
		const POLYGON_OFFSET_UNITS: number;
		const POLYGON_OFFSET_FACTOR: number;
		const TEXTURE_BINDING_2D: number;
		const SAMPLE_BUFFERS: number;
		const SAMPLES: number;
		const SAMPLE_COVERAGE_VALUE: number;
		const SAMPLE_COVERAGE_INVERT: number;
		const NUM_COMPRESSED_TEXTURE_FORMATS: number;
		const COMPRESSED_TEXTURE_FORMATS: number;
		const DONT_CARE: number;
		const FASTEST: number;
		const NICEST: number;
		const GENERATE_MIPMAP_HINT: number;
		const BYTE: number;
		const UNSIGNED_BYTE: number;
		const SHORT: number;
		const UNSIGNED_SHORT: number;
		const INT: number;
		const UNSIGNED_INT: number;
		const FLOAT: number;
		const FIXED: number;
		const DEPTH_COMPONENT: number;
		const ALPHA: number;
		const RGB: number;
		const RGBA: number;
		const LUMINANCE: number;
		const LUMINANCE_ALPHA: number;
		const UNSIGNED_SHORT_4_4_4_4: number;
		const UNSIGNED_SHORT_5_5_5_1: number;
		const UNSIGNED_SHORT_5_6_5: number;
		const FRAGMENT_SHADER: number;
		const VERTEX_SHADER: number;
		const MAX_VERTEX_ATTRIBS: number;
		const MAX_VERTEX_UNIFORM_VECTORS: number;
		const MAX_VARYING_VECTORS: number;
		const MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
		const MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
		const MAX_TEXTURE_IMAGE_UNITS: number;
		const MAX_FRAGMENT_UNIFORM_VECTORS: number;
		const SHADER_TYPE: number;
		const DELETE_STATUS: number;
		const LINK_STATUS: number;
		const VALIDATE_STATUS: number;
		const ATTACHED_SHADERS: number;
		const ACTIVE_UNIFORMS: number;
		const ACTIVE_UNIFORM_MAX_LENGTH: number;
		const ACTIVE_ATTRIBUTES: number;
		const ACTIVE_ATTRIBUTE_MAX_LENGTH: number;
		const SHADING_LANGUAGE_VERSION: number;
		const CURRENT_PROGRAM: number;
		const NEVER: number;
		const LESS: number;
		const EQUAL: number;
		const LEQUAL: number;
		const GREATER: number;
		const NOTEQUAL: number;
		const GEQUAL: number;
		const ALWAYS: number;
		const KEEP: number;
		const REPLACE: number;
		const INCR: number;
		const DECR: number;
		const INVERT: number;
		const INCR_WRAP: number;
		const DECR_WRAP: number;
		const PROGRAM_POINT_SIZE: number;
		const POINT_SPRITE: number;
		const VENDOR: number;
		const RENDERER: number;
		const VERSION: number;
		const EXTENSIONS: number;
		const NEAREST: number;
		const LINEAR: number;
		const NEAREST_MIPMAP_NEAREST: number;
		const LINEAR_MIPMAP_NEAREST: number;
		const NEAREST_MIPMAP_LINEAR: number;
		const LINEAR_MIPMAP_LINEAR: number;
		const TEXTURE_MAG_FILTER: number;
		const TEXTURE_MIN_FILTER: number;
		const TEXTURE_WRAP_S: number;
		const TEXTURE_WRAP_T: number;
		const TEXTURE: number;
		const TEXTURE_CUBE_MAP: number;
		const TEXTURE_BINDING_CUBE_MAP: number;
		const TEXTURE_CUBE_MAP_POSITIVE_X: number;
		const TEXTURE_CUBE_MAP_NEGATIVE_X: number;
		const TEXTURE_CUBE_MAP_POSITIVE_Y: number;
		const TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
		const TEXTURE_CUBE_MAP_POSITIVE_Z: number;
		const TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
		const MAX_CUBE_MAP_TEXTURE_SIZE: number;
		const TEXTURE0: number;
		const TEXTURE1: number;
		const TEXTURE2: number;
		const TEXTURE3: number;
		const TEXTURE4: number;
		const TEXTURE5: number;
		const TEXTURE6: number;
		const TEXTURE7: number;
		const TEXTURE8: number;
		const TEXTURE9: number;
		const TEXTURE10: number;
		const TEXTURE11: number;
		const TEXTURE12: number;
		const TEXTURE13: number;
		const TEXTURE14: number;
		const TEXTURE15: number;
		const TEXTURE16: number;
		const TEXTURE17: number;
		const TEXTURE18: number;
		const TEXTURE19: number;
		const TEXTURE20: number;
		const TEXTURE21: number;
		const TEXTURE22: number;
		const TEXTURE23: number;
		const TEXTURE24: number;
		const TEXTURE25: number;
		const TEXTURE26: number;
		const TEXTURE27: number;
		const TEXTURE28: number;
		const TEXTURE29: number;
		const TEXTURE30: number;
		const TEXTURE31: number;
		const ACTIVE_TEXTURE: number;
		const CLAMP: number;
		const CLAMP_TO_BORDER: number;
		const CLAMP_TO_EDGE: number;
		const MIRRORED_REPEAT: number;
		const REPEAT: number;
		const FLOAT_VEC2: number;
		const FLOAT_VEC3: number;
		const FLOAT_VEC4: number;
		const INT_VEC2: number;
		const INT_VEC3: number;
		const INT_VEC4: number;
		const BOOL: number;
		const BOOL_VEC2: number;
		const BOOL_VEC3: number;
		const BOOL_VEC4: number;
		const FLOAT_MAT2: number;
		const FLOAT_MAT3: number;
		const FLOAT_MAT4: number;
		const SAMPLER_2D: number;
		const SAMPLER_CUBE: number;
		const VERTEX_ATTRIB_ARRAY_ENABLED: number;
		const VERTEX_ATTRIB_ARRAY_SIZE: number;
		const VERTEX_ATTRIB_ARRAY_STRIDE: number;
		const VERTEX_ATTRIB_ARRAY_TYPE: number;
		const VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
		const VERTEX_ATTRIB_ARRAY_POINTER: number;
		const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
		const IMPLEMENTATION_COLOR_READ_TYPE: number;
		const IMPLEMENTATION_COLOR_READ_FORMAT: number;
		const COMPILE_STATUS: number;
		const INFO_LOG_LENGTH: number;
		const SHADER_SOURCE_LENGTH: number;
		const SHADER_COMPILER: number;
		const SHADER_BINARY_FORMATS: number;
		const NUM_SHADER_BINARY_FORMATS: number;
		const LOW_FLOAT: number;
		const MEDIUM_FLOAT: number;
		const HIGH_FLOAT: number;
		const LOW_INT: number;
		const MEDIUM_INT: number;
		const HIGH_INT: number;
		const FRAMEBUFFER: number;
		const RENDERBUFFER: number;
		const RGBA4: number;
		const RGB5_A1: number;
		const RGB565: number;
		const DEPTH_COMPONENT16: number;
		const STENCIL_INDEX: number;
		const STENCIL_INDEX8: number;
		const DEPTH_STENCIL: number;
		const DEPTH24_STENCIL8: number;
		const RENDERBUFFER_WIDTH: number;
		const RENDERBUFFER_HEIGHT: number;
		const RENDERBUFFER_INTERNAL_FORMAT: number;
		const RENDERBUFFER_RED_SIZE: number;
		const RENDERBUFFER_GREEN_SIZE: number;
		const RENDERBUFFER_BLUE_SIZE: number;
		const RENDERBUFFER_ALPHA_SIZE: number;
		const RENDERBUFFER_DEPTH_SIZE: number;
		const RENDERBUFFER_STENCIL_SIZE: number;
		const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
		const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
		const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
		const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
		const COLOR_ATTACHMENT0: number;
		const DEPTH_ATTACHMENT: number;
		const STENCIL_ATTACHMENT: number;
		const DEPTH_STENCIL_ATTACHMENT: number;
		const VERTEX_ARRAY_BINDING: number;
		const NONE: number;
		const FRAMEBUFFER_COMPLETE: number;
		const FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
		const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
		const FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
		const FRAMEBUFFER_UNSUPPORTED: number;
		const FRAMEBUFFER_BINDING: number;
		const RENDERBUFFER_BINDING: number;
		const MAX_RENDERBUFFER_SIZE: number;
		const INVALID_FRAMEBUFFER_OPERATION: number;
		const TRANSFORM_FEEDBACK_BUFFER_MODE: number;
		const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: number;
		const TRANSFORM_FEEDBACK_VARYINGS: number;
		const TRANSFORM_FEEDBACK_BUFFER_START: number;
		const TRANSFORM_FEEDBACK_BUFFER_SIZE: number;
		const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: number;
		const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: number;
		const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: number;
		const INTERLEAVED_ATTRIBS: number;
		const SEPARATE_ATTRIBS: number;
		const TRANSFORM_FEEDBACK_BUFFER: number;
		const TRANSFORM_FEEDBACK_BUFFER_BINDING: number;
		const TRANSFORM_FEEDBACK: number;
		const TRANSFORM_FEEDBACK_PAUSED: number;
		const TRANSFORM_FEEDBACK_ACTIVE: number;
		const TRANSFORM_FEEDBACK_BINDING: number;
		const UNPACK_FLIP_Y_WEBGL: number;
		const UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
		const CONTEXT_LOST_WEBGL: number;
		const UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
		const BROWSER_DEFAULT_WEBGL: number;
		const PIXEL_PACK_BUFFER: number;
		const PIXEL_UNPACK_BUFFER: number;
		const PIXEL_PACK_BUFFER_BINDING: number;
		const PIXEL_UNPACK_BUFFER_BINDING: number;
	}
	
	export = webgl;
}