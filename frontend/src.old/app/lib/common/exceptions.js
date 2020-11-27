import Exceptions from "../../../core/lib/templates/exceptions/exceptions"
import MyException from "../../../core/lib/templates/exceptions/myException"

const exceptions = new Exceptions({
    /**
     * Your code here...
     * Example: */
    ERROR: (param = "") => {
        return new MyException(1, "Ошибка!" + param)
    },
}).list

export default exceptions
