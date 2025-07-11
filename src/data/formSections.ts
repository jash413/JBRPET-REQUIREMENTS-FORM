import { FormSection } from "@/types/form";

export const formSections: FormSection[] = [
  {
    id: "system-overview",
    title: "System Overview",
    description: "Basic information about your Thermopack system setup.",
    questions: [
      {
        id: "thermopack_type",
        label: "1. What type of Thermopack system do you use?",
        type: "radio",
        required: true,
        options: [
          { value: "coal_fired", label: "Coal-fired" },
          { value: "oil_fired", label: "Oil-fired" },
          { value: "gas_fired", label: "Gas-fired" },
          { value: "electrical", label: "Electrical" },
          { value: "hybrid", label: "Hybrid" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "units_to_monitor",
        label: "2. How many Thermopack units need monitoring?",
        type: "text",
        required: true,
        placeholder: "Enter number of units",
      },
      {
        id: "operating_hours",
        label: "3. Operating Schedule:",
        type: "radio",
        required: true,
        options: [
          { value: "24_7", label: "24/7" },
          { value: "2_shifts", label: "2 Shifts" },
          { value: "3_shifts", label: "3 Shifts" },
          { value: "custom", label: "Custom" },
        ],
      },
      {
        id: "shift_timings",
        label: "4. Shift Timings (if applicable):",
        type: "text",
        required: false,
        placeholder: "Shift A: [start] to [end], Shift B: [start] to [end]",
      },
    ],
  },
  {
    id: "data-capture",
    title: "Data Capture & Entry",
    description:
      "Details about how Thermopack data is currently recorded and expected to be digitized.",
    questions: [
      {
        id: "data_capture_method",
        label: "1. How is data currently captured?",
        type: "radio",
        required: true,
        options: [
          { value: "paper_log_sheets", label: "Paper Log Sheets" },
          { value: "excel_file", label: "Excel File" },
          { value: "scada_plc", label: "SCADA / PLC System" },
          { value: "iot_cloud", label: "IoT / Cloud" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "data_entry_mode",
        label: "2. Preferred Mode of Data Entry:",
        type: "radio",
        required: true,
        options: [
          { value: "manual", label: "Manual entry" },
          { value: "automatic", label: "Automatic (Integration/API)" },
          { value: "both", label: "Both" },
        ],
      },
      {
        id: "historical_data_entry",
        label: "3. Do you plan to digitize historical log sheets?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },
  {
    id: "metrics-parameters",
    title: "Key Metrics & Parameters",
    description:
      "Define which Thermopack parameters and derived metrics must be monitored.",
    questions: [
      {
        id: "detailed_metrics_selection",
        label: "1. Select all Thermopack parameters to monitor:",
        type: "multiselect",
        required: true,
        options: [
          { value: "bed_pressure", label: "Bed Pressure" },
          { value: "oil_outlet_pressure", label: "Oil Outlet Pump Pressure" },
          { value: "oil_inlet_pressure", label: "Oil Inlet Pump Pressure" },
          {
            value: "delta_temp",
            label: "Delta / Differential Temperature (°C)",
          },
          {
            value: "circulation_pump_freq",
            label: "Circulation Pump Frequency (Hz)",
          },
          { value: "circuit_pressure", label: "Circuit Pressure" },
          { value: "id_fan_freq", label: "ID Fan Frequency (Hz)" },
          { value: "fd_fan_freq", label: "FD Fan Frequency (Hz)" },
          {
            value: "screw_feed_1_freq",
            label: "Screw Feeder 1 Frequency (Hz)",
          },
          {
            value: "screw_feed_2_freq",
            label: "Screw Feeder 2 Frequency (Hz)",
          },
          { value: "bed_temperature", label: "Bed Temperature (°C)" },
          { value: "flame_temperature", label: "Flame Temperature (°C)" },
          { value: "air_from_fd", label: "Air from FD (Temp or Flow)" },
          {
            value: "stack_temp_before_filter",
            label: "Stack Temp Before Bag Filter",
          },
          { value: "stack_temp_after_fan", label: "Stack Temp After ID Fan" },
        ],
      },
      {
        id: "metrics_selection",
        label: "2. Select additional performance indicators:",
        type: "multiselect",
        required: true,
        options: [
          { value: "temperature_monitoring", label: "Temperature Monitoring" },
          { value: "pressure_monitoring", label: "Pressure Monitoring" },
          { value: "pump_fan_frequencies", label: "Pump & Fan Frequencies" },
          { value: "production_fuel", label: "Production & Fuel" },
          {
            value: "derived_metrics",
            label: "Derived Metrics (e.g. Efficiency)",
          },
        ],
      },
      {
        id: "coal_consumption_tracking",
        label: "3. Track fuel consumption (e.g., coal usage)?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "daily_load_monitoring",
        label: "4. Track daily thermal load output?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },
  {
    id: "alerts-alarms",
    title: "Alerts & Alarm Triggers",
    description:
      "Configure conditions that should trigger alerts or safety mechanisms.",
    questions: [
      {
        id: "stack_temp_alerts",
        label: "1. Trigger alerts for high stack temperatures?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "safety_alarms",
        label: "2. Safety conditions to track:",
        type: "multiselect",
        required: false,
        options: [
          { value: "flame_failure", label: "Flame Failure" },
          { value: "fuel_feed_interruption", label: "Fuel Feed Interruption" },
          { value: "emergency_shutdown", label: "Emergency Shutdown" },
        ],
      },
      {
        id: "anomaly_detection",
        label: "3. Require anomaly detection or threshold alerts?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "thresholds",
        label: "3a. Specify thresholds for critical alerts (if any):",
        type: "textarea",
        required: false,
        placeholder: "Enter thresholds for alerts",
      },
    ],
  },
  {
    id: "time-filters",
    title: "Time Range & Filtering",
    description:
      "Time-based filters, shift filters, and performance comparisons.",
    questions: [
      {
        id: "time_filters",
        label: "1. Which time filters should be available?",
        type: "multiselect",
        required: true,
        options: [
          { value: "today", label: "Today" },
          { value: "yesterday", label: "Yesterday" },
          { value: "last_7_days", label: "Last 7 Days" },
          { value: "this_month", label: "This Month" },
          { value: "custom_date_range", label: "Custom Date Range" },
        ],
      },
      {
        id: "shift_based_filtering",
        label: "2. Enable shift-based data filtering?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "trend_comparison",
        label: "3. Support time-based trend comparison?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "time_on_idle",
        label: "4. Track 'Time-on' vs 'Idle Time'?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },
  {
    id: "visualization-output",
    title: "Visualization & Output Preferences",
    description: "Define how you want to see the data and receive outputs.",
    questions: [
      {
        id: "visual_types",
        label: "1. Preferred Visualization Types:",
        type: "multiselect",
        required: true,
        options: [
          { value: "kpi_cards", label: "KPI Cards" },
          { value: "line_charts", label: "Line Charts" },
          { value: "bar_graphs", label: "Bar Graphs" },
          { value: "heatmaps", label: "Heatmaps" },
          { value: "gauges", label: "Gauges" },
          { value: "tables", label: "Tables" },
        ],
      },
      {
        id: "output_formats",
        label: "2. Required Output Formats:",
        type: "multiselect",
        required: true,
        options: [
          { value: "alerts_notifications", label: "Alerts / Notifications" },
          { value: "pdf_excel_export", label: "PDF / Excel Export" },
          { value: "email_report_delivery", label: "Email Report Delivery" },
          {
            value: "printable_report_layouts",
            label: "Printable Report Layouts",
          },
          {
            value: "multi_location_dashboard",
            label: "Multi-location Dashboard",
          },
        ],
      },
      {
        id: "color_brand_guidelines",
        label: "3. Color/Brand Guidelines (if any):",
        type: "textarea",
        required: false,
        placeholder: "Enter color schemes or brand requirements",
      },
    ],
  },
  {
    id: "users-access",
    title: "Users & Access Control",
    description:
      "User roles and access management for the Thermopack dashboard.",
    questions: [
      {
        id: "dashboard_users",
        label: "1. Who will use the dashboard?",
        type: "multiselect",
        required: true,
        options: [
          { value: "operator", label: "Operator" },
          { value: "supervisor", label: "Supervisor" },
          { value: "maintenance", label: "Maintenance" },
          { value: "plant_manager", label: "Plant Manager" },
          { value: "top_management", label: "Top Management" },
        ],
      },
      {
        id: "role_based_access",
        label: "2. Do you need role-based access control?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "access_levels",
        label: "2a. If yes, define access levels per role:",
        type: "textarea",
        required: false,
        placeholder: "Describe access levels for each role",
      },
      {
        id: "number_of_users",
        label: "3. Number of dashboard users:",
        type: "text",
        required: true,
        placeholder: "Enter total number of users",
      },
    ],
  },
  {
    id: "integration-technical",
    title: "System Integration & Technical Setup",
    description: "Integration points, data formats, and technical contacts.",
    questions: [
      {
        id: "system_integration",
        label: "1. Do you require integration with existing systems?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "integration_type",
        label: "1a. If yes, which systems?",
        type: "multiselect",
        required: false,
        options: [
          { value: "scada", label: "SCADA" },
          { value: "erp", label: "ERP" },
          { value: "local_database", label: "Local Database" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "sample_data_format",
        label: "2. Do you have sample data files (CSV, Excel, SQL)?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes (please share)" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "it_contact",
        label: "3. IT/Automation Contact Person:",
        type: "text",
        required: false,
        placeholder: "Name, Email/Phone",
      },
    ],
  },
  {
    id: "additional-requirements",
    title: "Additional Requirements",
    description: "Any custom logic, formulas, or expectations to consider.",
    questions: [
      {
        id: "custom_logic",
        label: "1. Share any custom logic, calculations, or formulas:",
        type: "textarea",
        required: false,
        placeholder: "Describe additional logic or KPIs",
      },
    ],
  },
];
