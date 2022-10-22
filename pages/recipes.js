import { Client } from "@notionhq/client"

const RecipePage = ({ recipes }) => {
    return(
        <pre>
            {JSON.stringify(recipes, null, 2)}
        </pre>
    )
}

export const getStaticProps = async () => {
    const notion = new Client({
        auth: process.env.NOTION_SECRET
    })

    const data = await notion.blocks.children.list({
        block_id: process.env.PAGE_ID
    })

    return {
        props: {
            recipes: data
        }
    }
}

export default RecipePage