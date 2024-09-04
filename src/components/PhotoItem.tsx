import { Photo } from "@/types/Photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({ photo, onClick }: Props) => {
    return(
        <div onClick={onClick} className="cursor-pointer hover:opacity-90">
            <img src={`/assets/${photo.url}`} alt="" className="w-96 h-48"/>
        </div>
    );
}