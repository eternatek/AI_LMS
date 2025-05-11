export const weeklyTopics = {
    Maths: [
      'Sets, Relations and Functions',
      'Complex Numbers and Quadratic Equations',
      'Matrices and Determinants',
      'Permutations and Combinations',
      'Binomial Theorem and its Simple Applications',
      'Sequences and Series',
      'Limit, Continuity and Differentiability',
      'Integral Calculus',
      'Differential Equations',
      'Co-ordinate Geometry',
      'Three Dimensional Geometry',
      'Vector Algebra',
      'Statistics and Probability',
      'Trigonometry',
      'Mathematical Reasoning'
    ],
    Physics: [
      'Physics and Measurement',
      'Kinematics',
      'Laws of Motion',
      'Work, Energy and Power',
      'Rotational Motion',
      'Gravitation',
      'Properties of Solids and Liquids',
      'Thermodynamics',
      'Kinetic Theory of Gases',
      'Oscillations and Waves',
      'Electrostatics',
      'Current Electricity',
      'Magnetic Effects of Current and Magnetism',
      'Electromagnetic Induction and Alternating Currents',
      'Electromagnetic Waves',
      'Optics',
      'Dual Nature of Matter and Radiation',
      'Atoms and Nuclei',
      'Electronic Devices'
    ],
    Chemistry: [
      // Physical Chemistry
      'Some Basic Concepts in Chemistry',
      'Atomic Structure',
      'Chemical Bonding and Molecular Structure',
      'States of Matter: Gases and Liquids',
      'Thermodynamics',
      'Equilibrium',
      'Redox Reactions',
      'Chemical Kinetics',
      'Surface Chemistry',
  
      // Inorganic Chemistry
      'Classification of Elements and Periodicity in Properties',
      'The s-Block Element',
      'The p-Block Element',
      'The d- and f-Block Elements',
      'Coordination Compounds',
      'Environmental Chemistry',
  
      // Organic Chemistry
      'Basic Principles of Organic Chemistry',
      'Hydrocarbons',
      'Haloalkanes and Haloarenes',
      'Alcohols, Phenols and Ethers',
      'Aldehydes, Ketones and Carboxylic Acids',
      'Organic Compounds Containing Nitrogen',
      'Biomolecules',
      'Polymers',
      'Chemistry in Everyday Life'
    ]
  };

  export const getWeeklyTopic = (topics) => {
    const currentWeek = Math.floor((new Date().getTime() / (1000 * 60 * 60 * 24 * 7)) % topics.length);
    return topics[currentWeek];
  };