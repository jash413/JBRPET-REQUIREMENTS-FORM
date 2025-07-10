import { FormSection } from '@/types/form';

export const formSections: FormSection[] = [
  {
    id: "system-configuration",
    title: "System Configuration",
    description:
      "Details about the Thermopack system setup and data capture methods.",
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
        label: "2. No. of Thermopack Units to Monitor:",
        type: "text",
        required: true,
        placeholder: "Enter number of units",
      },
      {
        id: "operating_hours",
        label: "3. Operating Hours:",
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
        placeholder:
          "Shift A: [start] to [end], Shift B: [start] to [end], Shift C: [start] to [end]",
      },
      {
        id: "data_capture_method",
        label: "5. How is data captured currently?",
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
        label: "6. Preferred Data Entry Mode:",
        type: "radio",
        required: true,
        options: [
          { value: "manual", label: "Manual entry" },
          { value: "automatic", label: "Automatic (Integration/API)" },
          { value: "both", label: "Both" },
        ],
      },
    ],
  },
  {
    id: "metrics-tracked",
    title: "Metrics to be Tracked",
    description:
      "Specify the key performance indicators and metrics for monitoring.",
    questions: [
      {
        id: "metrics_selection",
        label: "1. Which metrics should be tracked?",
        type: "multiselect",
        required: true,
        options: [
          {
            value: "temperature_monitoring",
            label: "Temperature Monitoring (e.g., Bed Temperature °C)",
          },
          { value: "pressure_monitoring", label: "Pressure Monitoring" },
          { value: "pump_fan_frequencies", label: "Pump & Fan Frequencies" },
          { value: "production_fuel", label: "Production & Fuel" },
          { value: "derived_metrics", label: "Derived Metrics" },
        ],
      },
      {
        id: "safety_alarms",
        label: "2. Safety & Alarm Conditions",
        type: "multiselect",
        required: false,
        options: [
          {
            value: "flame_failure",
            label: "Flame failure or low flame detection",
          },
          { value: "fuel_feed_interruption", label: "Fuel feed interruption" },
          {
            value: "emergency_shutdown",
            label: "Emergency shutdown trigger logs",
          },
        ],
      },
    ],
  },
  {
    id: "time-range-filtering",
    title: "Time Range & Filtering",
    description:
      "Define the time-based filtering and comparison options for the dashboard.",
    questions: [
      {
        id: "time_filters",
        label: "1. Which time filters should the dashboard support?",
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
        label: "2. Do you need shift-based data filtering?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "trend_comparison",
        label:
          "3. Do you want to compare two different time periods (trend comparison)?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "time_on_idle",
        label: "4. Would you like a 'Time-on' vs 'Idle Time' metric?",
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
    id: "users-roles",
    title: "Users & Roles",
    description: "Define the user roles and access control for the dashboard.",
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
        label: "2a. If yes, please describe access levels:",
        type: "textarea",
        required: false,
        placeholder: "Describe access levels for each role",
      },
      {
        id: "number_of_users",
        label: "3. No. of dashboard users:",
        type: "text",
        required: true,
        placeholder: "Enter number of users",
      },
    ],
  },
  {
    id: "output-preferences",
    title: "Output Preferences",
    description:
      "Specify the output formats and alert preferences for the dashboard.",
    questions: [
      {
        id: "output_formats",
        label: "1. What output formats are required?",
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
            label: "Multi-location Dashboard (if applicable)",
          },
        ],
      },
      {
        id: "anomaly_detection",
        label: "2. Do you want anomaly detection or critical value alerts?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "thresholds",
        label: "2a. If yes, please list the thresholds:",
        type: "textarea",
        required: false,
        placeholder:
          "Specify thresholds for anomaly detection or critical alerts",
      },
    ],
  },
  {
    id: "visualization-preferences",
    title: "Visualization Preferences",
    description:
      "Define the preferred visualization types and branding guidelines.",
    questions: [
      {
        id: "visual_types",
        label: "1. Preferred Visual Types:",
        type: "multiselect",
        required: true,
        options: [
          {
            value: "kpi_cards",
            label: "KPI Cards (e.g. Avg Stack Temp, Daily Load)",
          },
          { value: "line_charts", label: "Line Charts (Temp/Pressure trends)" },
          { value: "bar_graphs", label: "Bar Graphs (Fuel vs Load)" },
          {
            value: "heatmaps",
            label: "Heatmaps (Hourly bed temp or frequency)",
          },
          { value: "gauges", label: "Gauges (Fan speed, pressure)" },
          { value: "tables", label: "Tables (Raw logs)" },
        ],
      },
      {
        id: "color_brand_guidelines",
        label: "2. Color/Brand Guidelines (if any):",
        type: "textarea",
        required: false,
        placeholder: "Specify color schemes or branding guidelines",
      },
    ],
  },
  {
    id: "technical-details",
    title: "Technical Details",
    description:
      "Provide details about system integration and technical contacts.",
    questions: [
      {
        id: "system_integration",
        label: "1. Do you need integration with an existing system?",
        type: "radio",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "integration_type",
        label: "1a. If yes, which one:",
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
        label: "2. Do you have a sample file or data format (CSV, Excel, SQL)?",
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
        placeholder: "Name: [Enter name], Email/Phone: [Enter contact details]",
      },
    ],
  },
  {
    id: "additional-notes",
    title: "Additional Notes",
    description:
      "Provide any custom logic, formulas, or additional expectations.",
    questions: [
      {
        id: "custom_logic",
        label:
          "1. Please share any custom logic, formulas, or other expectations:",
        type: "textarea",
        required: false,
        placeholder:
          "Describe any custom logic, formulas, or other expectations",
      },
    ],
  },
];