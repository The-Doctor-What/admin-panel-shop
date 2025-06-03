import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'})
    }

    const body = req.body


    return res.status(200).json({
        data: [
            {
                name: "Пример товара",
                regId: "123456789",
                inn: "1234567890",
                date: "2023-01-01",
                endDate: "2024-01-01",
                manufacturer: "Пример Производитель"
            }
        ],
        notFound: [],
        error: false
    });
}
