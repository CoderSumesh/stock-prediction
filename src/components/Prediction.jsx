export default function Prediction({ data }) {
    return (
        <div className="mb-10">
            <table className="w-full border text-center">
                <thead className="border-b bg-blue-200">
                    <tr className="border-b">
                        <th colspan="3" className="px-6 py-4"> Predicted Closing Value </th>
                    </tr>
                    <tr>
                        <th className="border-r px-6 py-4"> 61% </th>
                        <th className="border-r px-6 py-4"> 38% </th>
                        <th className="px-6 py-4"> 50% </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className="border-r px-6 py-4 text-green-600">
                            {Math.round(data.predictedClosingValue61) || '-'}
                        </td>
                        <td
                            className="border-r px-6 py-4 text-red-600">
                            {Math.round(data.predictedClosingValue38) || '-'}
                        </td>
                        <td className="px-6 py-4">
                            {Math.round(data.predictedClosingValue50) || '-'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}