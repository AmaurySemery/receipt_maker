import { Estimate } from "../App"

type cardProps = {
    data: Estimate
}

export default function Card({ data }: cardProps) {
    return <>
    <h3>{data.title}</h3>
    <div>TODO - render the rest</div>
    </>
}