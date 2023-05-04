export default function PredictionOutDown({ data }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border text-center">
                <thead className="border-b bg-blue-200">
                    <tr className="border-b">
                        <th colspan="2" className="bg-green-100 border-r px-6 py-4"> Predicted Break Out </th>
                        <th colspan="2" className="bg-orange-100 px-6 py-4"> Predicted Break Down </th>
                    </tr>
                    <tr>
                        <th className="bg-green-100 border-r px-6 py-4"> 1 </th>
                        <th className="bg-green-100 border-r px-6 py-4"> 2 </th>
                        <th className="bg-orange-100 border-r px-6 py-4"> 1 </th>
                        <th className="bg-orange-100 px-6 py-4"> 2 </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className="border-r px-6 py-4 text-green-600">
                            {Math.round(data.predictedOutValue1) || '-'}
                        </td>
                        <td
                            className="border-r px-6 py-4 text-green-600">
                            {Math.round(data.predictedOutValue2) || '-'}
                        </td>
                        <td
                            className="border-r px-6 py-4 text-red-600">
                            {Math.round(data.predictedDownValue1) || '-'}
                        </td>
                        <td className="px-6 py-4 text-red-600">
                            {Math.round(data.predictedDownValue2) || '-'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}