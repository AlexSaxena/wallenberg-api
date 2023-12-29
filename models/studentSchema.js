const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    personal_number: {
      type: Number,
      required: true,
    },
    student_first_name: {
      type: String,
      required: true,
    },
    student_last_name: {
      type: String,
      required: true,
    },
    number_of_guardians: {
      type: Number,
      required: true,
      min: 1, // Ensure at least 1 guardian
      max: 2, // Allow at most 2 guardians
    },
    guardian_1_name: {
      type: String,
      required: true,
    },
    guardian_1_personal_number: {
      type: Number,
      required: true,
    },
    guardian_1_email: {
      type: String,
      required: true,
      match: /^\S+@\S+\.\S+$/, // Basic email validation
    },
    guardian_1_address: {
      type: String,
      required: true,
    },
    guardian_1_postal_code: {
      type: Number,
      required: true,
    },
    guardian_1_city: {
      type: String,
      required: true,
    },
    guardian_1_phone: {
      type: String,
      required: true,
    },
    // Optional guardian_2 fields
    guardian_2_name: {
      type: String,
    },
    guardian_2_personal_number: {
      type: Number,
    },
    guardian_2_email: {
      type: String,
      match: /^\S+@\S+\.\S+$/, // Basic email validation
    },
    guardian_2_address: {
      type: String,
    },
    guardian_2_postal_code: {
      type: Number,
    },
    guardian_2_city: {
      type: String,
    },
    guardian_2_phone: {
      type: String,
    },

    student_county: {
      type: String,
      enum: ["county1", "county2", "county3", "county4", "county5"],
    },
    school: {
      type: String,
      enum: [
        "bagartorp",
        "bromma",
        "järvastaden",
        "lidköping",
        "skövde",
        "uppsala",
      ],
      required: true,
    },
    grade: {
      type: String,
      required: true,
      enum: [
        "förskoleklass",
        "klass1",
        "klass2",
        "klass3",
        "klass4",
        "klass5",
        "klass6",
        "klass7",
        "klass8",
        "klass9",
      ],
    },

    fritids: {
      type: String,
      enum: ["JA", "NEJ"],
    },
    bvc: {
      type: String,
    },
    previous_school: {
      type: String,
    },
    previous_school_teacher: {
      type: String,
    },
    language_one: {
      type: String,
      enum: ["Spanska", "Tyska", "Franska", "Svenska"],
    },
    language_two: {
      type: String,
      enum: ["Spanska", "Tyska", "Franska", "Svenska"],
    },
    language_three: {
      type: String,
      enum: ["Spanska", "Tyska", "Franska", "Svenska"],
    },
    profile_one: {
      type: String,
      enum: ["Idrott", "Språk", "Äventyr", "Lek"],
    },
    profile_two: {
      type: String,
      enum: ["Idrott", "Språk", "Äventyr", "Lek"],
    },

    picture_school_catalogue: {
      type: String,
      enum: ["JA", "NEJ"],
    },
    image_published_internally: {
      type: String,
      enum: ["JA", "NEJ"],
    },
    image_published_externally: {
      type: String,
      enum: ["JA", "NEJ"],
    },
    native_language: {
      type: String,
      enum: ["JA", "NEJ"],
    },
    native_language_choice: {
      type: String,
      enum: ["Språk1", "Språk2"], // NEED TO CHECK WHAT LANGUAGES AVAILABLE
    },
    allergiesCheckbox: {
      type: Boolean,
    },
    allergyExplanation: {
      type: String,
    },
    computerContractCheckbox: {
      type: Boolean,
    },
    gdprConsentCheckbox: {
      type: Boolean,
    },

    // Income Declaration fields
    guardian_1_income: {
      name: {
        type: String,
      },
      personal_number: {
        type: String, // STRING formated "ÅÅÅÅMMDD-XXXX" in frontend Maybe check later
      },
      address: {
        type: String,
      },
      postal_code: {
        type: String,
      },
      phone: {
        type: String,
      },
      employer_school: {
        type: String,
      },
    },

    // Optional Income Declaration fields -> Guardian 2
    guardian_2_income: {
      name: {
        type: String,
      },
      personal_number: {
        type: String,
      },
      address: {
        type: String,
      },
      postal_code: {
        type: String,
      },
      phone: {
        type: String,
      },
      employer_school: {
        type: String,
      },
    },
    // HOUSEHOLD INCOME Yet to be implemented
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
