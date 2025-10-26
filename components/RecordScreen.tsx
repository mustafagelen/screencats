"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useScreenRecording } from "@/lib/hooks/useScreenRecording";
import { ICONS } from "@/constants";

const RecordScreen = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const {
    isRecording,
    recordedBlob,
    recordedVideoUrl,
    recordingDuration,
    startRecording,
    stopRecording,
    resetRecording,
  } = useScreenRecording();

  const closeModal = () => {
    resetRecording();
    setIsOpen(false);
  };

  const handleStart = async () => {
    await startRecording();
  };

  const recordAgain = async () => {
    resetRecording();
    await startRecording();
    if (recordedVideoUrl && videoRef.current)
      videoRef.current.src = recordedVideoUrl;
  };

  const goToUpload = () => {
    if (!recordedBlob) return;
    const url = URL.createObjectURL(recordedBlob);
    sessionStorage.setItem(
      "recordedVideo",
      JSON.stringify({
        url,
        name: "screen-recording.webm",
        type: recordedBlob.type,
        size: recordedBlob.size,
        duration: recordingDuration || 0,
      })
    );
    router.push("/upload");
    closeModal();
  };

  return (
    <div className="record">
      <button onClick={() => setIsOpen(true)} className="primary-btn">
        <Image src={ICONS.record} alt="record" width={16} height={16} />
        <span className="truncate">Kayıt Al</span>
      </button>

      {isOpen && (
        <section className="dialog">
          <div className="overlay-record" onClick={closeModal} />
          <div className="dialog-content">
            <figure>
              <h3>Video Kaydı</h3>
              <button onClick={closeModal}>
                <Image src={ICONS.close} alt="Close" width={20} height={20} />
              </button>
            </figure>

            <section>
              {isRecording ? (
                <article>
                  <div />
                  <span>Kayıt işleniyor...</span>
                </article>
              ) : recordedVideoUrl ? (
                <video ref={videoRef} src={recordedVideoUrl} controls />
              ) : (
                <p>Ekranınızın kaydını almak için tıklayın.</p>
              )}
            </section>

            <div className="record-box">
              {!isRecording && !recordedVideoUrl && (
                <button onClick={handleStart} className="record-start">
                  <Image
                    src={ICONS.record}
                    alt="record"
                    width={16}
                    height={16}
                  />
                  Kayıt
                </button>
              )}
              {isRecording && (
                <button onClick={stopRecording} className="record-stop">
                  <Image
                    src={ICONS.record}
                    alt="record"
                    width={16}
                    height={16}
                  />
                  Kaydı Durdur
                </button>
              )}
              {recordedVideoUrl && (
                <>
                  <button onClick={recordAgain} className="record-again">
                    Tekrar Kaydet
                  </button>
                  <button onClick={goToUpload} className="record-upload">
                    <Image
                      src={ICONS.upload}
                      alt="Upload"
                      width={16}
                      height={16}
                    />
                    Yükle
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RecordScreen;