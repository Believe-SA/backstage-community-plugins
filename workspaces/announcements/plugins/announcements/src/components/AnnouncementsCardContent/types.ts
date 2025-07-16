/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Props for AnnouncemtsHomepageCard
 *
 * @public
 */
export interface AnnouncementsCardProps {
  /**
   * Maximum number of announcements to display
   */
  max?: number;
  /**
   * Filter announcements by category
   */
  category?: string;
  /**
   * Show only active announcements
   */
  active?: boolean;
  /**
   * Sort announcements by created_at or start_at
   */
  sortBy?: 'created_at' | 'start_at';
  /**
   * Hide start date
   */
  hideStartAt?: boolean;
  /**
   * Order of announcements
   */
  order?: 'asc' | 'desc';
}
