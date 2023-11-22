import { useEffect, useState } from "react";

function useDebounce(data, delay) {
	const [debounceValue, setDebounceValue] = useState(data);

	useEffect(() => {
		console.log("debounce useEffect run")
		const timeoutID = setTimeout(() => {
			console.log("debounce set timeout run")
			setDebounceValue(data)
		}, delay)
		return () => {
			console.log("debounce useEffect unmount")
			clearTimeout(timeoutID)
		}
	}, [delay, data]);

	return debounceValue;
}

export default useDebounce;
