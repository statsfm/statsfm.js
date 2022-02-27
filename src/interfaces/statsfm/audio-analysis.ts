import { Object } from '.';

export interface AudioAnalysisBar {
  start: number;
  duration: number;
  confidence: number;
}

export interface AudioAnalysisBeat {
  start: number;
  duration: number;
  confidence: number;
}

export interface AudioAnalysisSection {
  start: number;
  duration: number;
  confidence: number;
  loudness: number;
  tempo: number;
  tempo_confidence: number;
  key: number;
  key_confidence: number;
  mode: number;
  mode_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
}

export interface AudioAnalysisSegment {
  start: number;
  duration: number;
  confidence: number;
  loudness_start: number;
  loudness_max_time: number;
  loudness_max: number;
  loudness_end: number;
  pitches: number[];
  timbre: number[];
}

export interface AudioAnalysisTatum {
  start: number;
  duration: number;
  confidence: number;
}

export interface AudioAnalysis extends Object {
  bars: AudioAnalysisBar[];
  beats: AudioAnalysisBeat[];
  sections: AudioAnalysisSection[];
  segments: AudioAnalysisSegment[];
  tatums: AudioAnalysisTatum[];
  num_samples: number;
  duration: number;
  sample_md5: string;
  offset_seconds: number;
  window_seconds: number;
  analysis_sample_rate: number;
  analysis_channels: number;
  end_of_fade_in: number;
  start_of_fade_out: number;
  loudness: number;
  tempo: number;
  tempo_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
  key: number;
  key_confidence: number;
  mode: number;
  mode_confidence: number;
}
