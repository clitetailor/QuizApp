import { CollectionObject } from './collection-object.model';

export interface QuizPacket extends CollectionObject{
    Quizzes: Quiz[],
    LinhVuc: string,
    ThoiGianTao: Date,
    ThoiGianTraLoi: number,
    SoLuotView: number,
    SoLuotVote: number,
    TieuDe: string
    TacGia?: string
    
}

interface Quiz extends CollectionObject{
    CauHoi: string,
    Answers: DapAn[],
    SoNguoiTraLoi: number
}

interface DapAn extends CollectionObject{
    DapAn: string,
    True: boolean,
    SoNguoiChon: number,
}
