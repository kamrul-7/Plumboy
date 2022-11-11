import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - plumbBoy`
    }, [title])
}
export default useTitle