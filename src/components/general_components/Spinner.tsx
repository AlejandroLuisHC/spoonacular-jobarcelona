import { GiSpoon } from '@react-icons/all-files/gi/GiSpoon'
import { DivSpinner } from '../../style/components/general_components'
import { memo } from 'react'

const Spinner = () => {
    return (
        <DivSpinner><GiSpoon /></DivSpinner>
    )
}

export default memo(Spinner)