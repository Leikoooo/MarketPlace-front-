import AvatarBlock from "@/components/AvatarBlock/AvatarBlock"
import './page.scss';
import { getProfile } from "@/http/userAPI";
import { notFound } from 'next/navigation'

interface pageProps {
    params: {
        id: number
    }
}

export default async function Profile({ params: { id } }: pageProps) {
    const data = await getProfile(id)
    if (!data){
        notFound()
    }
    console.log(data)
    return (
        <div className="Profile">
            <div className="HomeContent">
                <div className="headerContainer">
                    <AvatarBlock name={data.name} imageUrl={""} bio={""} />
                </div>
            </div>
        </div>
    )

}
