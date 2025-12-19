"use client";

import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";
import styles from "./TextEditor.module.css";
import { useTheme } from "./ThemeProvider";

interface TextEditorProps {
    value: string;
    onChange?: (value: string | undefined) => void;
    readOnly?: boolean;
    language?: string;
}

export default function TextEditor({ value, onChange, readOnly = false, language = "plaintext" }: TextEditorProps) {
    const monaco = useMonaco();
    const { theme } = useTheme();

    useEffect(() => {
        if (monaco) {
            // Dark theme defined exactly like in json-formatter
            monaco.editor.defineTheme("premium-dark", {
                base: "vs-dark",
                inherit: true,
                rules: [],
                colors: {
                    "editor.background": "#1e293b", // Slate 800
                    "editor.lineHighlightBackground": "#334155",
                    "editorCursor.foreground": "#6366f1",
                },
            });

            // Light theme defined exactly like in json-formatter
            monaco.editor.defineTheme("premium-light", {
                base: "vs",
                inherit: true,
                rules: [],
                colors: {
                    "editor.background": "#f8fafc", // Slate 50
                    "editor.lineHighlightBackground": "#e2e8f0",
                    "editorCursor.foreground": "#6366f1",
                },
            });

            monaco.editor.setTheme(theme === "dark" ? "premium-dark" : "premium-light");
        }
    }, [monaco, theme]);

    return (
        <div className={styles.editorContainer}>
            <Editor
                height="100%"
                defaultLanguage={language}
                value={value}
                onChange={onChange}
                theme={theme === "dark" ? "premium-dark" : "premium-light"}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: "on",
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    readOnly: readOnly,
                    formatOnPaste: false,
                    formatOnType: false,
                    fontFamily: "'JetBrains Mono', monospace",
                    wordWrap: "on",
                    lineDecorationsWidth: 10,
                    renderLineHighlight: "none",
                    scrollbar: {
                        vertical: "visible",
                        horizontal: "visible",
                        useShadows: false,
                        verticalHasArrows: false,
                        horizontalHasArrows: false,
                        verticalScrollbarSize: 10,
                        horizontalScrollbarSize: 10,
                    },
                }}
            />
        </div>
    );
}
