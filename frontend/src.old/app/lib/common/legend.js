/**
 * legend
 * This is the list for legend of indicators.
 */
import Legend from "../../../core/lib/templates/legend/legend"
import { coreIcons } from "../../../core/lib/templates/icons/icons"
import { coreDescriptions } from "../../../core/lib/templates/descriptions/descriptions"

const legend = new Legend([
    /**
     * Your code here...
     * Example: */
    {
        icon: coreIcons.PENCIL,
        description: coreDescriptions.EDIT,
    },
]).list

export default legend
