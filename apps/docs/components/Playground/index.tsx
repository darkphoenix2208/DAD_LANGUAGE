import React, { useState } from "react";
import interpreter from "dad-lang-interpreter";

interface PlaygroundProps { }

const Playground: React.FC<PlaygroundProps> = () => {
    const [code, setCode] = useState(`idhar aao
    jawab de "Hello from Dad Lang!";
    
    ye sambhal x = 10;
    ye sambhal y = 20;
    jawab de "Sum: " + (x + y);
jao padhai karo`);

    const [output, setOutput] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(false);

    const runCode = () => {
        setIsRunning(true);
        setOutput([]);

        // Capture console.log outputs
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args: any[]) => {
            logs.push(args.map(arg => String(arg)).join(" "));
        };

        try {
            interpreter.interpret(code);
            setOutput(logs);
        } catch (error: any) {
            setOutput([...logs, `❌ Error: ${error.message || String(error)}`]);
        } finally {
            console.log = originalLog;
            setIsRunning(false);
        }
    };

    return (
        <div className="playground-container" style={{
            backgroundColor: "#FFF9E6",
            border: "4px solid #C41E3A",
            borderRadius: "8px",
            padding: "24px",
            maxWidth: "1200px",
            margin: "40px auto",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}>
            <h2 style={{
                color: "#C41E3A",
                fontFamily: "monospace",
                fontSize: "28px",
                marginBottom: "16px",
                textAlign: "center"
            }}>
                📝 Dad Lang Playground
            </h2>

            <p style={{
                textAlign: "center",
                color: "#666",
                marginBottom: "24px",
                fontStyle: "italic"
            }}>
                &quot;Code likh, nahi to belt padegi!&quot; - Compiler
            </p>

            <div className="editor-section" style={{ marginBottom: "20px" }}>
                <label style={{
                    display: "block",
                    color: "#C41E3A",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    fontSize: "16px"
                }}>
                    Code Input:
                </label>
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    style={{
                        width: "100%",
                        minHeight: "300px",
                        fontFamily: "Consolas, Monaco, 'Courier New', monospace",
                        fontSize: "14px",
                        padding: "12px",
                        backgroundColor: "#FFFEF0",
                        border: "2px solid #C41E3A",
                        borderRadius: "4px",
                        color: "#333",
                        resize: "vertical"
                    }}
                    spellCheck={false}
                />
            </div>

            <button
                onClick={runCode}
                disabled={isRunning}
                style={{
                    backgroundColor: isRunning ? "#999" : "#C41E3A",
                    color: "white",
                    border: "none",
                    padding: "12px 32px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "4px",
                    cursor: isRunning ? "not-allowed" : "pointer",
                    marginBottom: "20px",
                    display: "block",
                    margin: "0 auto 20px"
                }}
            >
                {isRunning ? "⏳ Running..." : "▶️ Run Code"}
            </button>

            <div className="output-section">
                <label style={{
                    display: "block",
                    color: "#C41E3A",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    fontSize: "16px"
                }}>
                    Output Console:
                </label>
                <div style={{
                    backgroundColor: "#1E1E1E",
                    color: "#00FF00",
                    fontFamily: "Consolas, Monaco, 'Courier New', monospace",
                    fontSize: "14px",
                    padding: "16px",
                    minHeight: "200px",
                    maxHeight: "400px",
                    overflowY: "auto",
                    borderRadius: "4px",
                    border: "2px solid #C41E3A"
                }}>
                    {output.length === 0 ? (
                        <div style={{ color: "#666", fontStyle: "italic" }}>
                            Output will appear here...
                        </div>
                    ) : (
                        output.map((line, index) => (
                            <div key={index} style={{
                                marginBottom: "4px",
                                color: line.startsWith("❌") ? "#FF4444" : "#00FF00"
                            }}>
                                {`> ${line}`}
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div style={{
                marginTop: "20px",
                padding: "12px",
                backgroundColor: "#FFE6E6",
                border: "2px dashed #C41E3A",
                borderRadius: "4px"
            }}>
                <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                    <strong>💡 Tip:</strong> Try the example files from <code>examples/</code> folder:
                    fizzbuzz.belt, factorial.belt, or inheritance.belt
                </p>
            </div>
        </div>
    );
};

export default Playground;
