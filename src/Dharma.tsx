import Scorer from './pages/Scorer'
import { Route, Routes } from '@solidjs/router'
import RecordingBoard from './pages/RecordingBoard'
import Master from './pages/Master'
import Guide from './pages/Guide'
import GameMaker from './pages/GameMaker'

function Dharma() {
    return (
        <>
            <Routes>
                /// ゲーム選択画面 責務：リザルト画面に繋がる過去開催試合の表
                <Route path="/" component={Guide} />
                /// マスタ画面 責務：プレーヤー・チームの登録設定
                <Route path="/master" component={Master} />
                /// ゲームメイク 責務：レコーディング画面への準備
                <Route path="/gamemaker" component={GameMaker} />
                /// レコーディング画面 責務：レイドリザルトの記録入力
                <Route path="/recordingboard" component={RecordingBoard} />
                /// スコア画面 責務：ゲーム状況の表示出力 - 別ウィンドウ
                <Route path="/scorer" component={Scorer} />
            </Routes>
        </>
    )
}

export default Dharma
