const PANEL_CODES = {
    "VALVE_OPENLOAD": {
        "summary": "Open load (missing valve)",
        "description": "The valve appears to have been disconnected or removed from the panel.",
        "recommendations": []
    },
    "VALVE_OVERVOLT": {
        "summary": "Overvoltage (possible short)",
        "description": "The valve appears to have partially or completely shorted.",
        "recommendations": [
            "Examine the panel for evidence for physical damage or excess moisture.",
            "Drain the panel's air regulator water trap."
        ]
    }
};
const GATEWAY_CODES = {
    "GATEWAY_DISCONNECT_FRESH": {
        "summary": "Alfred Gateway Disconnected",
        "description": `The Alfred Gateway is down and has been for TIME_PERIOD. This can happen when the network is down or being worked on and will often recover on its own.`,
        "recommendations": [
            "If this persists and you believe the network is working, please power cycle the gateway."
        ]
    },
    "GATEWAY_DISCONNECT_STALE": {
        "summary": "Alfred Gateway Disconnected",
        "description": `The Alfred Gateway remains down and has been for TIME_PERIOD. If this goes on too long, there could be some data loss.`,
        "recommendations": [
            "Please power cycle the gateway.",
            "If this persists and you believe the network is working, please contact Hydra-Flex support."
        ]
    },
    "GATEWAY_RECONNECTED": {
        "summary": "Alfred Gateway Has Recovered",
        "description": `The Alfred Gateway has reconnected.`,
        "recommendations": []
    }
};
const GRUNDFOS_CODES = {
    "sources": [
        "MLE type J Alarm codes.pdf"
    ],
    "3": {
        "summary": "External fault",
        "description": "An external signal has reported an 'External fault' to the digital input set up for this function.",
        "recommendations": ["Check the parameter or the unit reporting the external fault. Correct the fault."]
    },
    "4": {
        "summary": "Too many restarts",
        "description": "The pump has restarted to many times in connection with a fault that forced the pump to stop and restart automatically.",
        "recommendations": [
            "Check the warning and alarm log for faults that caused to many restarts.",
            "Replace the pump if the fault cannot be found."
        ]
    },
    "32": {
        "summary": "Overvoltage",
        "description": "Supply voltage to the pump too high.",
        "recommendations": ["Check that the power supply is within the specified range."]
    },
    "40": {
        "summary": "Undervoltage",
        "description": "Supply voltage to the pump too low.",
        "recommendations": ["Check that the power supply is within the specified range."]
    },
    "49": {
        "summary": "Overload",
        "description": "The motor is overloaded and has automatically reduced the speed and thus the pump performance.",
        "recommendations": [
            "Check that the viscosity and temperature of the pump liquid is within the limits for the pump. If not, change the properties of the liquid.",
            "Dismantle the pump, and remove any foreign matter or impurities preventing the pump from rotating.",
            "If none of the above causes are present, replace the pump."
        ]
    },
    "51": {
        "summary": "Blocked pump",
        "description": "The pump is blocked.",
        "recommendations": ["Dismantle the pump, and remove any foreign matter or impurities preventing the pump from rotating."]
    },
    "10": {
        "summary": "Pump communication fault",
        "description": "Communication fault between this pump and the other pumps of the multipump system.",
        "recommendations": ["Check that all pumps of the multipump system have been correctly set up."]
    },
    "29": {
        "summary": "Forced pumping",
        "description": "Other pumps or sources force flow through the pump even if the pump is stopped.",
        "recommendations": ["Check the system for defective non-return valves and replace, if necessary. Check the system for correct position of non-return valves, etc."]
    },
    "56": {
        "summary": "Dry running (56)",
        "description": "No water at the pump inlet or the water contains too much air.",
        "recommendations": ["Prime and vent the pump before a new start-up. Check that the pump is operating correctly. If not, replace the pump."]
    },
    "57": {
        "summary": "Dry running (57)",
        "description": "No water at the pump inlet or the water contains too much air.",
        "recommendations": ["Prime and vent the pump before a new start-up. Check that the pump is operating correctly. If not, replace the pump."]
    },
    "72": {
        "summary": "Internal fault (72)",
        "description": "Internal fault in the pump electronics.",
        "recommendations": ["Replace the functional module, power module or terminal box."]
    },
    "83": {
        "summary": "Internal fault (83)",
        "description": "Internal fault in the pump electronics.",
        "recommendations": ["Replace the functional module, power module or terminal box."]
    },
    "85": {
        "summary": "Internal fault (85)",
        "description": "Internal fault in the pump electronics.",
        "recommendations": ["Replace the functional module, power module or terminal box."]
    },
    "155": {
        "summary": "Internal fault (155)",
        "description": "Internal fault in the pump electronics.",
        "recommendations": ["Replace the functional module, power module or terminal box."]
    },
    "163": {
        "summary": "Internal fault (163)",
        "description": "Internal fault in the pump electronics.",
        "recommendations": ["Replace the functional module, power module or terminal box."]
    },
    "65": {
        "summary": "High motor temperature (65)",
        "description": "The motor temperature is too high.",
        "recommendations": [
            "Check that the ambient temperature is within the specified range.",
            "Check that the pump is not covered by dust, dirt or other foreign matter which reduces the air cooling of the pump.",
            "If none of the above causes are present, replace the motor."
        ]
    },
    "66": {
        "summary": "High control electronics temperature (66)",
        "description": "The motor temperature is too high.",
        "recommendations": [
            "Check that the ambient temperature is within the specified range.",
            "Check that the pump is not covered by dust, dirt or other foreign matter which reduces the air cooling of the pump.",
            "If none of the above causes are present, replace the motor."
        ]
    },
    "76": {
        "summary": "Internal communication fault",
        "description": "Communication fault between different parts of the electronics",
        "recommendations": ["Replace the terminal box."]
    },
    "215": {
        "summary": "Soft pressure buildup timeout",
        "description": "The system has been in the mode 'soft pressure buildup' longer than the set time limit.",
        "recommendations": ["Check the system for leakages"]
    },
    "30": {
        "summary": "Change bearings (specific service information)",
        "description": "The bearings must be replaced.",
        "recommendations": ["Follow the instructions for the pump. See section 7.12 Replacing the bearings (MGE 100 and below)."]
    },
    "88": {
        "summary": "Internal sensor fault",
        "description": "The pump is receiving a signal from the internal sensor which is outside the normal range.",
        "recommendations": [
            "Check that the plug and cable are connected correctly to the sensor. The sensor is on the back of the pump housing.",
            "Replace the sensor."
        ]
    },
    "91": {
        "summary": "Signal fault, temperature sensor 1",
        "description": "Pt100/1000 input 1 is receiving a signal which is outside the normal range.",
        "recommendations": []
    },
    "175": {
        "summary": "Signal fault, temperature sensoor 2",
        "description": "Pt100/1000 input 2 is receiving a signal which is outside the normal range.",
        "recommendations": [
            "Check that the sensor resistance corresponds to approximately 100 or 1000 ohm. If not, replace the sensor.",
            "Check the sensor cable for damage.",
            "Check the cable connection at the pump and at the sensor. Correct the connection, if required.",
            "Replace the sensor."
        ]
    },
    "161": {
        "summary": "Sensor supply fault, 5 V",
        "description": "Fault in the output voltage to sensor or potentiometer.",
        "recommendations": ["Check the output voltage and wire to sensor or potentiometer."]
    },
    "162": {
        "summary": "Sensor supply fault, 24 V",
        "description": "Fault in the output voltage.",
        "recommendations": ["Check the output voltage and wire."]
    },
    "164": {
        "summary": "Signal fault, Liqtec sensor",
        "description": "The pump is receiving a signal from the LiqTec sensor which is outside the normal range.",
        "recommendations": [
            "Check that the plug and cable are connected correctly to the sensor.",
            "Replace the sensor."
        ]
    },
    "165": {
        "summary": "Signal fault, analog input 1",
        "description": "Analog input 1 is receiving a signal which is outside the normal range.",
        "recommendations": [
            "Check that the setup of the analog input corresponds to the sensor output as regards electrical characteristics (0.5 - 3.5 V, 0-5 V, 0-10 V, 0-20 mA or 4-20 mA). If not, change the setting, or replace the sensor with one that matches the setup.",
            "Check the sensor cable for damage.",
            "Check the cable connection at the pump and at the sensor. Correct the connection, if required.",
            "Check if the sensor has been removed, but the input was not deactivated.",
            "Replace the sensor."
        ]
    },
    "166": {
        "summary": "Signal fault, analog input 2",
        "description": "Analog input 2 is receiving a signal which is outside the normal range.",
        "recommendations": [
            "Check that the setup of the analog input corresponds to the sensor output as regards electrical characteristics (0.5 - 3.5 V, 0-5 V, 0-10 V, 0-20 mA or 4-20 mA). If not, change the setting, or replace the sensor with one that matches the setup.",
            "Check the sensor cable for damage.",
            "Check the cable connection at the pump and at the sensor. Correct the connection, if required.",
            "Check if the sensor has been removed, but the input was not deactivated.",
            "Replace the sensor."
        ]
    },
    "167": {
        "summary": "Signal fault, analog input 3",
        "description": "Analog input 3 is receiving a signal which is outside the normal range.",
        "recommendations": [
            "Check that the setup of the analog input corresponds to the sensor output as regards electrical characteristics (0.5 - 3.5 V, 0-5 V, 0-10 V, 0-20 mA or 4-20 mA). If not, change the setting, or replace the sensor with one that matches the setup.",
            "Check the sensor cable for damage.",
            "Check the cable connection at the pump and at the sensor. Correct the connection, if required.",
            "Check if the sensor has been removed, but the input was not deactivated.",
            "Replace the sensor."
        ]
    },
    "190": {
        "summary": "Limit exceeded, sensor 1",
        "description": "Limit 1 has reached the limit for warning/alarm.",
        "recommendations": ["Identify and remove the fault cause."]
    },
    "191": {
        "summary": "Limit exceeded, sensor 2",
        "description": "Limit 2 has reached the limit for warning/alarm.",
        "recommendations": ["Identify and remove the fault cause."]
    }
};

export default function(alert_enum) {
    const all = {...PANEL_CODES, ...GATEWAY_CODES, ...GRUNDFOS_CODES };
    return all[alert_enum] || { summary: "Unknown", description: "An unknown alert has been triggered" }
};