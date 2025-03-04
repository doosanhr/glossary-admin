const testData = [
  {
    id: 131,
    word: "IP",
    created_at: "2025-03-04T01:38:26.086678+00:00",
  },
  {
    id: 128,
    word: "A-B",
    created_at: "2025-03-04T01:38:26.086678+00:00",
  },
  {
    id: 129,
    word: "On",
    created_at: "2025-03-04T01:38:26.086678+00:00",
  },
  {
    id: 130,
    word: "Off",
    created_at: "2025-03-04T01:38:26.086678+00:00",
  },
  {
    id: 125,
    word: "EtherNet",
    created_at: "2025-03-04T01:38:26.086678+00:00",
  },
  {
    id: 126,
    word: "SDK",
    created_at: "2025-03-04T01:38:26.086678+00:00",
  },
  {
    id: 127,
    word: "QEP",
    created_at: "2025-03-04T01:38:26.086678+00:00",
  },
  {
    id: 124,
    word: "PROFINET",
    created_at: "2025-03-04T01:10:41.186968+00:00",
  },
  {
    id: 123,
    word: "DRL",
    created_at: "2025-03-04T01:10:30.982345+00:00",
  },
  {
    id: 122,
    word: "I/O",
    created_at: "2025-02-26T00:19:33.904145+00:00",
  },
  {
    id: 12,
    word: "TCP",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 13,
    word: "String",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 14,
    word: "Boolean",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 15,
    word: "Or",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 16,
    word: "And",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 17,
    word: "Dr.Dart-Platform",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 18,
    word: "Dr.Dart-Store",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 19,
    word: "Dr.Dart-OTA",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 20,
    word: "Dr.Dart-Forum",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 21,
    word: "forum.drdart.io",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 22,
    word: "Dr.Dart-Developers",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 23,
    word: "Dr.Dart-IDE",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 24,
    word: "Home",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 25,
    word: "Robot Parameter",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 26,
    word: "Remote Control",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 27,
    word: "TaskEditor",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 28,
    word: "Status",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 29,
    word: "Logs",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 30,
    word: "Store",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 31,
    word: "Settings",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 32,
    word: "Jog Plus",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 33,
    word: "Backdrive&Recovery",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 34,
    word: "3D Simulator",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 35,
    word: "Palletizer",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 36,
    word: "CodeEditor",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 37,
    word: "TCPServer",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 38,
    word: "TCPClient",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 39,
    word: "Serial",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 40,
    word: "ModbusTCP",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 41,
    word: "ModbusRTU",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 42,
    word: "Focas",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 43,
    word: "DigitalIO",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 44,
    word: "DIOGripper",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 45,
    word: "3D Vision",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 46,
    word: "2D Vision",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 47,
    word: "3D Jog",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 48,
    word: "DevTool",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 49,
    word: "SmartDetector",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 50,
    word: "Move",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 51,
    word: "Move J",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 52,
    word: "Move L",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 53,
    word: "Move C",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 54,
    word: "Move B",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 55,
    word: "Move SX",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 56,
    word: "Move SJ",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 57,
    word: "Move JX",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 58,
    word: "Move Spiral",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 59,
    word: "Move Periodic",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 60,
    word: "Stop Motion",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 61,
    word: "Wait Motion",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 62,
    word: "If",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 63,
    word: "Else If",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 64,
    word: "End If",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 65,
    word: "Refeat",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 66,
    word: "End Repeat",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 67,
    word: "Continue",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 68,
    word: "Sub",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 69,
    word: "Call Sub",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 70,
    word: "Sub Task",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 71,
    word: "End Sub Task",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 72,
    word: "Call Sub Task",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 73,
    word: "Break",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 74,
    word: "Exit",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 75,
    word: "Wait",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 76,
    word: "User Input",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 77,
    word: "Thread",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 78,
    word: "Run Thread",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 79,
    word: "Kill Thread",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 80,
    word: "Folder",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 81,
    word: "Global Variables",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 82,
    word: "Main Sub",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 83,
    word: "End Main Sub",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 84,
    word: "Comment",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 85,
    word: "Custom Code",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 86,
    word: "Define",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 87,
    word: "Popup",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 88,
    word: "Set",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 89,
    word: "Weight Measure",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 90,
    word: "Compliance",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 91,
    word: "Force",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 92,
    word: "Hand Guide",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 93,
    word: "Nudge",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 94,
    word: "True",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 95,
    word: "False",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 96,
    word: "Shoulder",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 97,
    word: "Elbow",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 98,
    word: "Wrist",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 99,
    word: "ERROR_CONNECTION",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 100,
    word: "ERROR_RECONNECTION",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 101,
    word: "ERROR_CONNECT_TIMEOUT",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 102,
    word: "Backdrive",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 103,
    word: "Recovery",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 104,
    word: "Discrete input",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 105,
    word: "Input register",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 106,
    word: "Coil",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 107,
    word: "Holding Register",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 108,
    word: "Multiple Coils for FC 15",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 109,
    word: "IP",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 110,
    word: "DI",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 111,
    word: "DO",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 112,
    word: "FDI",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 113,
    word: "FDO",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 114,
    word: "AI",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 2,
    word: "EULA",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 116,
    word: "FAI",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 117,
    word: "TCP Force",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 118,
    word: "Base",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 119,
    word: "N/A",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 120,
    word: "Machine",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 121,
    word: "Device",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 115,
    word: "AO",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 3,
    word: "Repeat",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 4,
    word: "Add Signal",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 5,
    word: "Get Signal",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 6,
    word: "Set Signal",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 7,
    word: "Delete Signal",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 8,
    word: "Int",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 9,
    word: "Float",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 10,
    word: "Integer",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
  {
    id: 11,
    word: "Modbus",
    created_at: "2025-02-17T06:25:45.500566+00:00",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const testAPI = async (): Promise<any[]> => {
  return new Promise((res) => {
    res(testData);
  });
};
