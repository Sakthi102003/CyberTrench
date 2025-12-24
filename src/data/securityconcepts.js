
export const mlConcepts = [
  {
    id: 'cia-triad',
    name: 'CIA Triad',
    depth: 0,
    description: 'Confidentiality, Integrity, and Availability as the core pillars of information security.',
    category: 'fundamentals',
    size: 'large',
    link: 'https://en.wikipedia.org/wiki/Information_security#Key_concepts'
  },
  {
    id: 'attack-surface',
    name: 'The Attack Surface',
    depth: 200,
    description: 'The sum of all points where an unauthorized user can try to enter data to or extract data from an environment.',
    category: 'fundamentals',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Attack_surface'
  },
  {
    id: 'least-privilege',
    name: 'Principle of Least Privilege',
    depth: 400,
    description: 'Entities should only have access to the specific resources needed to complete a required task.',
    category: 'fundamentals',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Principle_of_least_privilege'
  },
  {
    id: 'defense-in-depth',
    name: 'Defense in Depth',
    depth: 600,
    description: 'A layered defense strategy that uses multiple security measures to protect information.',
    category: 'fundamentals',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Defense_in_depth_(computing)'
  },
  {
    id: 'auth-factors',
    name: 'Authentication Factors',
    depth: 800,
    description: 'Verification methods based on knowledge (password), possession (token), or inherence (biometrics).',
    category: 'identity',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Authentication#Factors_of_authentication'
  },
  {
    id: 'network-segmentation',
    name: 'Network Segmentation',
    depth: 1000,
    description: 'Splitting a computer network into subnetworks to improve performance and security isolation.',
    category: 'networking',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Network_segmentation'
  },
  {
    id: 'acls',
    name: 'Access Control Lists',
    depth: 1200,
    description: 'A list of permissions attached to an object specifying which users or processes are granted access.',
    category: 'identity',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Access-control_list'
  },
  {
    id: 'non-repudiation',
    name: 'Non-Repudiation',
    depth: 1400,
    description: 'Assurance that the sender of information is provided with proof of delivery and the recipient is provided with proof of the sender\'s identity.',
    category: 'identity',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Non-repudiation'
  },
  {
    id: 'symmetric-crypto',
    name: 'Symmetric Cryptography',
    depth: 1600,
    description: 'Encryption where the same key is used for both encryption and decryption.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Symmetric-key_algorithm'
  },
  {
    id: 'diffie-hellman',
    name: 'Diffie-Hellman Key Exchange',
    depth: 1800,
    description: 'A method of securely exchanging cryptographic keys over a public channel.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange'
  },
  {
    id: 'pki',
    name: 'Public Key Infrastructure',
    depth: 2000,
    description: 'Roles, policies, and procedures to manage digital certificates and public-key encryption.',
    category: 'cryptography',
    size: 'large',
    link: 'https://en.wikipedia.org/wiki/Public_key_infrastructure'
  },
  {
    id: 'digital-signatures',
    name: 'Digital Signatures',
    depth: 2200,
    description: 'A mathematical scheme for verifying the authenticity of digital messages or documents.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Digital_signature'
  },
  {
    id: 'side-channel',
    name: 'Side-Channel Analysis',
    depth: 2500,
    description: 'Attacks based on information gained from the implementation of a computer system, rather than weaknesses in the implemented algorithm itself.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Side-channel_attack'
  },
  {
    id: 'entropy',
    name: 'Entropy (Information Theory)',
    depth: 2800,
    description: 'A measure of the uncertainty or randomness associated with a random variable, crucial for key generation.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Entropy_(information_theory)'
  },
  {
    id: 'hashing',
    name: 'Cryptographic Hash Functions',
    depth: 3000,
    description: 'Mathematical algorithms that map data of arbitrary size to a bit string of a fixed size.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Cryptographic_hash_function'
  },
  {
    id: 'ecc',
    name: 'Elliptic Curve Cryptography',
    depth: 3500,
    description: 'Public-key cryptography based on the algebraic structure of elliptic curves over finite fields.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Elliptic-curve_cryptography'
  },
  {
    id: 'pfs',
    name: 'Perfect Forward Secrecy',
    depth: 3800,
    description: 'A property of secure communication protocols where compromises of long-term keys do not compromise past session keys.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Forward_secrecy'
  },
  {
    id: 'protection-rings',
    name: 'Protection Rings',
    depth: 4000,
    description: 'Hierarchical protection domains for privilege separation in operating systems.',
    category: 'systems',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Protection_ring'
  },
  {
    id: 'reference-monitor',
    name: 'Reference Monitor',
    depth: 4200,
    description: 'An access control concept of an abstract machine that mediates all access to objects by subjects.',
    category: 'systems',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Reference_monitor'
  },
  {
    id: 'tcb',
    name: 'Trusted Computing Base',
    depth: 4500,
    description: 'The set of all hardware, firmware, and/or software components that are critical to its security.',
    category: 'systems',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Trusted_computing_base'
  },
  {
    id: 'capability-security',
    name: 'Capability-based Security',
    depth: 4800,
    description: 'A concept in the design of secure computing systems where access is granted via unforgeable tokens of authority.',
    category: 'systems',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Capability-based_security'
  },
  {
    id: 'memory-safety',
    name: 'Memory Safety',
    depth: 5000,
    description: 'Preventing software bugs that allow access to memory that should not be accessed.',
    category: 'systems',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Memory_safety'
  },
  {
    id: 'aslr',
    name: 'ASLR',
    depth: 5500,
    description: 'Address Space Layout Randomization randomly arranges the address space positions of key data areas of a process.',
    category: 'systems',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Address_space_layout_randomization'
  },
  {
    id: 'tee',
    name: 'Trusted Execution Environment',
    depth: 5800,
    description: 'A secure area of a main processor that guarantees code and data loaded inside to be protected with respect to confidentiality and integrity.',
    category: 'systems',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Trusted_execution_environment'
  },
  {
    id: 'clark-wilson',
    name: 'Clark-Wilson Model',
    depth: 6000,
    description: 'A security model that provides a foundation for specifying and analyzing an integrity policy for a computing system.',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Clark%E2%80%93Wilson_model'
  },
  {
    id: 'chinese-wall',
    name: 'Brewer and Nash (Chinese Wall)',
    depth: 6200,
    description: 'A security model designed to provide access controls that change dynamically based on a user\'s previous actions to prevent conflicts of interest.',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Brewer_and_Nash_model'
  },
  {
    id: 'bell-lapadula',
    name: 'Bell-LaPadula Model',
    depth: 6500,
    description: 'A state machine model used for enforcing access control in government and military applications (No Read Up, No Write Down).',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Bell%E2%80%93LaPadula_model'
  },
  {
    id: 'graham-denning',
    name: 'Graham-Denning Model',
    depth: 6800,
    description: 'A computer security model that shows how subjects and objects should be securely created and deleted.',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Graham%E2%80%93Denning_model'
  },
  {
    id: 'mac',
    name: 'Mandatory Access Control',
    depth: 7000,
    description: 'Access policy determined by the system administrator, not the resource owner.',
    category: 'identity',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Mandatory_access_control'
  },
  {
    id: 'hru',
    name: 'Harrison-Ruzzo-Ullman Model',
    depth: 7200,
    description: 'A model dealing with the integrity of access rights in a system, showing that the safety problem is undecidable in general.',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/HRU_security_model'
  },
  {
    id: 'biba',
    name: 'Biba Integrity Model',
    depth: 7500,
    description: 'A formal state transition system of computer security policy that describes a set of access control rules designed to ensure data integrity.',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Biba_Model'
  },
  {
    id: 'take-grant',
    name: 'Take-Grant Protection Model',
    depth: 7800,
    description: 'A formal model used to analyze specific protection systems to determine if access rights can be passed from one subject to another.',
    category: 'architecture',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Take-grant_protection_model'
  },
  {
    id: 'moving-target',
    name: 'Moving Target Defense',
    depth: 8000,
    description: 'A strategy to control change across multiple system dimensions to increase uncertainty and complexity for attackers.',
    category: 'operations',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Proactive_cyber_defence'
  },
  {
    id: 'chaos-engineering',
    name: 'Security Chaos Engineering',
    depth: 8200,
    description: 'Proactive experimentation on a system to build confidence in its capability to withstand turbulent conditions and attacks.',
    category: 'operations',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Chaos_engineering'
  },
  {
    id: 'byzantine',
    name: 'Byzantine Fault Tolerance',
    depth: 8500,
    description: 'The dependability of a fault-tolerant computer system, particularly distributed computing systems, where components may fail and there is imperfect information.',
    category: 'operations',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Byzantine_fault'
  },
  {
    id: 'ids-theory',
    name: 'Anomaly Detection Theory',
    depth: 8800,
    description: 'Theoretical foundations of identifying rare items, events or observations which raise suspicions by differing significantly from the majority of the data.',
    category: 'operations',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Anomaly_detection'
  },
  {
    id: 'sybil',
    name: 'Sybil Resistance',
    depth: 9000,
    description: 'Defending against attacks where a single adversary controls multiple distinct identities.',
    category: 'operations',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Sybil_attack'
  },
  {
    id: 'forensics',
    name: 'Digital Forensics',
    depth: 9200,
    description: 'The recovery and investigation of material found in digital devices, often in relation to computer crime.',
    category: 'operations',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Digital_forensics'
  },
  {
    id: 'covert-channels',
    name: 'Covert Channels',
    depth: 9500,
    description: 'Communication channels that transfer information between processes that are not supposed to be allowed to communicate.',
    category: 'operations',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Covert_channel'
  },
  {
    id: 'steganography',
    name: 'Steganography',
    depth: 9800,
    description: 'The practice of concealing a message, image, or file within another message, image, or file.',
    category: 'operations',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Steganography'
  },
  {
    id: 'zero-trust',
    name: 'Zero Trust Architecture',
    depth: 10000,
    description: 'A security model that requires strict identity verification for every person and device.',
    category: 'architecture',
    size: 'large',
    link: 'https://en.wikipedia.org/wiki/Zero_trust_security_model'
  },
  {
    id: 'root-of-trust',
    name: 'Hardware Root of Trust',
    depth: 10200,
    description: 'A set of functions in the trusted computing module that is always trusted by the computer\'s operating system (OS).',
    category: 'advanced-trust',
    size: 'medium',
    link: 'https://www.synopsys.com/blogs/chip-design/hardware-root-of-trust-security.html'
  },
  {
    id: 'oram',
    name: 'Oblivious RAM',
    depth: 10500,
    description: 'A cryptographic primitive that allows a client to access data on a server without revealing the access pattern.',
    category: 'advanced-trust',
    size: 'medium',
    link: 'https://dspace.mit.edu/handle/1721.1/105668'
  },
  {
    id: 'pir',
    name: 'Private Information Retrieval',
    depth: 10800,
    description: 'Protocols that allow a user to retrieve an item from a server in possession of a database without revealing which item is retrieved.',
    category: 'advanced-trust',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Private_information_retrieval'
  },
  {
    id: 'differential-privacy',
    name: 'Differential Privacy',
    depth: 11000,
    description: 'A system for publicly sharing information about a dataset by describing the patterns of groups within the dataset while withholding information about individuals in the dataset.',
    category: 'advanced-trust',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Differential_privacy'
  },
  {
    id: 'k-anonymity',
    name: 'K-Anonymity',
    depth: 11200,
    description: 'A property of data anonymization where information for each person cannot be distinguished from at least k-1 other individuals.',
    category: 'advanced-trust',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/K-anonymity'
  },
  {
    id: 'post-quantum',
    name: 'Post-Quantum Cryptography',
    depth: 11500,
    description: 'Cryptographic algorithms that are thought to be secure against an attack by a quantum computer.',
    category: 'advanced-trust',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Post-quantum_cryptography'
  },
  {
    id: 'ring-signatures',
    name: 'Ring Signatures',
    depth: 11800,
    description: 'A type of digital signature that can be performed by any member of a group of users that each have keys, without revealing which member signed it.',
    category: 'advanced-trust',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Ring_signature'
  },
  {
    id: 'homomorphic',
    name: 'Homomorphic Encryption',
    depth: 12000,
    description: 'Encryption that permits users to perform computations on encrypted data without decrypting it.',
    category: 'cryptography',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Homomorphic_encryption'
  },
  {
    id: 'lattice-crypto',
    name: 'Lattice-based Cryptography',
    depth: 12500,
    description: 'Cryptographic primitives that involve lattices, often used for post-quantum security proofs.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Lattice-based_cryptography'
  },
  {
    id: 'vdf',
    name: 'Verifiable Delay Functions',
    depth: 12800,
    description: 'Functions that require a specified amount of sequential time to evaluate, but can be quickly verified.',
    category: 'theory',
    size: 'medium',
    link: 'https://blog.trailofbits.com/2018/10/12/introduction-to-verifiable-delay-functions-vdfs/'
  },
  {
    id: 'smpc',
    name: 'Secure Multi-Party Computation',
    depth: 13000,
    description: 'Methods for parties to jointly compute a function over their inputs while keeping those inputs private.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Secure_multi-party_computation'
  },
  {
    id: 'witness-encryption',
    name: 'Witness Encryption',
    depth: 13200,
    description: 'Encryption where a ciphertext can be decrypted by anyone who knows a witness to a specific NP relation.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Indistinguishability_obfuscation#Potential_applications'
  },
  {
    id: 'io',
    name: 'Indistinguishability Obfuscation',
    depth: 13500,
    description: 'A cryptographic primitive that makes a program unintelligible while preserving its functionality, such that any two programs with the same functionality are indistinguishable.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Indistinguishability_obfuscation'
  },
  {
    id: 'functional-encryption',
    name: 'Functional Encryption',
    depth: 13800,
    description: 'A system where possessing a secret key allows one to learn a function of the encrypted data, but nothing else.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Functional_encryption'
  },
  {
    id: 'formal-verification',
    name: 'Formal Verification',
    depth: 14000,
    description: 'Proving the correctness of algorithms underlying a system using formal methods of mathematics.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Formal_verification'
  },
  {
    id: 'leakage-resilient',
    name: 'Leakage-Resilient Cryptography',
    depth: 14200,
    description: 'Designing cryptographic primitives that remain secure even if the attacker learns some information about the internal state (side-channels).',
    category: 'theory',
    size: 'medium',
    link: 'https://www.researchgate.net/publication/266531126_Leakage-Resilient_Symmetric_Cryptography_under_Empirically_Verifiable_Assumptions'
  },
  {
    id: 'qkd',
    name: 'Quantum Key Distribution',
    depth: 14500,
    description: 'A secure communication method which implements a cryptographic protocol involving components of quantum mechanics.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Quantum_key_distribution'
  },
  {
    id: 'honey-encryption',
    name: 'Honey Encryption',
    depth: 14800,
    description: 'Encryption that yields plausible-looking but incorrect plaintext when decrypted with an incorrect key, making brute-force impossible to verify.',
    category: 'theory',
    size: 'medium',
    link: 'https://medium.com/smucs/honey-encryption-e56737af081c'
  },
  {
    id: 'zkp',
    name: 'Zero-Knowledge Proofs',
    depth: 15000,
    description: 'A method by which one party (the prover) can prove to another party (the verifier) that they know a value x, without conveying any information apart from the fact that they know the value x.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Zero-knowledge_proof'
  },
  {
    id: 'quantum-money',
    name: 'Quantum Money',
    depth: 15200,
    description: 'A theoretical form of currency that uses the no-cloning theorem of quantum mechanics to prevent forgery.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Quantum_money'
  },
  {
    id: 'uc',
    name: 'Universal Composability',
    depth: 15500,
    description: 'A framework for defining the security of cryptographic protocols so that they remain secure even when run concurrently with other protocols.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Universal_composability'
  },
  {
    id: 'one-time-programs',
    name: 'One-Time Programs',
    depth: 15800,
    description: 'Programs that can be executed exactly once and then self-destruct or become useless, theoretically achievable with quantum hardware.',
    category: 'theory',
    size: 'medium',
    link: 'https://blog.cryptographyengineering.com/2022/10/27/one-time-programs/'
  },
  {
    id: 'info-theoretic',
    name: 'Information-Theoretic Security',
    depth: 16000,
    description: 'Security derived from information theory, unbreakable even with unlimited computing power.',
    category: 'theory',
    size: 'large',
    link: 'https://en.wikipedia.org/wiki/Information-theoretic_security'
  },
  {
    id: 'relativistic-crypto',
    name: 'Relativistic Cryptography',
    depth: 16200,
    description: 'Cryptographic protocols that rely on the speed of light limit (no-signaling principle) to guarantee security.',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Relativistic_quantum_cryptography'
  },
  {
    id: 'black-box-obfuscation',
    name: 'Black-Box Obfuscation',
    depth: 16400,
    description: 'The strongest form of program obfuscation where the code is completely unintelligible (proven impossible for general circuits, but the holy grail).',
    category: 'theory',
    size: 'medium',
    link: 'https://en.wikipedia.org/wiki/Obfuscation_(software)#Black-box_obfuscation'
  }
];

export const depthMarkers = Array.from({ length: 85 }, (_, i) => i * 200);

export const zones = [
  { name: 'Surface: Fundamentals', start: 0, end: 2000, color: '#4fc3f7' },
  { name: 'Level 2: Cryptography', start: 2000, end: 4000, color: '#29b6f6' },
  { name: 'Level 3: Systems', start: 4000, end: 6000, color: '#0288d1' },
  { name: 'Level 4: Architecture', start: 6000, end: 8000, color: '#01579b' },
  { name: 'Level 5: Operations', start: 8000, end: 10000, color: '#1a237e' },
  { name: 'Level 6: Advanced Trust', start: 10000, end: 12000, color: '#311b92' },
  { name: 'Level 7: Theoretical', start: 12000, end: 14000, color: '#000051' },
  { name: 'Level 8: The Void', start: 14000, end: 16500, color: '#000000' }
];
