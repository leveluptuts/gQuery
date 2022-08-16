export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Affiliate = {
  __typename?: 'Affiliate';
  _id: Scalars['ID'];
  affiliateId?: Maybe<Scalars['ID']>;
  paypalEmail?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type AffiliateInput = {
  _id?: InputMaybe<Scalars['ID']>;
  affiliateId: Scalars['ID'];
  paypalEmail: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type AffiliateSales = {
  __typename?: 'AffiliateSales';
  _id: Scalars['ID'];
  affiliate?: Maybe<User>;
  affiliateId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  order?: Maybe<Order>;
  subscription?: Maybe<Sub>;
  totalSale: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type AffiliateSalesInput = {
  _id?: InputMaybe<Scalars['ID']>;
  affiliateId?: InputMaybe<Scalars['ID']>;
  orderId?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AuthenticateParamsInput = {
  access_token?: InputMaybe<Scalars['String']>;
  access_token_secret?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserInput>;
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isEditor?: Maybe<Scalars['Boolean']>;
  photoId?: Maybe<Scalars['String']>;
  profile?: Maybe<AuthorProfile>;
  social?: Maybe<AuthorSocial>;
};

export type AuthorProfile = {
  __typename?: 'AuthorProfile';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type AuthorSocial = {
  __typename?: 'AuthorSocial';
  homepage?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type AuthorViewsRevenueResponse = {
  __typename?: 'AuthorViewsRevenueResponse';
  authors: Array<AuthorViewsSummary>;
  totals: TotalViewsSummary;
};

export type AuthorViewsSummary = {
  __typename?: 'AuthorViewsSummary';
  email: Scalars['String'];
  profile: Profile;
  revenueShare: Scalars['Int'];
  viewsInPeriod: Scalars['Int'];
  viewsPercent: Scalars['Int'];
};

export type CardBg = {
  __typename?: 'CardBg';
  _id: Scalars['ID'];
  bgImageCloudId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CardBgInput = {
  bgImageCloudId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Cart = {
  __typename?: 'Cart';
  _id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  totalSales?: Maybe<Scalars['Int']>;
};

export type CartInput = {
  _id: Scalars['ID'];
};

export type Choice = {
  __typename?: 'Choice';
  _id?: Maybe<Scalars['ID']>;
  correct?: Maybe<Scalars['Boolean']>;
  hint?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ChoiceInput = {
  _id?: InputMaybe<Scalars['ID']>;
  correct?: InputMaybe<Scalars['Boolean']>;
  hint?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type CodeStarter = {
  __typename?: 'CodeStarter';
  _id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sandboxUrl?: Maybe<Scalars['String']>;
};

export type CodeStarterInput = {
  _id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  sandboxUrl?: InputMaybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID'];
  author?: Maybe<Author>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  pinned?: Maybe<Scalars['Boolean']>;
  playlist?: Maybe<Playlist>;
  playlistId?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
  postId?: Maybe<Scalars['String']>;
  repliedToId?: Maybe<Scalars['String']>;
  tutorial?: Maybe<Tutorial>;
  tutorialId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CommentInput = {
  authorId?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Date']>;
  playlistId?: InputMaybe<Scalars['String']>;
  postId?: InputMaybe<Scalars['String']>;
  repliedToId?: InputMaybe<Scalars['String']>;
  tutorialId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
};

export type ContactEmailInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export enum ContentType {
  Playlist = 'PLAYLIST',
  Post = 'POST',
  Tutorial = 'TUTORIAL'
}

export type Coupon = {
  __typename?: 'Coupon';
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  createdAt: Scalars['Date'];
  isPercentageDiscount: Scalars['Boolean'];
  name: Scalars['String'];
  products: Array<Maybe<Scalars['String']>>;
  updatedAt: Scalars['Date'];
};

export type CouponInput = {
  amount: Scalars['Int'];
  isPercentageDiscount: Scalars['Boolean'];
  name: Scalars['String'];
  products: Array<InputMaybe<Scalars['String']>>;
};

export type Course = {
  __typename?: 'Course';
  _id: Scalars['ID'];
  bgColor?: Maybe<Scalars['String']>;
  bgImage?: Maybe<Scalars['String']>;
  bgImageCloudId?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  status?: Maybe<Status>;
  steps?: Maybe<Array<Maybe<Steps>>>;
  title: Scalars['String'];
  tutorialsLength?: Maybe<Scalars['Int']>;
};

export type CourseInput = {
  _id?: InputMaybe<Scalars['ID']>;
  bgColor?: InputMaybe<Scalars['String']>;
  bgImage?: InputMaybe<Scalars['String']>;
  bgImageCloudId?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Status>;
  steps?: InputMaybe<Array<InputMaybe<StepsInput>>>;
  title?: InputMaybe<Scalars['String']>;
  tutorialsLength?: InputMaybe<Scalars['Int']>;
};

export enum CourseType {
  Post = 'POST',
  Quiz = 'QUIZ',
  Series = 'SERIES'
}

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  customFields?: Maybe<CustomerCustomFields>;
  fax?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
};

export type CustomerCustomFields = {
  __typename?: 'CustomerCustomFields';
  affiliateId?: Maybe<Scalars['String']>;
};

export type CustomerReturn = {
  __typename?: 'CustomerReturn';
  customer?: Maybe<Customer>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Email = {
  __typename?: 'Email';
  address: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type EmailRecord = {
  __typename?: 'EmailRecord';
  address?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  sessionId?: Maybe<Scalars['String']>;
  tokens?: Maybe<Tokens>;
  user?: Maybe<User>;
};

export type MuxAsset = {
  __typename?: 'MUXAsset';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  playback_ids?: Maybe<Array<Maybe<PlaybackId>>>;
  status?: Maybe<Scalars['String']>;
};

export type MuxPlayback = {
  __typename?: 'MUXPlayback';
  id?: Maybe<Scalars['ID']>;
};

export type MuxUpload = {
  __typename?: 'MUXUpload';
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCC?: Maybe<CustomerReturn>;
  addRole?: Maybe<User>;
  addSubscriptionToUser?: Maybe<User>;
  addTeamMember?: Maybe<Team>;
  applyCancellationOffer: SubscriptionReturn;
  authenticate: Scalars['Boolean'];
  cancelSubscription: SubscriptionReturn;
  changePassword: Scalars['Boolean'];
  chargeCc?: Maybe<Scalars['String']>;
  claimSeat?: Maybe<TeamMember>;
  createAffiliate?: Maybe<Affiliate>;
  createCardBg?: Maybe<CardBg>;
  createCodeStarter?: Maybe<CodeStarter>;
  createComment?: Maybe<Comment>;
  createCoupon?: Maybe<Coupon>;
  createCourse?: Maybe<Course>;
  createPost?: Maybe<Post>;
  createPotentialSeries?: Maybe<PotentialSeries>;
  createQuiz?: Maybe<Quiz>;
  createQuizResult?: Maybe<QuizResult>;
  createSeries?: Maybe<Playlist>;
  createSubscription?: Maybe<SubscriptionReturn>;
  createTeam?: Maybe<Team>;
  createTutorial?: Maybe<Tutorial>;
  createTutorialViewLog?: Maybe<Scalars['Boolean']>;
  createUser: Scalars['Boolean'];
  deleteCardBg?: Maybe<Scalars['Boolean']>;
  deleteCodeStarter?: Maybe<Scalars['Boolean']>;
  deleteComment?: Maybe<Scalars['ID']>;
  deleteCoupon?: Maybe<Scalars['Boolean']>;
  deleteCourse?: Maybe<Scalars['Boolean']>;
  deletePost?: Maybe<Scalars['Boolean']>;
  deleteQuiz?: Maybe<Scalars['Boolean']>;
  deleteTag?: Maybe<Scalars['Boolean']>;
  deleteTags?: Maybe<Scalars['Boolean']>;
  deleteTutorialViewLog?: Maybe<Scalars['Boolean']>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  endMasquerade?: Maybe<Scalars['Boolean']>;
  generateSalesReports?: Maybe<Scalars['Boolean']>;
  getAsset?: Maybe<MuxAsset>;
  importYoutubePlaylist?: Maybe<Playlist>;
  loginWithLink?: Maybe<User>;
  logout: Scalars['Boolean'];
  masquerade?: Maybe<Scalars['Boolean']>;
  reSubscription?: Maybe<SubscriptionReturn>;
  refreshAsset?: Maybe<MuxAsset>;
  refundOrder?: Maybe<Scalars['Boolean']>;
  refundTransaction?: Maybe<Transaction>;
  removeInterest?: Maybe<Scalars['String']>;
  removeRole?: Maybe<User>;
  removeTeamMember?: Maybe<Team>;
  removeUpload?: Maybe<Tutorial>;
  reorderCourses?: Maybe<Array<Maybe<Course>>>;
  reorderPlaylists?: Maybe<Array<Maybe<Playlist>>>;
  reorderQuizzes?: Maybe<Array<Maybe<Quiz>>>;
  scheduleStudentAccountEmail: Scalars['Boolean'];
  sendContactEmail?: Maybe<Scalars['Boolean']>;
  sendLoginLinkEmail: Scalars['Boolean'];
  sendResetPasswordEmail: Scalars['Boolean'];
  sendStripeSubEmail?: Maybe<Scalars['Boolean']>;
  sendSuggestionEmail?: Maybe<Scalars['Boolean']>;
  sendVerificationEmail: Scalars['Boolean'];
  setInterest?: Maybe<Scalars['String']>;
  setNewsletterStatus?: Maybe<User>;
  setPassword: Scalars['Boolean'];
  setPostStatus?: Maybe<Post>;
  setQuizStatus?: Maybe<Quiz>;
  setStatus?: Maybe<Playlist>;
  setTheme?: Maybe<User>;
  setUserPlaybackRate?: Maybe<User>;
  setVisibility?: Maybe<Tutorial>;
  syncLengths?: Maybe<Array<Maybe<Playlist>>>;
  syncTags?: Maybe<Array<Maybe<Tag>>>;
  testWebhook?: Maybe<Scalars['Boolean']>;
  toggleAutoPlay: Scalars['Boolean'];
  toggleBeta: User;
  toggleComplete?: Maybe<PotentialSeries>;
  toggleIsPremium?: Maybe<Playlist>;
  togglePinned?: Maybe<Comment>;
  toggleRetired?: Maybe<PotentialSeries>;
  toggleRole?: Maybe<User>;
  toggleSelected?: Maybe<PotentialSeries>;
  unVote?: Maybe<Scalars['Boolean']>;
  updateAffiliate?: Maybe<Affiliate>;
  updateAuthorPaypalEmail?: Maybe<User>;
  updateCC?: Maybe<CustomerReturn>;
  updateCodeStarter?: Maybe<CodeStarter>;
  updateComment?: Maybe<Comment>;
  updateCoupon?: Maybe<Coupon>;
  updateCourse?: Maybe<Course>;
  updateCourseStatus?: Maybe<Course>;
  updateNumberOfSeats?: Maybe<UpdateTeamResult>;
  updatePost?: Maybe<Post>;
  updateQuiz?: Maybe<Quiz>;
  updateQuizResult?: Maybe<QuizResult>;
  updateSeries?: Maybe<Playlist>;
  updateSocialCard?: Maybe<Scalars['Boolean']>;
  updateTutorial?: Maybe<Tutorial>;
  updateUserEmail?: Maybe<User>;
  updateUserPhoto?: Maybe<User>;
  updateUserProfile?: Maybe<User>;
  upgradeSubscription?: Maybe<SubscriptionReturn>;
  verifyAuthentication: Scalars['Boolean'];
  verifyEmail: Scalars['Boolean'];
  vote?: Maybe<Scalars['Boolean']>;
};


export type MutationAddCcArgs = {
  paymentMethodNonce: Scalars['String'];
};


export type MutationAddRoleArgs = {
  role: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationAddSubscriptionToUserArgs = {
  subId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationAddTeamMemberArgs = {
  teamMemberInput: TeamMemberInput;
};


export type MutationAuthenticateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCancelSubscriptionArgs = {
  cancelNow?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationChargeCcArgs = {
  order: OrderInput;
};


export type MutationClaimSeatArgs = {
  teamId: Scalars['String'];
  teamMemberEmail: Scalars['String'];
};


export type MutationCreateAffiliateArgs = {
  affiliate: AffiliateInput;
};


export type MutationCreateCardBgArgs = {
  cardBg: CardBgInput;
};


export type MutationCreateCodeStarterArgs = {
  codeStarter: CodeStarterInput;
};


export type MutationCreateCommentArgs = {
  comment?: InputMaybe<CommentInput>;
};


export type MutationCreateCouponArgs = {
  coupon: CouponInput;
};


export type MutationCreateCourseArgs = {
  course: CourseInput;
};


export type MutationCreatePostArgs = {
  post: PostInput;
};


export type MutationCreatePotentialSeriesArgs = {
  name: Scalars['String'];
};


export type MutationCreateQuizArgs = {
  quiz: QuizInput;
};


export type MutationCreateQuizResultArgs = {
  quizResult: QuizResultInput;
};


export type MutationCreateSubscriptionArgs = {
  subscription: SubscriptionsInput;
};


export type MutationCreateTeamArgs = {
  teamInput: TeamInput;
};


export type MutationCreateTutorialViewLogArgs = {
  contentAuthorId: Scalars['ID'];
  contentId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteCardBgArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteCodeStarterArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteCouponArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteCourseArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeletePostArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteQuizArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteTagArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteTutorialViewLogArgs = {
  contentId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};


export type MutationGenerateSalesReportsArgs = {
  gt?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
};


export type MutationGetAssetArgs = {
  id: Scalars['String'];
  tutorialId: Scalars['ID'];
};


export type MutationImportYoutubePlaylistArgs = {
  id: Scalars['ID'];
  seriesId: Scalars['ID'];
};


export type MutationLoginWithLinkArgs = {
  authDigest: Scalars['String'];
  email: Scalars['String'];
  expirationTimestamp: Scalars['String'];
};


export type MutationMasqueradeArgs = {
  userId: Scalars['ID'];
};


export type MutationRefreshAssetArgs = {
  id: Scalars['String'];
  tutorialId: Scalars['ID'];
};


export type MutationRefundOrderArgs = {
  orderId: Scalars['String'];
  transactionId: Scalars['String'];
};


export type MutationRefundTransactionArgs = {
  transactionId: Scalars['ID'];
};


export type MutationRemoveInterestArgs = {
  tag: Scalars['String'];
};


export type MutationRemoveRoleArgs = {
  role: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationRemoveTeamMemberArgs = {
  teamId: Scalars['String'];
  teamMemberEmail: Scalars['String'];
};


export type MutationRemoveUploadArgs = {
  _id: Scalars['ID'];
};


export type MutationReorderCoursesArgs = {
  courses: Array<CourseInput>;
};


export type MutationReorderQuizzesArgs = {
  quizzes: Array<QuizInput>;
};


export type MutationScheduleStudentAccountEmailArgs = {
  studentEmail: Scalars['String'];
};


export type MutationSendContactEmailArgs = {
  input: ContactEmailInput;
};


export type MutationSendLoginLinkEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendSuggestionEmailArgs = {
  suggestion: Scalars['String'];
};


export type MutationSendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSetInterestArgs = {
  tag: Scalars['String'];
};


export type MutationSetNewsletterStatusArgs = {
  email?: InputMaybe<Scalars['String']>;
  newsletter: Scalars['String'];
};


export type MutationSetPasswordArgs = {
  authDigest: Scalars['String'];
  email: Scalars['String'];
  expirationTimestamp: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationSetPostStatusArgs = {
  _id: Scalars['ID'];
  status: Scalars['String'];
};


export type MutationSetQuizStatusArgs = {
  _id: Scalars['ID'];
  status: Scalars['String'];
};


export type MutationSetStatusArgs = {
  _id: Scalars['ID'];
  status: Scalars['String'];
};


export type MutationSetThemeArgs = {
  theme: Scalars['String'];
};


export type MutationSetUserPlaybackRateArgs = {
  newRate: Scalars['Float'];
};


export type MutationSetVisibilityArgs = {
  _id: Scalars['ID'];
  visibility: Visibility;
};


export type MutationTestWebhookArgs = {
  type: Scalars['String'];
};


export type MutationToggleCompleteArgs = {
  _id: Scalars['ID'];
};


export type MutationToggleIsPremiumArgs = {
  _id: Scalars['ID'];
};


export type MutationTogglePinnedArgs = {
  _id: Scalars['ID'];
};


export type MutationToggleRetiredArgs = {
  _id: Scalars['ID'];
};


export type MutationToggleRoleArgs = {
  role: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationToggleSelectedArgs = {
  _id: Scalars['ID'];
};


export type MutationUnVoteArgs = {
  seriesId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationUpdateAffiliateArgs = {
  affiliate: AffiliateInput;
};


export type MutationUpdateAuthorPaypalEmailArgs = {
  paypalEmail: Scalars['String'];
};


export type MutationUpdateCcArgs = {
  paymentMethodNonce: Scalars['String'];
  paymentMethodToken: Scalars['String'];
};


export type MutationUpdateCodeStarterArgs = {
  codeStarter: CodeStarterInput;
};


export type MutationUpdateCommentArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  comment?: InputMaybe<CommentInput>;
};


export type MutationUpdateCouponArgs = {
  _id: Scalars['ID'];
  coupon: CouponInput;
};


export type MutationUpdateCourseArgs = {
  course: CourseInput;
};


export type MutationUpdateCourseStatusArgs = {
  _id: Scalars['ID'];
  status: Scalars['String'];
};


export type MutationUpdateNumberOfSeatsArgs = {
  numberOfSeats: Scalars['Int'];
  teamId: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  post: PostInput;
};


export type MutationUpdateQuizArgs = {
  quiz: QuizInput;
};


export type MutationUpdateQuizResultArgs = {
  quizResult: QuizResultInput;
};


export type MutationUpdateSeriesArgs = {
  playlist: PlaylistInput;
};


export type MutationUpdateSocialCardArgs = {
  socialCardInput: SocialCardInput;
};


export type MutationUpdateTutorialArgs = {
  _id: Scalars['ID'];
  tutorial: TutorialInput;
};


export type MutationUpdateUserEmailArgs = {
  email: Scalars['String'];
};


export type MutationUpdateUserPhotoArgs = {
  photoId: Scalars['String'];
};


export type MutationUpdateUserProfileArgs = {
  profile: ProfileInput;
};


export type MutationVerifyAuthenticationArgs = {
  params: AuthenticateParamsInput;
  serviceName: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  authDigest: Scalars['String'];
  email: Scalars['String'];
};


export type MutationVoteArgs = {
  seriesId: Scalars['String'];
  userId: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID'];
  cart?: Maybe<Array<Maybe<Cart>>>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Playlist>>>;
  number: Scalars['Int'];
  total: Scalars['String'];
  transactionId: Scalars['String'];
  user: Scalars['String'];
};

export type OrderInput = {
  affiliateId?: InputMaybe<Scalars['String']>;
  cart: Array<CartInput>;
  coupon?: InputMaybe<Scalars['String']>;
  nonce: Scalars['String'];
};

export type PastQuizResult = {
  __typename?: 'PastQuizResult';
  createdAt?: Maybe<Scalars['Date']>;
  questionResults?: Maybe<Array<Maybe<Results>>>;
  quizId?: Maybe<Scalars['ID']>;
  score?: Maybe<Scalars['Float']>;
};

export type Payment = {
  __typename?: 'Payment';
  nextPaymentDue?: Maybe<Scalars['Date']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  cardType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['Boolean']>;
  expirationMonth?: Maybe<Scalars['String']>;
  expirationYear?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Plan = {
  __typename?: 'Plan';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PlanConfig = {
  __typename?: 'PlanConfig';
  billingName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  offerDiscountOnCancellation?: Maybe<Scalars['Boolean']>;
  percentOff?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  productType?: Maybe<Scalars['String']>;
};

export type PlaybackId = {
  __typename?: 'PlaybackId';
  id?: Maybe<Scalars['ID']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  _id: Scalars['ID'];
  author?: Maybe<Author>;
  authorId?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  bgImageCloudId?: Maybe<Scalars['String']>;
  codeLink?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  didBuy?: Maybe<Scalars['Boolean']>;
  didViewAll?: Maybe<Scalars['Boolean']>;
  downloadSeriesKey?: Maybe<Scalars['String']>;
  files?: Maybe<Scalars['String']>;
  filesSize?: Maybe<Scalars['String']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  playId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['Int']>;
  releaseDate?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  tutorials?: Maybe<Array<Maybe<Tutorial>>>;
  views?: Maybe<Scalars['Int']>;
};

export type PlaylistInput = {
  _id?: InputMaybe<Scalars['ID']>;
  authorId: Scalars['ID'];
  bgColor?: InputMaybe<Scalars['String']>;
  bgImage?: InputMaybe<Scalars['String']>;
  bgImageCloudId?: InputMaybe<Scalars['String']>;
  codeLink?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  downloadSeriesKey?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Scalars['String']>;
  filesSize?: InputMaybe<Scalars['String']>;
  isPremium: Scalars['Boolean'];
  level: Scalars['Int'];
  logo: Scalars['String'];
  order: Scalars['Int'];
  playId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  releaseDate: Scalars['String'];
  salePrice?: InputMaybe<Scalars['String']>;
  sku: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export enum Position {
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID'];
  author: Author;
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  excerpt: Scalars['String'];
  sharingImage?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  status: Status;
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
  videoId?: Maybe<Scalars['String']>;
};

export type PostInput = {
  authorId: Scalars['String'];
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['Date']>;
  sharingImage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Date']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type PotentialSeries = {
  __typename?: 'PotentialSeries';
  _id: Scalars['ID'];
  complete?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  retired?: Maybe<Scalars['Boolean']>;
  selected?: Maybe<Scalars['Boolean']>;
  userDidVote?: Maybe<Scalars['Boolean']>;
  value: Scalars['Float'];
};

export type Profile = {
  __typename?: 'Profile';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  paypalId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type ProfitWell = {
  __typename?: 'ProfitWell';
  active_customers?: Maybe<Array<Maybe<ProfitWellData>>>;
  recurring_revenue?: Maybe<Array<Maybe<ProfitWellData>>>;
};

export type ProfitWellData = {
  __typename?: 'ProfitWellData';
  date?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  activeTutorial?: Maybe<Tutorial>;
  adminAffiliateSales?: Maybe<Array<Maybe<AffiliateSales>>>;
  adminAffiliateSubscriptions?: Maybe<Array<Maybe<AffiliateSales>>>;
  adminQuizResults?: Maybe<Array<Maybe<QuizResult>>>;
  affiliateSales?: Maybe<Array<Maybe<AffiliateSales>>>;
  affiliateSubscriptions?: Maybe<Array<Maybe<AffiliateSales>>>;
  affiliates?: Maybe<Array<Maybe<User>>>;
  allCourses?: Maybe<Array<Maybe<Course>>>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  allQuizzes?: Maybe<Array<Maybe<Quiz>>>;
  allTutorials?: Maybe<Array<Maybe<Tutorial>>>;
  allVotes?: Maybe<Array<Maybe<Vote>>>;
  authorViewsAndRevenue: AuthorViewsRevenueResponse;
  authors?: Maybe<Array<User>>;
  btToken?: Maybe<Scalars['String']>;
  cardBgs?: Maybe<Array<Maybe<CardBg>>>;
  checkCoupon?: Maybe<Coupon>;
  codeStarters?: Maybe<Array<Maybe<CodeStarter>>>;
  comingSoon?: Maybe<Playlist>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  completedSeries?: Maybe<Array<Maybe<PotentialSeries>>>;
  coupons?: Maybe<Array<Maybe<Coupon>>>;
  course?: Maybe<Course>;
  courses?: Maybe<Array<Maybe<Course>>>;
  estimateSeatsChange?: Maybe<SeatsChangeEstimate>;
  getUpload?: Maybe<MuxUpload>;
  getUser?: Maybe<User>;
  getUserByEmail?: Maybe<User>;
  latestPlaylist?: Maybe<Playlist>;
  myPosts?: Maybe<Array<Maybe<Post>>>;
  myQuizzes?: Maybe<Array<Maybe<Quiz>>>;
  newUsers?: Maybe<Array<Maybe<User>>>;
  nullSubs?: Maybe<Array<Maybe<User>>>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  pendingPosts?: Maybe<Array<Maybe<Post>>>;
  pendingPostsCount?: Maybe<Scalars['Int']>;
  pendingQuizzes?: Maybe<Array<Maybe<Quiz>>>;
  pendingQuizzesCount?: Maybe<Scalars['Int']>;
  playlist?: Maybe<Playlist>;
  playlistAdmin?: Maybe<Playlist>;
  playlistById?: Maybe<Playlist>;
  playlists?: Maybe<Array<Maybe<Playlist>>>;
  playlistsAdmin?: Maybe<Array<Maybe<Playlist>>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsCount?: Maybe<Scalars['Int']>;
  potentialSeries?: Maybe<Array<Maybe<PotentialSeries>>>;
  product?: Maybe<Playlist>;
  profitWell?: Maybe<ProfitWell>;
  quiz?: Maybe<Quiz>;
  quizResult?: Maybe<QuizResult>;
  quizResults?: Maybe<Array<Maybe<QuizResult>>>;
  quizzes?: Maybe<Array<Maybe<Quiz>>>;
  retiredPotentialSeries?: Maybe<Array<Maybe<PotentialSeries>>>;
  salesData?: Maybe<SalesData>;
  salesVolume?: Maybe<Array<Maybe<Sales>>>;
  selectedPotentialSeries?: Maybe<PotentialSeries>;
  selectedPotentialSeriesList?: Maybe<Array<Maybe<PotentialSeries>>>;
  seriesBySales?: Maybe<Array<Maybe<Cart>>>;
  seriesByViewLogs?: Maybe<Array<Maybe<Playlist>>>;
  singleUser?: Maybe<User>;
  startedSeries?: Maybe<Array<Maybe<Playlist>>>;
  suggestedSeries?: Maybe<Array<Maybe<Playlist>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Maybe<Team>>>;
  totalPlaylists?: Maybe<Scalars['Int']>;
  tutorial?: Maybe<Tutorial>;
  tutorials?: Maybe<Array<Maybe<Tutorial>>>;
  user?: Maybe<User>;
  userAffiliate?: Maybe<Affiliate>;
  userDownloads?: Maybe<Array<Maybe<Playlist>>>;
  userOrders?: Maybe<Array<Maybe<Order>>>;
  userOrdersAdmin?: Maybe<Array<Maybe<Order>>>;
  userPaymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  userSubscription?: Maybe<Sub>;
  userTeam?: Maybe<Team>;
  userTransaction?: Maybe<Transaction>;
  userTransactions?: Maybe<Array<Maybe<Transaction>>>;
  userVotes?: Maybe<Array<Maybe<Vote>>>;
  users?: Maybe<Array<Maybe<User>>>;
  viewLogsInRange: Array<ViewLog>;
};


export type QueryActiveTutorialArgs = {
  playlistSlug?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryAdminAffiliateSalesArgs = {
  affiliateId: Scalars['ID'];
  gt?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
};


export type QueryAdminAffiliateSubscriptionsArgs = {
  affiliateId: Scalars['ID'];
  gt?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
};


export type QueryAffiliateSalesArgs = {
  gt?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
};


export type QueryAffiliateSubscriptionsArgs = {
  gt?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
};


export type QueryAllTutorialsArgs = {
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAllVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryAuthorViewsAndRevenueArgs = {
  endDate?: InputMaybe<Scalars['Date']>;
  startDate: Scalars['Date'];
};


export type QueryCheckCouponArgs = {
  name: Scalars['String'];
  productType: Scalars['String'];
};


export type QueryCommentArgs = {
  _id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  isSortReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  playlistId?: InputMaybe<Scalars['String']>;
  postId?: InputMaybe<Scalars['String']>;
  tutorialId?: InputMaybe<Scalars['String']>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryEstimateSeatsChangeArgs = {
  newNumberOfSeats: Scalars['Int'];
  teamId: Scalars['String'];
};


export type QueryGetUserByEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryMyPostsArgs = {
  authorId: Scalars['ID'];
};


export type QueryMyQuizzesArgs = {
  authorId: Scalars['ID'];
};


export type QueryOrderArgs = {
  _id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  filter?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['Date']>;
  limit?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Date']>;
};


export type QueryPlaylistArgs = {
  sku?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPlaylistAdminArgs = {
  _id: Scalars['ID'];
};


export type QueryPlaylistByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryPlaylistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryPlaylistsAdminArgs = {
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPotentialSeriesArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryQuizArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryQuizResultArgs = {
  quizId: Scalars['ID'];
};


export type QuerySalesDataArgs = {
  gt?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
};


export type QuerySalesVolumeArgs = {
  gt?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
};


export type QuerySingleUserArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
};


export type QueryTeamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryTutorialArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTutorialsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  playlistSlug?: InputMaybe<Scalars['String']>;
};


export type QueryUserOrdersAdminArgs = {
  _id: Scalars['ID'];
};


export type QueryUserTeamArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};


export type QueryUserTransactionArgs = {
  invoiceId: Scalars['ID'];
};


export type QueryUserTransactionsArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserVotesArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryViewLogsInRangeArgs = {
  endDate?: InputMaybe<Scalars['Date']>;
  startDate: Scalars['Date'];
};

export type Question = {
  __typename?: 'Question';
  _id?: Maybe<Scalars['ID']>;
  choices?: Maybe<Array<Maybe<Choice>>>;
  hint?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
};

export type QuestionInput = {
  _id?: InputMaybe<Scalars['ID']>;
  choices?: InputMaybe<Array<InputMaybe<ChoiceInput>>>;
  hint?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Scalars['String']>;
};

export type Quiz = {
  __typename?: 'Quiz';
  _id: Scalars['ID'];
  author?: Maybe<Author>;
  authorId?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  bgImage?: Maybe<Scalars['String']>;
  bgImageCloudId?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  didComplete?: Maybe<Scalars['Boolean']>;
  directions?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  questions?: Maybe<Array<Maybe<Question>>>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
};

export type QuizInput = {
  _id: Scalars['ID'];
  authorId?: InputMaybe<Scalars['ID']>;
  bgColor?: InputMaybe<Scalars['String']>;
  bgImage?: InputMaybe<Scalars['String']>;
  bgImageCloudId?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionInput>>>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  title?: InputMaybe<Scalars['String']>;
};

export type QuizResult = {
  __typename?: 'QuizResult';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  pastResults?: Maybe<Array<Maybe<PastQuizResult>>>;
  questionResults?: Maybe<Array<Maybe<Results>>>;
  quizId?: Maybe<Scalars['ID']>;
  score?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['ID']>;
};

export type QuizResultInput = {
  questionResults?: InputMaybe<Array<InputMaybe<ResultsInput>>>;
  quizId?: InputMaybe<Scalars['ID']>;
  score?: InputMaybe<Scalars['Float']>;
};

export type ReorderPlaylistInput = {
  _id: Scalars['ID'];
};

export type Results = {
  __typename?: 'Results';
  isCorrect?: Maybe<Scalars['Boolean']>;
  questionId?: Maybe<Scalars['ID']>;
};

export type ResultsInput = {
  isCorrect?: InputMaybe<Scalars['Boolean']>;
  questionId?: InputMaybe<Scalars['ID']>;
};

export type RevenueData = {
  __typename?: 'RevenueData';
  month?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Int']>;
  sales?: Maybe<Scalars['Int']>;
  subscription?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['String']>;
};

export type RevenueYear = {
  __typename?: 'RevenueYear';
  average?: Maybe<Scalars['Int']>;
  mean?: Maybe<Scalars['Int']>;
  median?: Maybe<Scalars['Int']>;
  revenue?: Maybe<Scalars['Int']>;
};

export type Sales = {
  __typename?: 'Sales';
  date?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['String']>;
};

export type SalesData = {
  __typename?: 'SalesData';
  revenueByMonth?: Maybe<Array<RevenueData>>;
  revenueForPeriod?: Maybe<Scalars['Float']>;
  revenueForYear?: Maybe<Scalars['Float']>;
  year?: Maybe<RevenueYear>;
};

export type SeatsChangeEstimate = {
  __typename?: 'SeatsChangeEstimate';
  daysRemainingInBillingPeriod: Scalars['Int'];
  newNumberOfSeats: Scalars['Int'];
  newPlanPricePerYear: Scalars['Int'];
  nextChargeDate: Scalars['Date'];
  priceQuotedPerSeat: Scalars['Int'];
  proratedAmount: Scalars['Int'];
  seatsDelta: Scalars['Int'];
};

export type Settings = {
  __typename?: 'Settings';
  autoPlay?: Maybe<Scalars['Boolean']>;
  newsletter?: Maybe<Scalars['String']>;
  playbackRate?: Maybe<Scalars['Float']>;
  theme?: Maybe<Scalars['String']>;
};

export type Social = {
  __typename?: 'Social';
  homepage?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type SocialCardInput = {
  filename: Scalars['String'];
  imageData: Scalars['String'];
  type: Scalars['String'];
};

export type SocialInput = {
  homepage?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export enum Status {
  Active = 'active',
  Hidden = 'hidden',
  Pending = 'pending',
  Prerelease = 'prerelease',
  Retired = 'retired'
}

export type Steps = {
  __typename?: 'Steps';
  _id?: Maybe<Scalars['ID']>;
  position?: Maybe<Position>;
  post?: Maybe<Post>;
  quiz?: Maybe<Quiz>;
  series?: Maybe<Playlist>;
  type?: Maybe<CourseType>;
};

export type StepsInput = {
  _id?: InputMaybe<Scalars['ID']>;
  position?: InputMaybe<Position>;
  type?: InputMaybe<CourseType>;
};

export type Sub = {
  __typename?: 'Sub';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isCancelled: Scalars['Boolean'];
  isEducationalPlan: Scalars['Boolean'];
  isExpiring: Scalars['Boolean'];
  isPastDue: Scalars['Boolean'];
  isProAnnualPlan: Scalars['Boolean'];
  isProMonthlyPlan: Scalars['Boolean'];
  isTeamPlan: Scalars['Boolean'];
  nextChargeAmount: Scalars['String'];
  nextChargeDate: Scalars['Date'];
  numberOfSeats: Scalars['Int'];
  planConfig: PlanConfig;
  status: SubscriptionStatus;
};

export type SubscriptionReturn = {
  __typename?: 'SubscriptionReturn';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Expired = 'EXPIRED',
  Pastdue = 'PASTDUE',
  Pending = 'PENDING'
}

export enum SubscriptionType {
  Braintree = 'BRAINTREE',
  Stripe = 'STRIPE'
}

export type Subscriptions = {
  __typename?: 'Subscriptions';
  id: Scalars['String'];
  monthlySubs?: Maybe<Scalars['Int']>;
  newSubs?: Maybe<Scalars['Int']>;
  yearlySubs?: Maybe<Scalars['Int']>;
};

export type SubscriptionsInput = {
  affiliateId?: InputMaybe<Scalars['String']>;
  couponName?: InputMaybe<Scalars['String']>;
  nonce: Scalars['String'];
  plan: SubscriptionsPlanInput;
  productType: Scalars['String'];
};

export type SubscriptionsPlanInput = {
  _id: Scalars['String'];
  isTeamPlan?: InputMaybe<Scalars['Boolean']>;
  numberOfSeats?: InputMaybe<Scalars['Int']>;
  price: Scalars['String'];
  teamName?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  _id: Scalars['ID'];
  name: Scalars['String'];
};

export type TagInput = {
  _id: Scalars['ID'];
  name: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  _id: Scalars['ID'];
  accountOwner: User;
  members: Array<TeamMember>;
  name: Scalars['String'];
  numberOfSeats: Scalars['Int'];
  priceQuotedPerSeat: Scalars['Int'];
};

export type TeamInput = {
  accountOwnerUserId: Scalars['String'];
  name: Scalars['String'];
  numberOfSeats: Scalars['Int'];
  priceQuotedPerSeat: Scalars['Int'];
};

export type TeamMember = {
  __typename?: 'TeamMember';
  addedAt?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  isSeatClaimed: Scalars['Boolean'];
  isTeamAdmin: Scalars['Boolean'];
  lastClaimSeatEmailSentAt?: Maybe<Scalars['Date']>;
  seatClaimedAt?: Maybe<Scalars['Date']>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
};

export type TeamMemberInput = {
  email: Scalars['String'];
  isTeamAdmin?: InputMaybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type TotalViewsSummary = {
  __typename?: 'TotalViewsSummary';
  revenue: Scalars['Int'];
  views: Scalars['Int'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  creditCard?: Maybe<PaymentMethod>;
  currencyIsoCode?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['String']>;
  refundedTransactionId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Tutorial = {
  __typename?: 'Tutorial';
  _id: Scalars['ID'];
  asset?: Maybe<MuxAsset>;
  codeStarter?: Maybe<CodeStarter>;
  description?: Maybe<Scalars['String']>;
  didView?: Maybe<Scalars['Boolean']>;
  displayOrder?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  endCode?: Maybe<Scalars['String']>;
  isMux?: Maybe<Scalars['Boolean']>;
  listSlug?: Maybe<Scalars['String']>;
  nextSlug?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Float']>;
  playback?: Maybe<MuxPlayback>;
  playlist?: Maybe<Playlist>;
  playlistId?: Maybe<Scalars['String']>;
  playlistName?: Maybe<Scalars['String']>;
  playlistSlug?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  startCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tutId?: Maybe<Scalars['String']>;
  upload?: Maybe<MuxUpload>;
  visibility?: Maybe<Visibility>;
};

export type TutorialInput = {
  _id?: InputMaybe<Scalars['String']>;
  codeStarter?: InputMaybe<CodeStarterInput>;
  description?: InputMaybe<Scalars['String']>;
  endCode?: InputMaybe<Scalars['String']>;
  listSlug?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Float']>;
  playlistName?: InputMaybe<Scalars['String']>;
  startCode?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Visibility>;
};

export type UpdateTeamResult = {
  __typename?: 'UpdateTeamResult';
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  affiliate?: Maybe<Affiliate>;
  ccFail?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<EmailRecord>>;
  id?: Maybe<Scalars['ID']>;
  interests?: Maybe<Array<Maybe<Scalars['String']>>>;
  isAdmin: Scalars['Boolean'];
  isAffiliate: Scalars['Boolean'];
  isAuthor: Scalars['Boolean'];
  isBanned: Scalars['Boolean'];
  isBeta: Scalars['Boolean'];
  isEditor: Scalars['Boolean'];
  isMasqueradeSession?: Maybe<Scalars['Boolean']>;
  isPro: Scalars['Boolean'];
  isProTeamAccountOwner: Scalars['Boolean'];
  isProTeamMember: Scalars['Boolean'];
  isStripe: Scalars['Boolean'];
  isSuper?: Maybe<Scalars['Boolean']>;
  paypalEmail?: Maybe<Scalars['String']>;
  photoId?: Maybe<Scalars['String']>;
  profile: Profile;
  roles: Array<Maybe<Scalars['String']>>;
  settings: Settings;
  social: Social;
  subscriptionId?: Maybe<Scalars['ID']>;
  subscriptionType?: Maybe<SubscriptionType>;
  username?: Maybe<Scalars['String']>;
  votes?: Maybe<Array<Maybe<Vote>>>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ViewLog = {
  __typename?: 'ViewLog';
  _id?: Maybe<Scalars['ID']>;
  contentAuthorId?: Maybe<Scalars['ID']>;
  contentId?: Maybe<Scalars['ID']>;
  isProView?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['ID']>;
};

export enum Visibility {
  Hidden = 'hidden',
  Public = 'public',
  Unlisted = 'unlisted'
}

export type Vote = {
  __typename?: 'Vote';
  _id?: Maybe<Scalars['String']>;
  series?: Maybe<PotentialSeries>;
  seriesId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};
