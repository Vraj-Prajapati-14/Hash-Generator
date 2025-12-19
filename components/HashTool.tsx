"use client";

import { useState, useEffect } from "react";
import { Copy, Trash2, CheckCircle, AlertTriangle } from "lucide-react";
import TextEditor from "./TextEditor";
import styles from "./HashTool.module.css";
import clsx from "clsx";
import CryptoJS from "crypto-js";

type HashType = "MD5" | "SHA1" | "SHA256" | "SHA512";

export default function HashTool() {
    const [input, setInput] = useState<string>("");
    const [hashes, setHashes] = useState<Record<HashType, string>>({
        MD5: "",
        SHA1: "",
        SHA256: "",
        SHA512: "",
    });
    const [status, setStatus] = useState<{ type: "error" | "success" | null; message: string }>({ type: null, message: "" });

    const generateHash = (text: string, type: HashType): string => {
        if (!text || text.trim() === "") return "";

        switch (type) {
            case "MD5":
                return CryptoJS.MD5(text).toString();
            case "SHA1":
                return CryptoJS.SHA1(text).toString();
            case "SHA256":
                return CryptoJS.SHA256(text).toString();
            case "SHA512":
                return CryptoJS.SHA512(text).toString();
            default:
                return "";
        }
    };

    useEffect(() => {
        const newHashes = {
            MD5: generateHash(input, "MD5"),
            SHA1: generateHash(input, "SHA1"),
            SHA256: generateHash(input, "SHA256"),
            SHA512: generateHash(input, "SHA512"),
        };
        setHashes(newHashes);
    }, [input]);

    const handleClear = () => {
        setInput("");
        setHashes({
            MD5: "",
            SHA1: "",
            SHA256: "",
            SHA512: "",
        });
        setStatus({ type: null, message: "" });
    };

    const handleCopy = async (hashValue: string, hashType: string) => {
        if (!hashValue) return;
        try {
            await navigator.clipboard.writeText(hashValue);
            setStatus({ type: "success", message: `${hashType} hash copied to clipboard!` });
            setTimeout(() => setStatus({ type: null, message: "" }), 2000);
        } catch (err) {
            setStatus({ type: "error", message: "Failed to copy to clipboard" });
            setTimeout(() => setStatus({ type: null, message: "" }), 2000);
        }
    };

    const hashTypes: HashType[] = ["MD5", "SHA1", "SHA256", "SHA512"];

    return (
        <div className={styles.container}>
            <div className={styles.toolbar}>
                <div className={styles.actions}>
                    <button onClick={handleClear} className="btn btn-secondary" title="Clear All">
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {status.message && (
                <div className={clsx(styles.status, status.type === "error" ? styles.statusError : styles.statusSuccess)}>
                    {status.type === "error" ? (
                        <AlertTriangle size={18} style={{ display: 'inline', marginRight: 8 }} />
                    ) : (
                        <CheckCircle size={18} style={{ display: 'inline', marginRight: 8 }} />
                    )}
                    {status.message}
                </div>
            )}

            <div className={styles.workspace}>
                <div className={styles.pane}>
                    <div className={styles.paneHeader}>
                        <span>Input Text</span>
                        <span>{(new Blob([input]).size / 1024).toFixed(2)} KB</span>
                    </div>
                    <TextEditor value={input} onChange={(val) => setInput(val || "")} />
                </div>
                <div className={styles.pane}>
                    <div className={styles.paneHeader}>
                        <span>Hash Results</span>
                    </div>
                    <div className={styles.hashResults}>
                        {hashTypes.map((type) => {
                            const hashValue = hashes[type];
                            return (
                                <div key={type} className={styles.hashResult}>
                                    <div className={styles.hashLabel}>{type}</div>
                                    <div className={styles.hashValueContainer}>
                                        <div className={styles.hashValue}>{hashValue || "—"}</div>
                                        {hashValue && (
                                            <button
                                                className={styles.copyBtn}
                                                onClick={() => handleCopy(hashValue, type)}
                                                title={`Copy ${type} hash`}
                                            >
                                                <Copy size={16} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

