
import prisma from '@/app/lib/prisma';

export const POST = async(req, res) => {
    try {
        const iddata = await req.json();
        console.log(iddata.data);

        const paidforpdf = await prisma.pdf.update({
            where:{
                id: iddata.data,
            },
            data:{
                isPaid: true,
            }
        })
        console.log('payforpdf request is working in backend ready to go on frontend')
      return Response.json({ message: paidforpdf });
    } catch (err) {
      return Response.json({ error: 'failed to load data' });
    }
  }
