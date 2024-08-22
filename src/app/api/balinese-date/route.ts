import { BalineseDate } from "balinese-date-js-lib";
import { bodyValidator } from "../../validator";

export async function POST(req: Request, res: Response) {
  try {
    console.log("\nINI API\n");
    const body = await req.json();
    console.log(body);
    const { date } = await bodyValidator.validate(body);
    console.log(date);

    const balineseDay = new BalineseDate(date);
    console.log(balineseDay);

    return new Response(JSON.stringify({ data: balineseDay }));
  } catch (error) {
    console.log("\nINI ERROR\n");
    console.log(error);
    return new Response(JSON.stringify(error));
  }
}
