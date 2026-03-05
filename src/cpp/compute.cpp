#include <cstring>
#include <vector>

#include "webgl.hpp"


namespace webgl {

DBG_EXPORT JS_METHOD(dispatchCompute) { NAPI_ENV;
	REQ_INT32_ARG(0, x);
	REQ_INT32_ARG(1, y);
	REQ_INT32_ARG(2, z);
	
	glDispatchCompute(x, y, z);
	RET_UNDEFINED;
}

DBG_EXPORT JS_METHOD(memoryBarrier) { NAPI_ENV;
	REQ_INT32_ARG(0, flags);
	
	glMemoryBarrier(flags);
	RET_UNDEFINED;
}

} // namespace webgl
