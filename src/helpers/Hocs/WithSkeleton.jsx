import Skeleton from '../../Components/Skeleton/Skeleton'
const WithSkeleton = (Component, type) => {
	return function WithSkeleton(props) {
		const { isLoading, countt,  ...restProps } = props
		if (isLoading) {
			return <Skeleton type={type} count={countt} />
		}

		return <Component {...restProps} />
	}
}

export default WithSkeleton
